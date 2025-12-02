"use client";
 import Image from "next/image";

export default function LeftPanel({
  title = "Start Banking with Us",
  subtitle = "Create your UnionGate Bank account in just a few steps and enjoy our full range of banking services."
}: { title?: string; subtitle?: string }) {
  return (
    <div className="hidden lg:flex w-1/2 relative overflow-hidden">
      {/* bg gradient */}
      <div className="absolute inset-0 bg-[var(--darkgreen)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.04)] to-transparent" />
      {/* soft circles */}
      <div className="absolute -left-10 top-24 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute left-28 top-56 w-64 h-64 bg-white/6 rounded-full blur-xl" />

      <div className="relative z-10 text-white px-14 py-12 flex flex-col justify-center">
        {/* logo wordmark */}
        <div className="mb-10">
          <Image
            src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1764679739/Abstract_Alexander_Fencing_and_Gates_Fence_Logo_-_1_-_Edited-removebg-preview_ubhqf6.png"
            alt="Banking customer"
            width={200}
            height={600}
            priority
          />
          <div className="text-white/70 text-sm">Next Generation Bank</div>
        </div>

        <h2 className="text-4xl font-bold leading-tight mb-3">{title}</h2>
        <p className="text-white/90 max-w-md mb-8">{subtitle}</p>

        <div className="space-y-4 text-white/90 text-[15px]">
          <p className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15">✓</span>
            Secure Banking Platform – industry-leading security protocols
          </p>
          <p className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15">✓</span>
            Fast Transfers – send & receive money quickly
          </p>
          <p className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15">✓</span>
            24/7 Access – manage your finances anywhere
          </p>
        </div>

        {/* language stub (bottom-left) */}
        <div className="absolute left-6 bottom-6">
          <div className="bg-white text-black px-3 py-2 rounded shadow text-sm">🇺🇸 EN ▾</div>
        </div>
      </div>
    </div>
  );
}
