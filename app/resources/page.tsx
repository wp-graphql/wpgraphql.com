"use client";

import { SecondaryNav } from "@/components/layout/secondary-nav";

export default function ResourcesPage() {
  return (
    <div className="flex h-full">
      <SecondaryNav>
        <h2 className="font-semibold mb-4">Resources</h2>
      </SecondaryNav>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Resources</h1>
      </div>
    </div>
  );
}