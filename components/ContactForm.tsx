"use client";

import { useState } from "react";

export default function ContactForm() {
  const [captcha, setCaptcha] = useState("");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">

      <h3 className="text-xl font-semibold mb-4">Have any questions?</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="input" />
        <input type="text" placeholder="Last Name" className="input" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input type="email" placeholder="Email Address" className="input" />
        <input type="text" placeholder="Phone No" className="input" />
      </div>

      <textarea
        placeholder="Message"
        className="input mt-4 h-32 resize-none"
      ></textarea>

      {/* CAPTCHA */}
      <input
        type="text"
        placeholder="Enter Captcha"
        className="input mt-4"
        value={captcha}
        onChange={(e) => setCaptcha(e.target.value)}
      />

      <button className="w-full mt-4 bg-[var(--lemon)] text-[var(--darkgreen)] py-3 rounded-full font-semibold hover:bg-[#d0dd6a] transition">
        Submit Message
      </button>
    </div>
  );
}
