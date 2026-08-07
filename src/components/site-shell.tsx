import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10 sm:py-16 lg:grid lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
      <Sidebar />
      <main id="main-content" className="flex flex-col gap-12">
        {children}
      </main>
    </div>
  );
}
