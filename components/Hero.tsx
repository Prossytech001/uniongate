"use client";
 
 import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--darkgreen)] text-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">

        {/* LEFT TEXT BLOCK */}
        <div>
          <p className="text-[var(--lemon)] mb-3 text-sm">
            Welcome To UnionGate Bank International
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering your Day to Day Banking
          </h1>

          <p className="text-[var(--ptext)] max-w-md mb-8">
            Simple and secure personal banking available in person,
            online, or on your device.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              href="/register"
              className="bg-[var(--lemon)] text-[var(--darkgreen)] font-medium px-6 py-3 rounded-full"
            >
              Enrol New Account
            </Link>

            <Link
              href="/login"
              className="border border-[var(--lemon)] text-[var(--lemon)] px-6 py-3 rounded-full flex items-center gap-2"
            >
              Login →
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 space-y-6">
            <div>
              <h2 className="text-3xl font-bold">13M+</h2>
              <p className="text-[var(--ptext)] text-sm max-w-xs">
                The first credit card ever issued was made of cardboard and introduced by American Express in 1958.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">0%</h2>
              <p className="text-[var(--ptext)] text-sm max-w-xs">
                We believe that you should keep more of what you earn.  
                That's why we offer 0% commission.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative">
          <div className="rounded-t-full overflow-hidden shadow-lg">
           <Image
  loader={({ src }) => src}
  src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1764678889/hero-image_xk2tof.jpg"
  alt="bank customer"
  width={600}
  height={600}
  unoptimized
/>


          </div>
        </div>
      </div>
    </section>
  );
}
