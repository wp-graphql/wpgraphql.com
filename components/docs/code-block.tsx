"use client";

import { Check, Copy, FileCode } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export function CodeBlock({ code, language, filename, highlightLines = [] }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative my-6 rounded-lg border bg-muted/50">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          {filename ? (
            <span className="text-sm text-muted-foreground font-medium">
              {filename}
            </span>
          ) : (
            language && (
              <span className="text-sm text-muted-foreground font-medium">
                {language}
              </span>
            )
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
        <pre className="p-4 overflow-x-auto">
          <code>
            {lines.map((line, i) => (
              <div
                key={i}
                className={cn(
                  "table-row",
                  highlightLines.includes(i + 1) && "bg-accent"
                )}
              >
                <span className="table-cell text-muted-foreground text-sm pr-4 select-none text-right">
                  {i + 1}
                </span>
                <span className="table-cell font-mono text-sm whitespace-pre">
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}