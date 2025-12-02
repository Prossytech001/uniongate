"use client";
import { useState } from "react";
import Link from "next/link";
 import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-[var(--lemon)] text-[var(--headtext)] text-center py-2 text-sm">
        World class service from your true international community bank
      </div>

      {/* Main Navbar */}
      <nav className="bg-[var(--darkgreen)] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
  src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1764679739/Abstract_Alexander_Fencing_and_Gates_Fence_Logo_-_1_-_Edited-removebg-preview_ubhqf6.png"
  alt="Banking customer"
  width={200}
  height={600}
  priority
/>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm">
            <Link href="/">Home</Link>
            <Link href="/personal">Personal</Link>
            <Link href="/cooperate">Cooperate</Link>
            <Link href="/insurance">Insurance</Link>
            <Link href="/mortgages">Mortgages</Link>
            <div className="cursor-pointer">Savings ▾</div>
            <Link href="/login">Login</Link>
          </div>

          {/* Open Account Button */}
          <Link
            href="/register"
            className="hidden md:block bg-[var(--lemon)] text-[var(--darkgreen)] px-6 py-2 rounded-full font-medium"
          >
            Open An Account →
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <div className="w-7 h-1 bg-white mb-1"></div>
            <div className="w-7 h-1 bg-white mb-1"></div>
            <div className="w-7 h-1 bg-white"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[var(--darkgreen)] text-white space-y-4 p-6">
            <Link href="/">Home</Link><br />
            <Link href="/personal">Personal</Link><br />
            <Link href="/cooperate">Cooperate</Link><br />
            <Link href="/insurance">Insurance</Link><br />
            <Link href="/mortgages">Mortgages</Link><br />
            <div>Savings ▾</div>
            <Link href="/login">Login</Link>
            <Link
              href="/register"
              className="block bg-[var(--lemon)] text-[var(--darkgreen)] text-center py-3 rounded-full"
            >
              Open An Account →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
