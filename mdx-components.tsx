import { CodeBlock } from '@/components/code-block';
import { Table, Thead, Tbody, Th, Td } from '@/components/mdx/Table';

const components = {
  h1: (props: any) => (
    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white" {...props} />
  ),
  // ... other heading components
  pre: CodeBlock,
  // Table components
  table: Table,
  thead: Thead,
  tbody: Tbody,
  th: Th,
  td: Td,
};

export default components;