import { CodeBlock } from '@/components/code-block';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  // Map both 'pre' and 'code' elements to our CodeBlock component
  pre: (props) => {
    return <CodeBlock {...props} />;
  },
  code: (props) => {
    return <code {...props} />;
  }
};

export default components;