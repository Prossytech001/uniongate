"use client";

import { useState } from "react";

export default function ChangePasswordPage() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const updateField = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.currentPassword || !form.newPassword) {
      return alert("All fields are required.");
    }
    if (form.newPassword !== form.confirmPassword) {
      return alert("New password and confirmation do not match.");
    }

    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/settings/change-password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Password updated successfully!");
      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      alert(data.message || "Failed to update password.");
    }
  };

  return (
    <div className="max-w-xl p-6 bg-white shadow rounded space-y-5">
      <h1 className="text-2xl font-bold">Change Admin Password</h1>

      <div className="space-y-3">
        <label className="block text-sm font-medium">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          className="input"
          value={form.currentPassword}
          onChange={updateField}
        />

        <label className="block text-sm font-medium mt-4">New Password</label>
        <input
          type="password"
          name="newPassword"
          className="input"
          value={form.newPassword}
          onChange={updateField}
        />

        <label className="block text-sm font-medium mt-4">
          Confirm New Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="input"
          value={form.confirmPassword}
          onChange={updateField}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-5"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}
