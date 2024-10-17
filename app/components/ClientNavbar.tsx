"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbar() {
  const pathName = usePathname();
  const noNavbarPages = ["/login"];
  if (noNavbarPages.includes(pathName)) {
    return null;
  }
  return <Navbar />;
}
