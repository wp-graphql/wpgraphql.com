"use client";

import { useState } from "react";
import { MainNav } from './main-nav';
import { Header } from './header';
import { TooltipProvider } from '@/components/ui/tooltip';

export function RootContent({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TooltipProvider>
      <div className="flex h-screen overflow-hidden">
        <MainNav isExpanded={isExpanded} />
        <div className="flex flex-1 flex-col">
          <Header isExpanded={isExpanded} onToggleExpand={() => setIsExpanded(!isExpanded)} />
          <div className="flex-1 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}