"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Users", href: "/admin/dashboard/user" },
  { name: "KYC Verification", href: "/admin/kyc" },
  { name: "Deposits", href: "/admin/deposits" },
  { name: "Withdrawals", href: "/admin/withdrawals" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 shadow bg-white">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 border rounded"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">UnionGate</h2>
          <p className="text-sm text-gray-500">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block p-3 rounded-lg transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setOpen(false)} // close sidebar on mobile
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Backdrop for Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
