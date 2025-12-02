"use client";
import { useState } from "react";

const primaryTypes = [
  { key:"Checking Account", title:"Checking Account", desc:"Perfect for daily transactions and bill payments" },
  { key:"Savings Account",  title:"Savings Account",  desc:"Earn interest on your deposits" },
];

const moreTypes = [
  "Fixed Deposit Account","Current Account","Crypto Currency Account","Business Account",
  "Non Resident Account","Cooperate Business Account","Investment Account"
];

export default function AccountSetup({
  data, setField, prev, next
}: {
  data:any; setField:(k:any,v:any)=>void; prev:()=>void; next:()=>void;
}) {
  const [showMore, setShowMore] = useState(false);

  const Card = ({k,title,desc}:{k:string; title:string; desc:string}) => {
    const active = data.accountType === k;
    return (
      <button
        type="button"
        onClick={()=>setField("accountType", k)}
        className={`text-left p-4 rounded-xl border transition w-full ${
          active ? "border-[var(--headtext)] bg-[var(--lemon)]/80" : "border-gray-300 bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--lemon)] grid place-items-center">
              {/* little bank icon */}
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#14202e" d="M12 3L1 9l11 6l9-4.91V17h2V9zM3.24 9L12 4.5L18.76 9L12 12.5zM5 19h14v2H5z"/></svg>
            </div>
            <div>
              <div className="font-medium">{title}</div>
              <div className="text-sm text-gray-600">{desc}</div>
            </div>
          </div>
          {active && <div className="w-6 h-6 rounded-full bg-[var(--headtext)] text-white grid place-items-center">✓</div>}
        </div>
      </button>
    );
  };

  return (
    <div className="mt-6">
      <div className="w-12 h-12 rounded-full bg-[var(--lemon)] mx-auto grid place-items-center">
        {/* bank pillar icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" className="text-[var(--headtext)]"><path fill="currentColor" d="M2 10h20L12 3zM4 12v7h2v-7zm4 0v7h2v-7zm4 0v7h2v-7zm4 0v7h2v-7zM2 21h20v-2H2z"/></svg>
      </div>

      <div className="text-center mt-3">
        <div className="text-[var(--headtext)] font-medium">Account Setup</div>
        <p className="text-[var(--ptext)] text-sm">Choose your account type and set up your transaction PIN</p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {primaryTypes.map(t => <Card key={t.key} k={t.key} title={t.title} desc={t.desc}/>)}
      </div>

      {/* show more */}
      <div className="mt-4">
        <button type="button" onClick={()=>setShowMore(v=>!v)} className="text-sm text-gray-700 underline">
          {showMore ? "Hide extra account types" : "Show more account types"}
        </button>
        {showMore && (
          <div className="mt-3 grid sm:grid-cols-2 gap-2">
            {moreTypes.map(mt=>(
              <button
                key={mt}
                type="button"
                onClick={()=>setField("accountType", mt)}
                className={`px-3 py-2 rounded border text-sm ${
                  data.accountType===mt ? "border-[var(--headtext)] bg-[var(--lemon)]/70" : "border-gray-300 bg-white"
                }`}
              >
                {mt}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <label className="block text-sm mb-1">Transaction PIN (4 digits) *</label>
        <input
          className="input"
          inputMode="numeric"
          maxLength={4}
          placeholder="••••"
          value={data.transactionPin}
          onChange={e=>{
            const v = e.target.value.replace(/\D/g,"").slice(0,4);
            setField("transactionPin", v);
          }}
        />
        <p className="text-xs text-gray-500 mt-2">Your PIN will be required to authorize transactions</p>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={prev} className="px-5 py-3 rounded-lg border border-gray-300">← Previous</button>
        <button onClick={next} className="px-5 py-3 rounded-lg bg-[var(--headtext)] text-white">Next  →</button>
      </div>
    </div>
  );
}
