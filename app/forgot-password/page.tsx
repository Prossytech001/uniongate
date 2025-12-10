// "use client";

// import { useState } from "react";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [sent, setSent] = useState(false);

//   const sendOTP = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email })
//     });

//     const data = await res.json();
//     if (data.success) setSent(true);
//     else alert(data.message);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
//       <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

//       {sent ? (
//         <p className="text-green-600">OTP has been sent to your email.</p>
//       ) : (
//         <>
//           <p className="text-gray-600 mb-4">
//             Enter your email and we'll send you an OTP to reset your password.
//           </p>

//           <input
//             className="w-full p-3 border rounded mb-4"
//             placeholder="Email address"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <button
//             onClick={sendOTP}
//             className="w-full bg-green-600 text-white py-3 rounded"
//           >
//             Send OTP
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      // Redirect to the reset password page
      router.push(`/reset-password?email=${email}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

      <p className="text-gray-600 mb-4">
        Enter your email to receive a 6-digit OTP code.
      </p>

      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={sendOTP}
        className="w-full bg-[var(--darkgreen)]  text-white py-3 rounded"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </div>
  );
}
