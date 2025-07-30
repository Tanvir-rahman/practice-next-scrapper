"use client";

import React from "react";
import { HomeIcon, Layers2Icon, ShieldIcon, CoinsIcon } from "lucide-react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathName = usePathname();
  const activeRoute =
    routes.find((route) => pathName.includes(route.href)) || routes[0];

  return (
    <div className="bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-seperate relative hidden h-screen w-full max-w-[280px] min-w-[200px] overflow-hidden border-r-2 md:block">
      <div className="border-seperate flex items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo />
      </div>
      <div className="p-2">Credits</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
