"use client";

import { Check, Copy, FileCode } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
  className?: string;
  'data-language'?: string;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (format: "language-xxx")
  const language = props['data-language'] ?? '';

  const copyToClipboard = async () => {
    // Get text content from pre element
    const text = (children as any)?.props?.children || '';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          onClick={copyToClipboard}
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
        <pre className="p-4 overflow-x-auto" {...props}>
          <code className={className}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
}