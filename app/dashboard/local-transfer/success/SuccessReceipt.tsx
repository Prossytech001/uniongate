"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function SuccessReceipt() {
  const params = useSearchParams();

  const ref = params.get("ref");
  const amount = params.get("amount");
  const name = params.get("name");
  const to = params.get("to");

  return (
    <div className="p-6 max-w-lg mx-auto text-center space-y-6">
      <CheckCircle size={60} className="mx-auto text-green-600" />

      <h1 className="text-2xl font-bold">Transfer Successful</h1>

      <div className="p-4 bg-gray-50 rounded-lg shadow">
        <p><strong>Reference:</strong> {ref}</p>
        <p><strong>Amount Sent:</strong> ${amount}</p>
        <p><strong>To:</strong> {name}</p>
        <p><strong>Account:</strong> {to}</p>
      </div>

      <button
        onClick={() => (window.location.href = "/dashboard/home")}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
