"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  _id: string;
  personalInfo: { username: string; legalFirstName: string; legalLastName: string };
  contactDetail: { email: string; phone: string };
  status: string;
  balance: number;
}

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    const token = localStorage.getItem("adminToken");

   const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/admin/user/list?search=${search}`,
  { headers: { Authorization: `Bearer ${token}` } }
);


    const data = await res.json();
    if (data.success) setUsers(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link
          href="/admin/dashboard/user/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add User
        </Link>
      </div>

      <div className="flex gap-3 mb-4">
        <input
          className="border p-2 rounded flex-1"
          placeholder="Search username or email…"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-gray-800 text-white px-4 rounded" onClick={fetchUsers}>
          Search
        </button>
      </div>

      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Balance</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-b">
                <td className="p-3">{u.personalInfo.username}</td>
                <td className="p-3">{u.contactDetail.email}</td>
                <td className="p-3">{u.status}</td>
                <td className="p-3">${u.balance}</td>
                <td className="p-3">
                  <Link
                    href={`/admin/dashboard/user/${u._id}`}
                    className="text-blue-600 underline"
                  >
                    Manage
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
