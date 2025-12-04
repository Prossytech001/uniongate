// "use client";

// import { useState } from "react";
// import { Globe, Loader2 } from "lucide-react";

// export default function WireTransferPage() {
//   const [iban, setIban] = useState("");
//   const [swift, setSwift] = useState("");
//   const [recipientName, setRecipientName] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [country, setCountry] = useState("");
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);

//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

//   const verifyDetails = async () => {
//     setLoading(true);

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wire/verify`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({ iban, swift })
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (!res.ok) {
//       alert("❌ " + data.error);
//       return;
//     }

//     // Go to review page
//     window.location.href =
//       `/dashboard/wire-transfer/review?iban=${iban}&swift=${swift}&amount=${amount}` +
//       `&recipientName=${recipientName}&bankName=${bankName}&country=${country}`;
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto space-y-6">
//       <h1 className="text-2xl font-bold">International Wire Transfer</h1>

//       {/* IBAN */}
//       <div>
//         <label className="text-gray-600">IBAN</label>
//         <input
//           className="w-full p-3 border rounded-lg mt-1"
//           value={iban}
//           onChange={(e) => setIban(e.target.value)}
//           placeholder="Enter IBAN"
//         />
//       </div>

//       {/* SWIFT */}
//       <div>
//         <label className="text-gray-600">SWIFT Code</label>
//         <input
//           className="w-full p-3 border rounded-lg mt-1"
//           value={swift}
//           onChange={(e) => setSwift(e.target.value)}
//           placeholder="Enter SWIFT"
//         />
//       </div>

//       {/* Recipient Name */}
//       <div>
//         <label className="text-gray-600">Recipient Name</label>
//         <input
//           className="w-full p-3 border rounded-lg mt-1"
//           value={recipientName}
//           onChange={(e) => setRecipientName(e.target.value)}
//           placeholder="Recipient full name"
//         />
//       </div>

//       {/* Bank Name */}
//       <div>
//         <label className="text-gray-600">Bank Name</label>
//         <input
//           className="w-full p-3 border rounded-lg mt-1"
//           value={bankName}
//           onChange={(e) => setBankName(e.target.value)}
//           placeholder="Bank name"
//         />
//       </div>

//       {/* Country */}
//       <div>
//         <label className="text-gray-600">Country</label>
//         <input
//           className="w-full p-3 border rounded-lg mt-1"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           placeholder="Country"
//         />
//       </div>

//       {/* Amount */}
//       <div>
//         <label className="text-gray-600">Transfer Amount ($)</label>
//         <input
//           type="number"
//           className="w-full p-3 border rounded-lg mt-1"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Enter amount"
//         />
//       </div>

//       <button
//         onClick={verifyDetails}
//         className="w-full bg-black text-white py-3 rounded-lg flex justify-center items-center gap-2"
//       >
//         {loading ? <Loader2 className="animate-spin" /> : "Continue"}
//         <Globe size={18} />
//       </button>
//     </div>
//   );
// }
"use client";

import { ArrowRight, Bitcoin, Globe, CreditCard, Send, Banknote } from "lucide-react";
import Link from "next/link";

export default function InternationalTransferPage() {
  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <p className="text-sm text-gray-500">Friday, October 31, 2025</p>

      <h1 className="text-2xl font-bold">International Transfer</h1>
      <p className="text-gray-500 text-sm">Dashboard &gt; International Transfer</p>

      <h2 className="mt-6 text-lg font-semibold">Select Transfer Method</h2>

      {/* GRID OF TRANSFER OPTIONS */}
      <div className="grid md:grid-cols-3 gap-4">

        {/* Wire Transfer */}
        <TransferOption 
          href="/dashboard/wire-transfer/wire"
          icon={<Globe size={26} className="text-blue-600" />}
          title="Wire Transfer"
          text="Transfer funds directly to international bank accounts."
        />

        {/* Crypto */}
        <TransferOption 
          href="/dashboard/wire-transfer/crypto"
          icon={<Bitcoin size={26} className="text-orange-500" />}
          title="Cryptocurrency"
          text="Send funds to your cryptocurrency wallet."
        />

        {/* PayPal */}
        <TransferOption 
          href="/dashboard/wire-transfer/paypal"
          icon={<CreditCard size={26} className="text-blue-400" />}
          title="PayPal"
          text="Transfer funds to your PayPal account."
        />

        {/* Wise Transfer */}
        <TransferOption 
          href="/dashboard/wire-transfer/wise"
          icon={<Send size={26} className="text-green-600" />}
          title="Wise Transfer"
          text="Transfer with lower fees using Wise."
        />

        {/* CashApp */}
        <TransferOption 
          href="/dashboard/wire-transfer/cashapp"
          icon={<Banknote size={26} className="text-black" />}
          title="Cash App"
          text="Quick transfers to your Cash App account."
        />

        {/* More Options */}
        <TransferOption 
          href="/dashboard/wire-transfer/more"
          icon={<ArrowRight size={26} className="text-yellow-500" />}
          title="More Options"
          text="Zelle, Venmo, Revolut, and more."
        />

      </div>

      {/* Secure Notice */}
      <div className="bg-white rounded-xl shadow p-4 flex items-start gap-3 mt-4">
        <ShieldIcon />
        <div>
          <p className="font-semibold">Secure Transaction</p>
          <p className="text-gray-500 text-sm">
            All transfers are encrypted and processed securely. Never share your PIN with anyone.
          </p>
        </div>
      </div>

    </div>
  );
}


/* COMPONENTS */

function TransferOption({ href, icon, title, text }: any) {
  return (
    <Link href={href}>
      <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer">
        <div className="p-3 bg-gray-100 rounded-full w-fit mb-3">
          {icon}
        </div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </Link>
  );
}

function ShieldIcon() {
  return (
    <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700">
      <path d="M12 22c4.97-1.506 8-5.35 8-10V7l-8-4-8 4v5c0 4.65 3.03 8.494 8 10z" />
    </svg>
  );
}
