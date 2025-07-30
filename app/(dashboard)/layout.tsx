import React from "react";
import { Separator } from "@/components/ui/separator";
import DesktopSidebar from "@/components/Sidebar";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { ModeToggle } from "@/components/ModeToggle";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="container flex h-[50px] items-center justify-between px-6 py-4">
          <BreadcrumbHeader />
          <div className="flex items-center gap-1">
            <ModeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="text-accent-foreground container flex-1 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
