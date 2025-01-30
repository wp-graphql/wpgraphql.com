import { AlertCircle, AlertTriangle, Info, AlertOctagon, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertProps {
  type?: "note" | "tip" | "important" | "warning" | "caution";
  children: React.ReactNode;
}

const icons = {
  note: Info,
  tip: AlertCircle,
  important: Bell,
  warning: AlertTriangle,
  caution: AlertOctagon,
};

const styles = {
  note: "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-900 text-blue-900 dark:text-blue-200 [&_svg]:text-blue-600 dark:[&_svg]:text-blue-400",
  tip: "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-900 text-green-900 dark:text-green-200 [&_svg]:text-green-600 dark:[&_svg]:text-green-400",
  important: "bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-900 text-purple-900 dark:text-purple-200 [&_svg]:text-purple-600 dark:[&_svg]:text-purple-400",
  warning: "bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-900 text-amber-900 dark:text-amber-200 [&_svg]:text-amber-600 dark:[&_svg]:text-amber-400",
  caution: "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-900 text-red-900 dark:text-red-200 [&_svg]:text-red-600 dark:[&_svg]:text-red-400",
};

export function Alert({ type = "note", children }: AlertProps) {
  const Icon = icons[type];

  return (
    <div className={cn(
      "my-6 rounded-lg border p-4 [&>p]:m-0 flex gap-3",
      styles[type]
    )}>
      <Icon className="h-5 w-5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
} 