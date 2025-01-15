export function Prose({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`prose prose-gray max-w-none dark:prose-invert ${className}`}>
      {children}
    </div>
  )
} 