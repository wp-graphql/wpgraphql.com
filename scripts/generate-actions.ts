(() => {
  const os = require('os')
  const { execSync } = require('child_process')
  const { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } = require('fs')
  const { join } = require('path')
  const glob = require('fast-glob')
  const { Engine } = require('php-parser')
  const readline = require('readline')
  const { stdin: input, stdout: output } = require('process')

  interface ActionDoc {
    name: string
    since?: string
    description?: string
    parameters: Array<{
      name: string
      type: string
      description: string
    }>
    sourceFile: string
    sourceLine: number
  }

  // Create a promise-based prompt function
  function prompt(question: string): Promise<string> {
    const rl = readline.createInterface({ input, output })
    return new Promise((resolve) => {
      rl.question(question + ' ', (answer: string) => {
        rl.close()
        resolve(answer)
      })
    })
  }

  function cleanupTmp() {
    const tmpDir = join(process.cwd(), '.tmp')
    if (existsSync(tmpDir)) {
      rmSync(tmpDir, { recursive: true, force: true })
    }
  }

  async function getWPGraphQLSource(): Promise<string> {
    const tmpDir = join(process.cwd(), '.tmp')
    cleanupTmp()
    execSync('git clone https://github.com/wp-graphql/wp-graphql.git .tmp')
    return tmpDir
  }

  async function parseActions(basePath: string): Promise<ActionDoc[]> {
    const files = await glob('**/*.php', {
      cwd: basePath,
      ignore: ['vendor/**', 'tests/**']
    })
    console.log(`Found ${files.length} PHP files to parse`)
    
    const engine = new Engine({
      parser: {
        debug: false,
        locations: true,
        extractDoc: true,
        php7: true
      },
      ast: {
        withPositions: true
      }
    })

    const actions: ActionDoc[] = []
    
    for (const file of files) {
      const fullPath = join(basePath, file)
      console.log(`Parsing ${file}...`)
      const code = readFileSync(fullPath, 'utf8')
      
      // First find all docblocks in the file
      const docblocks: { [line: number]: string } = {}
      const docblockRegex = /\/\*\*[\s\S]*?\*\//g
      let match
      while ((match = docblockRegex.exec(code)) !== null) {
        const docblock = match[0]
        const lineNumber = code.substring(0, match.index).split('\n').length
        docblocks[lineNumber] = docblock
      }

      // Helper to find nearest docblock for a line number
      const findNearestDocblock = (line: number): string | null => {
        let nearest = null
        let nearestDistance = Infinity
        
        Object.entries(docblocks).forEach(([lineStr, block]) => {
          const blockLine = parseInt(lineStr, 10)
          const distance = line - blockLine
          if (distance > 0 && distance < nearestDistance) {
            nearest = block
            nearestDistance = distance
          }
        })
        
        return nearest
      }

      try {
        const ast = engine.parseCode(code, file)
        
        // Walk through the AST to find do_action calls
        const walkNode = (node: any) => {
          if (
            node.kind === 'call' && 
            node.what && 
            node.what.kind === 'name' &&
            node.what.name === 'do_action' &&
            node.arguments &&
            node.arguments.length > 0 &&
            node.arguments[0].kind === 'string'
          ) {
            const actionName = node.arguments[0].value
            if (!actionName) return

            const line = node.loc?.start?.line || 0
            // Find nearest docblock for this line
            const docblock = findNearestDocblock(line)
            
            console.log(`\nProcessing ${actionName} in ${file}:${line}`)
            console.log('Found docblock:', {
              raw: docblock?.substring(0, 100) + '...',
              linesBefore: code.split('\n').slice(Math.max(0, line - 5), line).join('\n'),
              linesAfter: code.split('\n').slice(line, line + 5).join('\n')
            })

            const { description, since, params } = parseDocBlock(docblock)

            console.log(`Processing action ${actionName}:`, {
              docblock,
              description,
              since,
              params
            })

            actions.push({
              name: actionName,
              since,
              description,
              parameters: params,
              sourceFile: file,
              sourceLine: line
            })
          }

          // Recursively walk through child nodes
          for (const key in node) {
            if (node[key] && typeof node[key] === 'object') {
              walkNode(node[key])
            }
          }
        }

        walkNode(ast)
      } catch (error) {
        console.error(`Error parsing ${file}:`, error)
      }
    }
    
    return actions
  }

  function findNearestDocBlock(node: any): string | null {
    // Helper to get tokens from node
    const getNodeTokens = (node: any) => {
      if (!node.loc) return []
      const startLine = node.loc.start.line
      const tokens = node.tokens || node.parent?.tokens || []
      return tokens.filter((token: any) => 
        token.type === 'comment' && 
        token.line < startLine && 
        token.value.startsWith('/**')
      )
    }

    // Get tokens for this node and its parent
    const tokens = [
      ...getNodeTokens(node),
      ...(node.parent ? getNodeTokens(node.parent) : [])
    ]

    console.log('Found tokens:', tokens)

    // Find the closest docblock
    const docBlock = tokens
      .reverse()
      .find(token => token.value.startsWith('/**'))

    if (docBlock) {
      // Clean up the docblock content
      const cleaned = docBlock.value
        .replace(/^\/\*+\s*/, '')  // Remove opening /** or /*
        .replace(/\s*\*\/$/, '')    // Remove closing */
        .split('\n')
        .map((line: string) => line.trim().replace(/^\s*\*\s*/, ''))  // Remove leading * and whitespace
        .filter(Boolean)         // Remove empty lines
        .join('\n')
        .trim()

      return cleaned
    }

    return null
  }

  interface DocBlockResult {
    description: string
    since?: string
    params: Array<{ name: string; type: string; description: string }>
  }

  function parseDocBlock(docblock: string | null): DocBlockResult {
    if (!docblock) {
      return { description: '', params: [] }
    }

    // Clean up the docblock first
    const cleanedBlock = docblock
      .replace(/^\/\*\*/, '') // Remove opening /**
      .replace(/\*\/$/, '') // Remove closing */
      .split('\n')
      .map(line => line.trim().replace(/^\*\s*/, '')) // Remove leading asterisks and whitespace
      .filter(Boolean)
      .join('\n')

    const lines = cleanedBlock.split('\n')

    const result: DocBlockResult = {
      description: '',
      params: []
    }

    let descriptionLines: string[] = []
    let isDescription = true

    for (const line of lines) {
      const trimmedLine = line.trim()
      
      if (trimmedLine.startsWith('@')) {
        isDescription = false
      }
      
      if (trimmedLine.startsWith('@since')) {
        result.since = trimmedLine.replace('@since', '').trim()
      } 
      else if (trimmedLine.startsWith('@param')) {
        // More flexible param matching for PHP docblocks
        const paramMatch = trimmedLine.match(/@param\s+([^\s]+)\s+(\$[\w-]+)(?:\s+(.*))?/)
        if (paramMatch) {
          const [, type, name, description] = paramMatch
          result.params.push({
            name: name.replace('$', ''),
            type: type.replace(/^\?/, ''),
            description: description ? description.trim() : ''
          })
        }
      }
      else if (isDescription) {
        descriptionLines.push(trimmedLine)
      }
    }

    result.description = descriptionLines.join('\n').trim()
    return result
  }

  interface ReferenceSection {
    title: string
    description: string
    pages: Array<{
      title: string
      href: string
      slug: string
    }>
  }

  interface DeveloperReference {
    sections: ReferenceSection[]
  }

  async function updateDeveloperReference(actions: ActionDoc[]) {
    const refPath = join(process.cwd(), 'content/developer-reference.json')
    
    // Read existing content or create new structure
    let reference: DeveloperReference = {
      sections: []
    }
    
    if (existsSync(refPath)) {
      try {
        reference = JSON.parse(readFileSync(refPath, 'utf8'))
        // Remove existing actions section if it exists
        reference.sections = reference.sections.filter(section => section.title !== 'Actions')
      } catch (e) {
        console.error('Error reading developer-reference.json, starting fresh', e)
      }
    }

    // Add actions section
    reference.sections.push({
      title: "Actions",
      description: "WordPress provides an API called \"actions\" which allow functions to be executed at specific times during a request. WPGraphQL provides many actions throughout its codebase allowing developers to hook into various points of execution.",
      pages: actions
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(action => ({
          title: action.name,
          href: `/actions/${action.name}`,
          slug: action.name
        }))
    })

    // Write back to file
    writeFileSync(
      refPath,
      JSON.stringify(reference, null, 2)
    )
  }

  async function generateMDXFiles(actions: ActionDoc[]) {
    const outputDir = join(process.cwd(), 'content/actions')
    mkdirSync(outputDir, { recursive: true })
    
    console.log('\nGenerating MDX for actions:', actions.map(a => ({
      name: a.name,
      paramCount: a.parameters.length,
      params: a.parameters.map(p => ({
        name: p.name,
        type: p.type,
        description: p.description
      }))
    })))
    
    // Get list of current action names
    const currentActionNames = new Set(actions.map(action => action.name))
    
    // Remove outdated .mdx files
    const existingFiles = glob.sync('*.mdx', { cwd: outputDir })
    for (const file of existingFiles) {
      const actionName = file.replace('.mdx', '')
      if (!currentActionNames.has(actionName)) {
        console.log(`Removing outdated action file: ${file}`)
        rmSync(join(outputDir, file))
      }
    }
    
    // Generate new/updated files
    for (const action of actions) {
      const frontmatter = `---
title: "${action.name}"
since: "${action.since || 'Unknown'}"
sourceFile: "${action.sourceFile}"
sourceLine: ${action.sourceLine}
---`

      const description = `
${action.description || 'No description available.'}

## Parameters

${action.parameters.length ? `| Name | Type | Description |
|------|------|-------------|
${action.parameters.map((param: { name: string; type: string; description: string }) => 
  `| ${param.name} | \`${param.type.replace(/\|/g, '\\|')}\` | ${param.description} |`
).join('\n')}` : 'This action has no parameters.'}`

      const source = `
## Source

This action is defined in [${action.sourceFile}:${action.sourceLine}](https://github.com/wp-graphql/wp-graphql/blob/develop/${action.sourceFile}#L${action.sourceLine})`

      const example = `
## Examples

\`\`\`php
add_action('${action.name}', function(${action.parameters.map(p => '$' + p.name).join(', ')}) {
    // Add your code here
});
\`\`\``

      const mdxContent = [frontmatter, description, source, example].join('\n\n')
      
      writeFileSync(
        join(outputDir, `${action.name}.md`),
        mdxContent
      )
    }

    // Replace the JSON generation with the new function
    await updateDeveloperReference(actions)
  }

  async function main() {
    try {
      const wpGraphQLPath = await getWPGraphQLSource()
      console.log(`Using WPGraphQL source from: ${wpGraphQLPath}`)
      
      const actions = await parseActions(wpGraphQLPath)
      console.log(`Found ${actions.length} actions`)
      
      await generateMDXFiles(actions)
      console.log(`Generated MDX files in content/actions/`)
    } finally {
      cleanupTmp()
    }
  }

  main().catch(console.error)
})() 