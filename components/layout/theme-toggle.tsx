"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { DropdownMenuContent } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenuContent side="right" sideOffset={8} className="w-56">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span className="text-sm">Dark mode</span>
        </div>
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
      </div>
    </DropdownMenuContent>
  )
}