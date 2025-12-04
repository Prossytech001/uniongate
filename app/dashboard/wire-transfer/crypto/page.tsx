"use client";

import { Bitcoin, Send, Wallet } from "lucide-react";
import { useState } from "react";

export default function CryptoTransferPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="pt-6 pb-6  h-screen space-y-6">
      <h1 className="text-xl font-bold">Cryptocurrency Transfer</h1>

      <p className="text-gray-500">Send funds to your crypto wallet.</p>

      {/* Coin Type */}
      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">Select Coin</label>
        <select className="w-full border p-2 rounded mt-2">
          <option>Bitcoin (BTC)</option>
          <option>USDT (TRC20)</option>
          <option>USDT (ERC20)</option>
        </select>
      </div>

      {/* Amount */}
      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">Amount</label>
        <input
          className="w-full border p-2 rounded mt-2"
          placeholder="0.00"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>

      {/* Wallet Address */}
      <div className="bg-white p-4 rounded-xl shadow">
        <label className="font-semibold">Wallet Address</label>
        <input className="w-full border p-2 rounded mt-2" placeholder="Paste wallet address" />
      </div>

      <button className="bg-black text-white w-full p-3 rounded-lg flex items-center justify-center gap-2">
        <Send /> Continue
      </button>
    </div>
  );
}
