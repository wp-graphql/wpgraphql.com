import { CodeBlock } from '@/components/code-block';
import { Table, Thead, Tbody, Th, Td } from '@/components/mdx/Table';
import { Alert } from '@/components/mdx/Alert';
import React from 'react';

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
  // Custom blockquote handling for alerts
  blockquote: ({ children }: { children: React.ReactNode }) => {
    const childrenArray = React.Children.toArray(children);
    
    // Find the first paragraph element
    const firstParagraph = childrenArray.find(
      child => React.isValidElement(child) && child.type === 'p'
    );
    
    if (firstParagraph && React.isValidElement(firstParagraph)) {
      const paragraphContent = firstParagraph.props.children;
      
      // Convert content to string for checking
      let textContent = '';
      let remainingElements: React.ReactNode[] = [];
      
      if (Array.isArray(paragraphContent)) {
        textContent = typeof paragraphContent[0] === 'string' ? paragraphContent[0] : '';
        remainingElements = paragraphContent.slice(1);
      } else if (typeof paragraphContent === 'string') {
        textContent = paragraphContent;
      } else {
        textContent = String(paragraphContent || '');
      }
      
      // Match alert pattern: [!TYPE] followed by content
      const alertMatch = textContent.match(/^\[!(\w+)\][\s\n]*(.*)/s);
      
      if (alertMatch) {
        const [_, type, alertContent] = alertMatch;
        
        // Get all content after the first paragraph (excluding the first paragraph itself)
        const otherContent = childrenArray.filter(child => child !== firstParagraph);
        
        // Create new children array without the alert marker
        const newChildren = [];
        if (alertContent.trim()) {
          newChildren.push(<p key="alert-content">{alertContent.trim()}</p>);
        }
        // Add all other content (like lists) after the paragraphs
        newChildren.push(...otherContent);
        
        return (
          <Alert type={type.toLowerCase() as "note" | "tip" | "important" | "warning" | "caution"}>
            {newChildren}
          </Alert>
        );
      }
    }
    
    // Regular blockquote if not an alert
    return <blockquote className="border-l-4 border-slate-200 pl-4 dark:border-slate-700">{children}</blockquote>;
  },
};

export default components;