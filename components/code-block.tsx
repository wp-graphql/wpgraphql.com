"use client";

import { Check, Copy, FileCode } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from "next-themes";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
  className?: string;
  code?: string;
  meta?: string;
}

const theme = {
  'comment': { color: 'var(--code-comment-color)' },
  'string': { color: 'var(--code-string-color)' },
  'number': { color: 'var(--code-number-color)' },
  'function': (props: { className?: string }) => {
    if (props.className?.includes('bash') || props.className?.includes('sh')) {
      return { color: 'var(--code-text-color)' };
    }
    return { color: 'var(--code-function-color)' };
  },
  'keyword': { color: 'var(--code-keyword-color)' },
  'operator': (props: { className?: string }) => {
    if (props.className?.includes('bash') || props.className?.includes('sh')) {
      return { color: 'var(--code-punctuation-color)' };
    }
    return { color: 'var(--code-operator-color)' };
  },
  'punctuation': { color: 'var(--code-punctuation-color)' },
  'property': { color: 'var(--code-property-color)' },
  'tag': { color: 'var(--code-tag-color)' },
  'parameter': { color: 'var(--code-parameter-color)' },
  'object': { color: 'var(--code-object-color)' },
  'field': { color: 'var(--code-field-color)' },
  'attr-name': { color: 'var(--code-attr-color)' },
  'builtin': { color: 'var(--code-function-color)' },
  'class-name': { color: 'var(--code-type-color)' },
  'constant': { color: 'var(--code-property-color)' },
  'directive': { color: 'var(--code-keyword-color)' },
  'variable': { color: 'var(--code-parameter-color)' },
  'attr-value': { color: 'var(--code-string-color)' },
  'maybe-class-name': { color: 'var(--code-property-color)' },
  'selector': { color: 'var(--code-property-color)' },
  'literal-property': { color: 'var(--code-property-color)' },
  'property-query': { color: 'var(--code-property-color)' },
  'definition-query': { color: 'var(--code-function-color)' },
  'bash': { color: 'var(--code-text-color)' },
  'command': { color: 'var(--code-text-color)' },
  'shell': { color: 'var(--code-text-color)' },
  'script': { color: 'var(--code-text-color)' },
};

// Convert function properties to their return values
const processTheme = (theme: any) => {
  const processed: { [key: string]: any } = {};
  
  Object.entries(theme).forEach(([key, value]) => {
    if (typeof value === 'function') {
      processed[key] = value({});
    } else {
      processed[key] = value;
    }
  });
  
  return processed;
};

export function CodeBlock({ children, className, code, meta, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  // Get the raw code and other props first
  const language = className?.replace('language-', '') || '';
  const codeString = code || (children as any)?.props?.children || '';
  
  // Parse meta string to get highlighted lines
  const highlightLines = meta
    ? meta
        .replace(/[{}]/g, '')
        .split(',')
        .flatMap(range => {
          const [start, end] = range.split('-').map(Number);
          if (!end) return [start];
          return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        })
    : [];

  return (
    <div className="relative my-6 rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          {language && (
            <span className="text-sm text-muted-foreground font-medium">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(codeString);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-8 w-8"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={processTheme(theme)}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            backgroundColor: 'var(--code-block-bg)',
            color: 'var(--code-text-color)',
          }}
          codeTagProps={{
            style: {
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              lineHeight: '1.5',
              color: 'var(--code-text-color)',
            }
          }}
          useInlineStyles={true}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: highlightLines.includes(lineNumber)
                ? 'var(--highlighted-line-bg)'
                : 'transparent',
              display: 'block',
              width: '100%',
              padding: '0 1rem',
              margin: '0 -1rem',
              borderLeft: highlightLines.includes(lineNumber)
                ? '2px solid var(--highlighted-line-border)'
                : 'none',
              color: 'var(--code-text-color)',
            },
          })}
          lineNumberStyle={{
            color: 'var(--line-number-color)',
          }}
          showLineNumbers={true}
          wrapLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}