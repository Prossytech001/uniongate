"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function WireSuccessPage() {
  const params = useSearchParams();
  const ref = params.get("ref");
  const amount = params.get("amount");
  const recipient = params.get("recipient");

  return (
    <div className="p-6 max-w-lg mx-auto text-center space-y-6">
      <CheckCircle size={60} className="text-green-600 mx-auto" />

      <h1 className="text-2xl font-bold">Transfer Successful</h1>

      <div className="p-4 bg-gray-100 rounded-lg space-y-2">
        <p><strong>Reference:</strong> {ref}</p>
        <p><strong>Recipient:</strong> {recipient}</p>
        <p><strong>Amount Sent:</strong> ${amount}</p>
      </div>

      <button
        onClick={() => (window.location.href = "/dashboard")}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
