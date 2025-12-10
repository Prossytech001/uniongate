"use client";
import { LogOut } from "lucide-react";


export default function AdminLayout({ children }: { children: React.ReactNode }) {

    const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r shadow-sm p-6 space-y-6">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>

        <nav className="space-y-2">
          <AdminLink href="/admin/dashboard">Dashboard</AdminLink>
          <AdminLink href="/admin/dashboard/user">Users</AdminLink>
          <AdminLink href="/admin/dashboard/transactions">Transactions</AdminLink>
          <AdminLink href="/admin/dashboard/settings">Settings</AdminLink>
        </nav>

        <button
        onClick={logout}
        className="flex items-center gap-3 text-red-500 p-3 hover:bg-gray-100 rounded-lg"
      >
        <LogOut />
        <span>Logout</span>
      </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}

function AdminLink({ href, children }: any) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-200 transition"
    >
      {children}
    </a>
  );
}
