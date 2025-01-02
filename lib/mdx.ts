import rehypeSlug from 'rehype-slug';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)  // This automatically adds ids to headings
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}