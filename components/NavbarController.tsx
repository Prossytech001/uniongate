"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarController() {
  const pathname = usePathname();

  const noNavbarRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/admin",
    "/verify-account",
    "kyc"
  ];

  const hideNavbar = noNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return hideNavbar ? null : <Navbar />;
}
