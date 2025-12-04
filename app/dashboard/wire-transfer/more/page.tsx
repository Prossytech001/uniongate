"use client";

import { ArrowRight } from "lucide-react";

export default function MoreTransferOptions() {
  const methods = [
    { name: "Zelle", placeholder: "Recipient Email or Phone" },
    { name: "Venmo", placeholder: "@username" },
    { name: "Revolut", placeholder: "Revolut Tag" },
  ];

  return (
    <div className="pt-6 pb-6  h-screen space-y-6">

      <h1 className="text-xl font-bold">More Transfer Options</h1>

      {methods.map((m) => (
        <div key={m.name} className="bg-white p-4 rounded-xl shadow space-y-3">
          <p className="font-semibold">{m.name}</p>
          <input className="w-full border p-2 rounded" placeholder={m.placeholder} />
          <input className="w-full border p-2 rounded" placeholder="Amount" />
          <button className="bg-black text-white w-full p-2 rounded flex items-center justify-center gap-2">
            Continue <ArrowRight />
          </button>
        </div>
      ))}

    </div>
  );
}
