interface SecondaryNavProps {
  children: React.ReactNode;
}

export function SecondaryNav({ children }: SecondaryNavProps) {
  return (
    <div className="flex flex-col border-r bg-muted/50 overflow-hidden">
      {children}
    </div>
  );
}