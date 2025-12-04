"use client";

import { Send } from "lucide-react";

export default function WiseTransferPage() {
  return (
    <div className="pt-6 pb-6  h-screen space-y-6">
      <h1 className="text-xl font-bold">Wise Transfer</h1>

      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">Wise Email</label>
        <input className="w-full border p-2 rounded mt-2" placeholder="user@wise.com" />
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">Amount</label>
        <input className="w-full border p-2 rounded mt-2" placeholder="0.00" />
      </div>

      <button className="bg-black text-white w-full p-3 rounded-lg flex items-center justify-center gap-2">
        <Send /> Continue
      </button>
    </div>
  );
}
