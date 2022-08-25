import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import slugger from 'slugger'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

// remark/rehype markdown plugins
import withSmartQuotes from '@silvenon/remark-smartypants'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'

export const getDocSlugs = () =>
  fs
    .readdirSync(path.join(process.cwd(), './docs'))
    .filter((file) => /\.mdx$/.test(file))
    .map((docFile) => docFile.replace(/\.mdx$/, ''))

export const getDocData = (slug) => {
  const fullPath = path.join(process.cwd(), './docs', `${slug}.mdx`)
  const rawContent = fs.readFileSync(fullPath, 'utf8')
  return rawContent
}

export const getDoc = async (slug) => {
  const content = getDocData(slug)
  return await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [
        [remarkGfm, { singleTilde: false }],
        // withTableOfContents,
        withSmartQuotes,
      ],
      rehypePlugins: [rehypeSlug, [rehypePrism, { ignoreMissing: true }]],
    },
  })
}

export const getTableOfContents = (content) => {
  const toc = []
  let parentId = null

  unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        visit(tree, 'element', (node) => {
          let id
          let title
          if (node.tagName === 'h2' || node.tagName === 'h3') {
            if (node.children[0].children[0].value) {
              title = node.children[0].children[0].value
              id = slugger(title)
              node.properties.id = id

              if (node.tagName === 'h2') {
                parentId = id
              }

              toc.push({
                tagName: node.tagName,
                id,
                title: title ?? 'title',
                parentId: node.tagName === 'h2' ? null : parentId,
              })
            }
          }
        })
      }
    })
    .use(rehypeStringify)
    .processSync(content)
    .toString()

  return toc
  // return toc ? flatListToHierarchical( toc, { idKey: 'id', parentKey: 'parentId'} ) : null
}

export const getAllDocs = () =>
  getDocSlugs()
    .map((slug) => getDocData(slug).frontMatter)
    .sort((note1, note2) => (note1.title > note2.title ? -1 : 1))
