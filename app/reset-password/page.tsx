// "use client";

// import { useState } from "react";

// export default function ResetPasswordPage() {
//   const [form, setForm] = useState({
//     email: "",
//     otp: "",
//     newPassword: "",
//   });

//   const submit = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });

//     const data = await res.json();
//     if (data.success) alert("Password reset successfully!");
//     else alert(data.message);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
//       <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

//       <input
//         className="w-full p-3 border rounded mb-3"
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />

//       <input
//         className="w-full p-3 border rounded mb-3"
//         placeholder="OTP"
//         onChange={(e) => setForm({ ...form, otp: e.target.value })}
//       />

//       <input
//         type="password"
//         className="w-full p-3 border rounded mb-3"
//         placeholder="New Password"
//         onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
//       />

//       <button
//         onClick={submit}
//         className="w-full bg-green-600 text-white py-3 rounded"
//       >
//         Reset Password
//       </button>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailFromQuery = searchParams.get("email") || "";

  const [form, setForm] = useState({
    email: emailFromQuery,
    otp: "",
    newPassword: "",
  });

  useEffect(() => {
    setForm(prev => ({ ...prev, email: emailFromQuery }));
  }, [emailFromQuery]);

  const submit = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Password reset successfully! You can now log in.");
      router.push("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>

      <input
        className="w-full p-3 border rounded mb-3 bg-gray-100"
        value={form.email}
        readOnly
      />

      <input
        className="w-full p-3 border rounded mb-3"
        placeholder="Enter OTP"
        onChange={(e) => setForm({ ...form, otp: e.target.value })}
      />

      <input
        type="password"
        className="w-full p-3 border rounded mb-3"
        placeholder="New Password"
        onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
      />

      <button
        onClick={submit}
        className="w-full bg-[var(--darkgreen)]  text-white py-3 rounded"
      >
        Reset Password
      </button>
    </div>
  );
}
