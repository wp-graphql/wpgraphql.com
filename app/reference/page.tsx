"use client";

import { SecondaryNav } from "@/components/layout/secondary-nav";

export default function ReferencePage() {
  return (
    <div className="flex h-full">
      <SecondaryNav>
        <h2 className="font-semibold mb-4">Developer Reference</h2>
      </SecondaryNav>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Developer Reference</h1>
      </div>
    </div>
  );
}