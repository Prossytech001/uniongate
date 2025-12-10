
"use client";

import { useState } from "react";
import axios from "axios";
import {  Landmark, CreditCard, Bitcoin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    if (!amount || Number(amount) < 1) {
      return alert("Enter a valid amount");
    }
    router.push(`/dashboard/deposit/confirm?amount=${amount}`);
  };

  return (
    <div className="pt-6 pb-6 max-w-3xl mx-auto space-y-8">

      <h1 className="text-2xl font-bold text-[var(--headtext)]">Deposit Funds</h1>
      <p className="text-[var(--ptext)]">Choose your preferred deposit method</p>

      {/* Banner */}
      <div className="bg-[var(--darkgreen)] text-white p-8 rounded-xl shadow">
        <h2 className="text-xl font-semibold">Fund Your Account</h2>
        <p className="text-sm opacity-80">Secure & encrypted deposits</p>
      </div>

      {/* Payment Method Cards */}
      <div className="grid grid-cols-3 gap-4">

        {/* USDT — ACTIVE */}
        <div className="p-4 rounded-xl border cursor-pointer bg-[var(--lemon)] border-gray-200 shadow-md">
          <div className="flex items-center gap-3">
            <Bitcoin className="text-[var(--headtext)]" />
            <p className="font-semibold text-[var(--headtext)]">USDT (TRC20)</p>
          </div>
          <p className="text-xs mt-1 text-[var(--headtext)]">Instant crediting</p>
        </div>

        {/* Other disabled options */}
        <div className="p-4 rounded-xl border bg-gray-100 opacity-40 cursor-not-allowed">
          <Landmark />
          <p className="font-semibold mt-1">Bank Transfer</p>
        </div>

        <div className="p-4 rounded-xl border bg-gray-100 opacity-40 cursor-not-allowed">
          <CreditCard />
          <p className="font-semibold mt-1">PayPal</p>
        </div>

      </div>

      {/* Amount Input */}
      <div>
        <label className="text-[var(--headtext)] font-medium">Deposit Amount (USD)</label>
        <input
          type="number"
          className="w-full p-3 mt-2 rounded-lg border"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="w-full py-3 rounded-lg text-white font-semibold bg-[var(--darkgreen)]"
      >
        Continue
      </button>
    </div>
  );
}
