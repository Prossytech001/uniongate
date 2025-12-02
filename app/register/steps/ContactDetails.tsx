"use client";

const countries = ["Nigeria","Ghana","United States","United Kingdom","Canada"];

export default function ContactDetails({
  data, setField, prev, next
}: {
  data:any; setField:(k:any,v:any)=>void; prev:()=>void; next:()=>void;
}) {
  return (
    <div className="mt-6">
      <div className="w-12 h-12 rounded-full bg-[var(--lemon)] mx-auto grid place-items-center">
        {/* mail icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" className="text-[var(--headtext)]"><path fill="currentColor" d="M20 8v8H4V8l8 5zM4 6h16l-8 5z"/></svg>
      </div>

      <div className="text-center mt-3">
        <div className="text-[var(--headtext)] font-medium">Contact Information</div>
        <p className="text-[var(--ptext)] text-sm">We’ll use these details to communicate with you about your account</p>
      </div>

      <div className="mt-6 space-y-4">
        <input className="input" placeholder="Email Address *" type="email" value={data.email} onChange={e=>setField("email", e.target.value)} />
        <input className="input" placeholder="Phone Number *" value={data.phone} onChange={e=>setField("phone", e.target.value)} />
        <select className="input" value={data.country} onChange={e=>setField("country", e.target.value)}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="px-5 py-3 rounded-lg border border-gray-300">← Previous</button>
        <button onClick={next} className="px-5 py-3 rounded-lg bg-[var(--headtext)] text-white">Next  →</button>
      </div>

      <p className="text-center text-sm mt-4 text-[var(--ptext)]">
        Already have an account? <a className="underline" href="/login">Sign in instead</a>
      </p>
    </div>
  );
}
