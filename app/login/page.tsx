
"use client";
import { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import PasswordInput from "@/components/PasswordInput";
import CubeLoader from "@/components/FullPageLoader";
import Link from "next/link";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");

  const [tempToken, setTempToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const API = process.env.NEXT_PUBLIC_API_URL;

  //-------------------------------------
  // STEP 1 — VERIFY PASSWORD
  //-------------------------------------
  const loginStep1 = async () => {
    setErr(null);
    setLoading(true);

    try {
      const res = await fetch(`${API}/auth/login-step1`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();
      setLoading(false);

      if (!res.ok) throw new Error(json.error || "Invalid login");

      setTempToken(json.tempToken); // trigger PIN slide-over
    } catch (e: any) {
      setErr(e.message);
      setLoading(false);
    }
  };

  //-------------------------------------
  // STEP 2 — VERIFY PIN
  //-------------------------------------
//   const loginStep2 = async () => {
//     if (!tempToken) return;
//     setErr(null);
//     setLoading(true);

//     try {
//       const res = await fetch(`${API}/auth/login-step2`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${tempToken}`,
//         },
//         body: JSON.stringify({ pin }),
//       });

//       const json = await res.json();
//       setLoading(false);

//       if (!res.ok) throw new Error(json.error || "Invalid PIN");

//       localStorage.setItem("token", json.token);

//       window.location.href = "/dashboard/home";
//     } catch (e: any) {
//       setErr(e.message);
//       setLoading(false);
//     }
//   };
const handlePinPress = async (value: any) => {
  if (value === "⌫") {
    setPin(pin.slice(0, -1));
    return;
  }

  if (pin.length >= 4) return;

  const newPin = pin + value;
  setPin(newPin);

  // When 4 digits entered → auto submit
  if (newPin.length === 4) {
    await loginStep2WithPIN(newPin);
  }
};

const loginStep2WithPIN = async (enteredPin: string) => {
  setErr(null);
  setLoading(true);

  try {
    const res = await fetch(`${API}/auth/login-step2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tempToken}`,
      },
      body: JSON.stringify({ pin: enteredPin }),
    });

    const json = await res.json();
    setLoading(false);

    if (!res.ok) throw new Error(json.error || "Invalid PIN");

    localStorage.setItem("token", json.token);
    window.location.href = "/dashboard/home";

  } catch (e: any) {
    setErr(e.message);
    setPin(""); // Reset PIN after error
    setLoading(false);
  }
};

  //-------------------------------------
  // UI COMPONENT
  //-------------------------------------
  return (
    <AuthLayout>
      {/* MAIN LOGIN FORM */}
      <div className="card max-w-xl relative">

        <h2 className="text-2xl font-semibold mb-6">Sign In to UnionGate Bank</h2>

        <div className="space-y-4">
          <input
            className="input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        {err && !tempToken && (
          <div className="mt-4 text-red-600 text-sm">{err}</div>
        )}

        <button
          onClick={loginStep1}
          disabled={loading}
          className="w-full mt-6 py-3 rounded-lg bg-[var(--headtext)] text-white"
        >
          {loading ? <CubeLoader/> : "Continue"}
        </button>

        <button
          onClick={() => (window.location.href = "/register")}
          className="w-full mt-3 py-3 rounded-lg bg-gray-100"
        >
          Not enrolled? Create Account
        </button>
        <Link href="/forgot-password">Forget-password</Link>
        {/* TERMS */}
        <p className="text-xs text-gray-600 mt-6">
          By signing in, you agree to our{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>

      {/* PIN SLIDE-OVER PANEL */}
      {/* {tempToken && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-sm bg-white rounded-xl p-6 shadow-xl animate-slide-up">

            <h3 className="text-xl font-semibold text-center mb-3">
              Enter Transaction PIN
            </h3>

            <p className="text-center text-gray-500 mb-5">
              For security, please confirm your 4-digit PIN.
            </p>

            <input
              type="password"
              maxLength={4}
              className="input text-center text-xl tracking-widest"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            {err && (
              <p className="text-red-500 text-center mt-2 text-sm">{err}</p>
            )}

            <button
              onClick={loginStep2}
              className="w-full bg-[var(--headtext)] text-white py-3 rounded-lg mt-4"
            >
              Verify PIN
            </button>

            <button
              onClick={() => setTempToken(null)}
              className="w-full text-gray-500 py-3 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}
      {tempToken && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-xl animate-slide-up">

      <h3 className="text-xl font-semibold text-center mb-1">Enter Transaction PIN</h3>
      <p className="text-center text-gray-500 mb-6">
        Confirm login using your secure 4-digit PIN
      </p>

      {/* PIN DOTS */}
      <div className="flex justify-center gap-4 mb-6">
        {[0,1,2,3].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full border 
              ${pin.length > i ? "bg-[var(--headtext)] border-[var(--headtext)]" 
                               : "border-gray-400"}`}
          ></div>
        ))}
      </div>

      {/* ERROR MESSAGE */}
      {err && <p className="text-red-500 text-center mb-3">{err}</p>}

      {/* NUMPAD */}
      <div className="grid grid-cols-3 gap-4 text-xl font-semibold select-none">
        {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((item) => (
          <button
            key={item}
            disabled={item === ""}
            onClick={() => handlePinPress(item)}
            className="
              h-14 flex items-center justify-center 
              rounded-xl border bg-gray-50 active:bg-gray-200 
              disabled:bg-transparent disabled:border-none
            "
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cancel */}
      <button
        onClick={() => { setTempToken(null); setPin(""); }}
        className="w-full text-gray-500 py-3 mt-4"
      >
        Cancel
      </button>

    </div>
  </div>
)}

    </AuthLayout>
  );
}
