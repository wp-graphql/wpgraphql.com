(() => {
  const os = require('os')
  const { execSync } = require('child_process')
  const { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } = require('fs')
  const { join } = require('path')
  const glob = require('fast-glob')
  const { Engine } = require('php-parser')
  const readline = require('readline')
  const { stdin: input, stdout: output } = require('process')

  interface FilterDoc {
    name: string
    since?: string
    description?: string
    parameters: Array<{
      name: string
      type: string
      description: string
    }>
    returns?: {
      type: string
      description: string
    }
    sourceFile: string
    sourceLine: number
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

  function parseDocBlock(docblock: string | null): {
    description: string
    since?: string
    params: Array<{ name: string; type: string; description: string }>
    returns?: { type: string; description: string }
  } {
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

    const result: {
      description: string
      since?: string
      params: Array<{ name: string; type: string; description: string }>
      returns?: { type: string; description: string }
    } = {
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
      else if (trimmedLine.startsWith('@return')) {
        const returnMatch = trimmedLine.match(/@return\s+([^\s]+)(?:\s+(.*))?/)
        if (returnMatch) {
          const [, type, description] = returnMatch
          result.returns = {
            type: type.replace(/^\?/, ''),
            description: description ? description.trim() : ''
          }
        }
      }
      else if (isDescription) {
        descriptionLines.push(trimmedLine)
      }
    }

    result.description = descriptionLines.join('\n').trim()
    return result
  }

  async function parseFilters(basePath: string): Promise<FilterDoc[]> {
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

    const filters: FilterDoc[] = []
    
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
        
        // Walk through the AST to find apply_filters calls
        const walkNode = (node: any) => {
          if (
            node.kind === 'call' && 
            node.what && 
            node.what.kind === 'name' &&
            node.what.name === 'apply_filters' &&
            node.arguments &&
            node.arguments.length > 0 &&
            node.arguments[0].kind === 'string'
          ) {
            const filterName = node.arguments[0].value
            if (!filterName) return

            const line = node.loc?.start?.line || 0
            const docblock = findNearestDocblock(line)
            
            console.log(`\nProcessing ${filterName} in ${file}:${line}`)

            const { description, since, params, returns } = parseDocBlock(docblock)

            filters.push({
              name: filterName,
              since,
              description,
              parameters: params,
              returns,
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
    
    return filters
  }

  async function updateDeveloperReference(filters: FilterDoc[]) {
    const refPath = join(process.cwd(), 'content/developer-reference.json')
    
    // Read existing content or create new structure
    let reference: DeveloperReference = {
      sections: []
    }
    
    if (existsSync(refPath)) {
      try {
        reference = JSON.parse(readFileSync(refPath, 'utf8'))
        // Remove existing filters section if it exists
        reference.sections = reference.sections.filter(section => section.title !== 'Filters')
      } catch (e) {
        console.error('Error reading developer-reference.json, starting fresh', e)
      }
    }

    // Add filters section
    reference.sections.push({
      title: "Filters",
      description: "WordPress provides an API called \"filters\" which allow functions to modify data of other functions. WPGraphQL applies many filters throughout its codebase allowing developers to customize the Schema and other parts of the GraphQL server. Below are the filters provided by WPGraphQL that are available for developers to hook into.",
      pages: filters
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(filter => ({
          title: filter.name,
          href: `/filters/${filter.name}`,
          slug: filter.name
        }))
    })

    // Write back to file
    writeFileSync(
      refPath,
      JSON.stringify(reference, null, 2)
    )
  }

  async function generateMDXFiles(filters: FilterDoc[]) {
    const outputDir = join(process.cwd(), 'content/filters')
    mkdirSync(outputDir, { recursive: true })
    
    console.log('\nGenerating MDX for filters:', filters.map(f => ({
      name: f.name,
      paramCount: f.parameters.length,
      params: f.parameters.map(p => ({
        name: p.name,
        type: p.type,
        description: p.description
      }))
    })))
    
    // Get list of current filter names
    const currentFilterNames = new Set(filters.map(filter => filter.name))
    
    // Remove outdated .mdx files
    const existingFiles = glob.sync('*.mdx', { cwd: outputDir })
    for (const file of existingFiles) {
      const filterName = file.replace('.mdx', '')
      if (!currentFilterNames.has(filterName)) {
        console.log(`Removing outdated filter file: ${file}`)
        rmSync(join(outputDir, file))
      }
    }
    
    // Generate new/updated files
    for (const filter of filters) {
      const frontmatter = `---
title: "${filter.name}"
since: "${filter.since || 'Unknown'}"
sourceFile: "${filter.sourceFile}"
sourceLine: ${filter.sourceLine}
---`

      const description = `
${filter.description || 'No description available.'}

## Parameters

${filter.parameters.length ? `| Name | Type | Description |
|------|------|-------------|
${filter.parameters.map(param => 
  `| ${param.name} | \`${param.type.replace(/\|/g, '\\|')}\` | ${param.description} |`
).join('\n')}` : 'This filter has no parameters.'}`

      const returns = filter.returns ? `

## Return Value

| Type | Description |
|------|-------------|
| \`${filter.returns.type.replace(/\|/g, '\\|')}\` | ${filter.returns.description || 'No description available.'} |
` : ''

      const source = `
## Source

This filter is defined in [${filter.sourceFile}:${filter.sourceLine}](https://github.com/wp-graphql/wp-graphql/blob/develop/${filter.sourceFile}#L${filter.sourceLine})`

      const example = `
## Examples

\`\`\`php
add_filter('${filter.name}', function($value${filter.parameters.length ? ', ' + filter.parameters.map(p => '$' + p.name).join(', ') : ''}) {
    // Modify $value here
    return $value;
});
\`\`\``

      const mdxContent = [frontmatter, description, returns, source, example].join('\n\n')
      
      writeFileSync(
        join(outputDir, `${filter.name}.md`),
        mdxContent
      )
    }

    // Replace the JSON generation with the new function
    await updateDeveloperReference(filters)
  }

  async function main() {
    try {
      // 1. Get WPGraphQL source
      const wpGraphQLPath = await getWPGraphQLSource()
      console.log(`Using WPGraphQL source from: ${wpGraphQLPath}`)
      
      // 2. Parse PHP files for apply_filters calls
      const filters = await parseFilters(wpGraphQLPath)
      console.log(`Found ${filters.length} filters`)
      
      // 3. Generate/update MDX files
      await generateMDXFiles(filters)
      console.log(`Generated MDX files in content/filters/`)
    } finally {
      // Clean up tmp directory after script completes or errors
      cleanupTmp()
    }
  }

  main().catch(console.error)
})() 