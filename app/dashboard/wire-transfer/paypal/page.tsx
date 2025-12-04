"use client";

import { CreditCard, Send } from "lucide-react";

export default function PayPalTransferPage() {
  return (
    <div className="pt-6 pb-6   space-y-6 h-screen">
      <h1 className="text-xl font-bold">PayPal Transfer</h1>

      {/* Email */}
      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">PayPal Email</label>
        <input className="w-full border p-2 rounded mt-2" placeholder="example@gmail.com" />
      </div>

      {/* Amount */}
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
