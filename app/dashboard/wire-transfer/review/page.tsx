// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import { Lock, Loader2 } from "lucide-react";

// export default function ReviewWireTransfer() {
//   const params = useSearchParams();

//   const iban = params.get("iban");
//   const swift = params.get("swift");
//   const recipientName = params.get("recipientName");
//   const bankName = params.get("bankName");
//   const country = params.get("country");
//   const amount = params.get("amount");

//   const [pin, setPin] = useState("");
//   const [loading, setLoading] = useState(false);

//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

//   const handleConfirm = async () => {
//     setLoading(true);

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wire/send`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify({
//         iban,
//         swift,
//         recipientName,
//         bankName,
//         country,
//         amount,
//         pin
//       })
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (!res.ok) {
//       alert("❌ " + data.error);
//       return;
//     }

//     window.location.href =
//       `/dashboard/wire-transfer/success?ref=${data.reference}&amount=${amount}&recipient=${recipientName}`;
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto space-y-6">
//       <h1 className="text-2xl font-bold">Review Transfer</h1>

//       <div className="p-4 bg-gray-100 rounded-lg space-y-2">
//         <p><strong>Recipient:</strong> {recipientName}</p>
//         <p><strong>Bank:</strong> {bankName}</p>
//         <p><strong>Country:</strong> {country}</p>
//         <p><strong>IBAN:</strong> {iban}</p>
//         <p><strong>SWIFT:</strong> {swift}</p>
//         <p><strong>Amount:</strong> ${amount}</p>
//         <p><strong>Fee:</strong> $25</p>
//         <p><strong>Total Debit:</strong> ${Number(amount) + 25}</p>
//       </div>

//       <div>
//         <label>Enter Transaction PIN</label>
//         <input
//           type="password"
//           maxLength={4}
//           className="w-full p-3 border rounded-lg mt-1"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//         />
//       </div>

//       <button
//         onClick={handleConfirm}
//         className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2"
//       >
//         {loading ? <Loader2 className="animate-spin" /> : "Send Transfer"}
//         <Lock size={18} />
//       </button>
//     </div>
//   );
// }
import { Suspense } from "react";
import ReviewWire from "./ReviewWire";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <ReviewWire />
    </Suspense>
  );
}