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
    
    // Find the paragraph element (skip newlines)
    const paragraphElement = childrenArray.find(
      child => React.isValidElement(child) && child.type === 'p'
    );
    
    if (paragraphElement && React.isValidElement(paragraphElement)) {
      const paragraphContent = paragraphElement.props.children;
      
      // Convert content to string for checking
      let textContent = '';
      let remainingElements: React.ReactNode[] = [];
      
      if (Array.isArray(paragraphContent)) {
        // Ensure textContent is a string
        textContent = typeof paragraphContent[0] === 'string' ? paragraphContent[0] : '';
        remainingElements = paragraphContent.slice(1);
      } else if (typeof paragraphContent === 'string') {
        textContent = paragraphContent;
      } else {
        // If it's not a string or array, convert to string
        textContent = String(paragraphContent || '');
      }
      
      // Match alert pattern: [!TYPE] followed by content
      const alertMatch = textContent.match(/^\[!(\w+)\][\s\n]+([\s\S]*)/);
      
      if (alertMatch) {
        const [_, type, alertContent] = alertMatch;
        
        // Create content array with proper spacing
        const contentArray: (string | React.ReactElement)[] = [];
        
        // Add initial text content
        if (alertContent.trim()) {
          contentArray.push(alertContent.trim());
        }
        
        // Add remaining elements with proper spacing
        remainingElements.forEach((element) => {
          const lastItem = contentArray[contentArray.length - 1];
          // Add a space before if the previous element was text and didn't end with a space
          if (contentArray.length > 0 && 
              typeof lastItem === 'string' && 
              !lastItem.endsWith(' ')) {
            contentArray.push(' ');
          }
          contentArray.push(element as React.ReactElement);
          // Add a space after each element
          contentArray.push(' ');
        });
        
        // Remove trailing space if it exists
        const lastItem = contentArray[contentArray.length - 1];
        if (typeof lastItem === 'string' && lastItem === ' ') {
          contentArray.pop();
        }
        
        return (
          <Alert type={type.toLowerCase() as "note" | "tip" | "important" | "warning" | "caution"}>
            <div className="[&>p]:m-0">
              <p>{contentArray}</p>
            </div>
          </Alert>
        );
      }
    }
    
    // Regular blockquote if not an alert
    return <blockquote className="border-l-4 border-slate-200 pl-4 dark:border-slate-700">{children}</blockquote>;
  },
};

export default components;