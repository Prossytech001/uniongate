"use client";

import { useState } from "react";

export default function SupportPage() {
  const [form, setForm] = useState({ subject: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  const submitForm = () => {
    if (!form.subject || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    // Simulated submit
    setShowModal(true);

    // Reset form
    setForm({ subject: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">

      <h1 className="text-2xl font-bold mb-2">Customer Support</h1>
      <p className="text-gray-600 mb-6">
        Submit your issue below and our support team will contact you shortly.
      </p>

      {/* SUBJECT */}
      <label className="text-sm font-semibold text-gray-700">Subject</label>
      <input
        className="w-full border rounded-lg p-3 mt-1 mb-4 focus:ring-2 focus:ring-green-500"
        placeholder="Account issue, card declined, login problem..."
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />

      {/* MESSAGE */}
      <label className="text-sm font-semibold text-gray-700">Message</label>
      <textarea
        className="w-full border rounded-lg p-3 mt-1 h-32 focus:ring-2 focus:ring-green-500"
        placeholder="Describe the issue in detail..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {/* SUBMIT BUTTON */}
      <button
        onClick={submitForm}
        className="w-full mt-5 bg-[var(--darkgreen)] hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Submit Issue
      </button>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl text-center">

            <svg
              width="60"
              height="60"
              className="text-green-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="30" cy="30" r="28" />
              <path d="M20 30l7 7l13-13" />
            </svg>

            <h2 className="text-xl font-bold">Issue Submitted</h2>
            <p className="text-gray-600 mt-2">
              Our support team has received your message and will get back to you shortly.
            </p>

            <button
              className="mt-6 bg-[var(--darkgreen)] hover:bg-green-700 text-white px-6 py-2 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
