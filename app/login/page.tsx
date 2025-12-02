"use client";
import { useState } from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import PasswordInput from "@/components/PasswordInput";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stay, setStay] = useState(true);
  const [err, setErr] = useState<string|null>(null);

  const submit = async () => {
    setErr(null);
    try {
      const API = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API}/auth/login`, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ email: username, password })
      });
      const json = await res.json();
      if(!res.ok) throw new Error(json?.error || "Login failed");
      localStorage.setItem("token", json.token);
      window.location.href = "/dashboard";
    } catch(e:any){ setErr(e.message); }
  };

  return (
    <AuthLayout>
      <div className="card max-w-xl">
        <h2 className="text-2xl font-semibold mb-6">Sign In to UnionGate Bank</h2>

        <div className="space-y-4">
          <input className="input" placeholder="Enter Username" value={username} onChange={e=>setUsername(e.target.value)} />
          {/* <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /> */}
         <PasswordInput
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
/>


          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={stay} onChange={e=>setStay(e.target.checked)} />
              <span>Stay signed in for 30 days</span>
            </label>
            <a href="#" className="underline">Forgot Password?</a>
          </div>
        </div>

        {err && <div className="mt-4 text-red-600 text-sm">{err}</div>}

        <button onClick={submit} className="w-full mt-6 py-3 rounded-lg bg-[var(--headtext)] text-white">Sign In</button>

        <button onClick={()=>location.href="/register"} className="w-full mt-3 py-3 rounded-lg bg-gray-100">Not enrolled? Create Account</button>

        <p className="text-xs text-gray-600 mt-6">
          By signing in, you agree to our <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>.
        </p>
      </div>
    </AuthLayout>
  );
}
