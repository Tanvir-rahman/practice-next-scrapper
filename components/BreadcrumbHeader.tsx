"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName == "/" ? [""] : pathName.split("/").filter(Boolean);
  return (
    <div className="flex-start flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <BreadcrumbItem key={path}>
              <BreadcrumbLink
                className="capitalize"
                href={`/${paths.slice(0, index + 1).join("/")}`}
              >
                {path == "" ? "Home" : path}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHeader;
