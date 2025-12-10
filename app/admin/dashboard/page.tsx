"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  ArrowUpCircle,
  ArrowDownCircle,
  ListOrdered
} from "lucide-react";

export default function AdminDashboardHome() {
  const [data, setData] = useState<any>(null);
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : "";

  useEffect(() => {
    if (!token) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/overview`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data)
    return <div className="p-8 text-gray-600">Loading admin dashboard...</div>;

  const s = data.stats;

  return (
    <div className="space-y-10">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">System overview & recent activity</p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <SummaryCard
          title="Total Users"
          value={s.users.total}
          icon={<Users size={26} />}
          color="bg-blue-600"
        />

        <SummaryCard
          title="Active Users"
          value={s.users.active}
          icon={<UserCheck size={26} />}
          color="bg-green-600"
        />

        <SummaryCard
          title="Suspended Users"
          value={s.users.suspended}
          icon={<UserX size={26} />}
          color="bg-red-600"
        />

        <SummaryCard
          title="Total Transactions"
          value={s.transactions.total}
          icon={<ListOrdered size={26} />}
          color="bg-purple-600"
        />
      </div>

      {/* FINANCIAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <SummaryCard
          title="Total Deposits"
          value={`$${s.transactions.deposits.toLocaleString()}`}
          icon={<ArrowUpCircle size={26} />}
          color="bg-green-700"
        />

        <SummaryCard
          title="Total Withdrawals"
          value={`$${s.transactions.withdrawals.toLocaleString()}`}
          icon={<ArrowDownCircle size={26} />}
          color="bg-red-700"
        />
      </div>

      {/* TWO-COLUMN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* RECENT USERS */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>

          <div className="space-y-3">
            {data.recent.users.map((u: any) => (
              <div
                key={u._id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-semibold">
                    {u.personalInfo.legalFirstName} {u.personalInfo.legalLastName}
                  </p>
                  <p className="text-gray-500 text-sm">{u.contactDetail.email}</p>
                </div>

                <Link
                  href={`/admin/dashboard/user/${u._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Manage →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT TRANSACTIONS */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

          <div className="space-y-3">
            {data.recent.transactions.map((t: any) => (
              <div key={t._id} className="border-b pb-3">
                <p className="font-semibold capitalize">{t.type}</p>

                <p className="text-gray-700">
                  {t.direction === "credit" ? "+" : "-"}${t.amount}
                </p>

                <p className="text-gray-500 text-sm">
                  {t.user?.personalInfo?.username || "Unknown User"}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(t.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

/* COMPONENT */
function SummaryCard({ title, value, icon, color }: any) {
  return (
    <div className="bg-white border shadow-sm p-6 rounded-xl flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>

      <div className={`${color} text-white p-3 rounded-lg shadow`}>
        {icon}
      </div>
    </div>
  );
}
