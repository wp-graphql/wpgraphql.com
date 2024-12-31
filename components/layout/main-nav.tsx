"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { WPGraphQLLogo } from "@/components/icons/wpgraphql-logo";
import { ThemeToggle } from "./theme-toggle";
import navContent from "@/content/navigation.json";
import { Book, Code2, Newspaper, Users, FileText, Settings } from "lucide-react";

const sectionColors = {
  "/": "text-foreground",
  "/docs": {
    base: "text-blue-500",
    hover: "hover:text-blue-500"
  },
  "/reference": {
    base: "text-purple-500",
    hover: "hover:text-purple-500"
  },
  "/resources": {
    base: "text-green-500",
    hover: "hover:text-green-500"
  },
  "/community": {
    base: "text-orange-500",
    hover: "hover:text-orange-500"
  },
  "/blog": {
    base: "text-rose-500",
    hover: "hover:text-rose-500"
  }
};

const getIconForPath = (path: string) => {
  switch (path) {
    case "/":
      return WPGraphQLLogo;
    case "/docs":
      return Book;
    case "/reference":
      return Code2;
    case "/resources":
      return Newspaper;
    case "/community":
      return Users;
    case "/blog":
      return FileText;
    default:
      return null;
  }
};

const getActiveColor = (currentPath: string, itemPath: string) => {
  // Check if we're in a section (e.g., /docs/[slug] should match /docs)
  const isActive = currentPath.startsWith(itemPath);
  const colors = sectionColors[itemPath];
  return isActive ? colors.base : cn("text-muted-foreground", colors?.hover);
};

export function MainNav({ isExpanded }: { isExpanded: boolean }) {
  const pathname = usePathname();
  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-card px-2 py-4 transition-all duration-300 flex-shrink-0",
      isExpanded ? "w-48" : "w-14",
    )}>
      <div className="flex flex-1 flex-col gap-1">
        {navContent.mainNav.map((item) => {
          const Icon = getIconForPath(item.href);
          return (
          <Tooltip key={item.href} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-full rounded-md flex items-center justify-start gap-3 px-3 h-9",
                    !isExpanded && "justify-center px-0",
                  )}
                  aria-label={item.label}
                >
                  {Icon && <Icon className={cn(
                    "h-4 w-4",
                    getActiveColor(pathname, item.href)
                  )} />}
                  {isExpanded && <span className="text-sm font-normal text-muted-foreground">{item.label}</span>}
                </Button>
              </Link>
            </TooltipTrigger>
            {!isExpanded && <TooltipContent side="right">{item.label}</TooltipContent>}
          </Tooltip>
        )})}
      </div>
      <DropdownMenu>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "w-full rounded-md mt-auto flex items-center justify-start gap-3 px-3 h-9",
                  !isExpanded && "justify-center px-0"
                )}
              >
                <Settings className={cn(
                  "h-4 w-4 text-muted-foreground"
                )} />
                {isExpanded && <span className="text-sm font-normal text-muted-foreground">Settings</span>}
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          {!isExpanded && <TooltipContent side="right">Settings</TooltipContent>}
        </Tooltip>
        <ThemeToggle />
      </DropdownMenu>
    </div>
  );
}