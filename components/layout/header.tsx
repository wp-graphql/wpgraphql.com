"use client";

import { Button } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { DialogTitle } from "@/components/ui/dialog";
import { Search, PanelLeft } from "lucide-react";
import { useState } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { cn } from "@/lib/utils";
import docsContent from "@/content/docs.json";
import { useRouter } from "next/navigation";

export function Header({ isExpanded, onToggleExpand }: { 
  isExpanded: boolean;
  onToggleExpand: () => void;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const allPages = docsContent.sections.flatMap(section => 
    section.pages.map(page => ({
      ...page,
      section: section.title
    }))
  );

  return (
    <header className="flex h-[55px] min-h-[55px] items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={onToggleExpand}
          >
            <PanelLeft className={cn(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-0",
              !isExpanded && "rotate-180"
            )} />
          </Button>
          <div className="mx-2 h-4 w-px bg-border" />
          <Breadcrumbs />
        </div>
      </div>
      <Button
        variant="outline"
        className="h-9 w-60 my-3"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search...
      </Button>
      <CommandDialog 
        open={open} 
        onOpenChange={setOpen}
      >
        <DialogTitle className="sr-only">Search documentation</DialogTitle>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {allPages.map((page) => (
              <CommandItem
                key={page.slug}
                value={page.title}
                onSelect={() => {
                  router.push(`/docs/${page.slug}`);
                  setOpen(false);
                }}
              >
                <span>{page.title}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {page.section}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}