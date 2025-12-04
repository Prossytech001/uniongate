"use client";

import { useState } from "react";
import { CreditCard, CheckCircle2, ChevronRight } from "lucide-react";

export default function ApplyCardPage() {
  const [cardType, setCardType] = useState("visa");
  const [cardLevel, setCardLevel] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [dailyLimit, setDailyLimit] = useState(1000);
  const [showSuccess, setShowSuccess] = useState(false);


//   const handleSubmit = async () => {
//     const token = localStorage.getItem("token");

//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/apply`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         cardType,
//         cardLevel,
//         currency,
//         dailyLimit,
//       }),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };
const handleSubmit = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cardType,
      cardLevel,
      currency,
      dailyLimit,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    setShowSuccess(true);
  } else {
    console.log(data);
  }
};

  return (
    <div className="pt-6 pb-6 space-y-8">

      {/* HEADER */}
      <div>
        <p className="text-sm text-gray-500">Friday, October 31, 2025</p>
        <h1 className="text-2xl font-bold mt-1">Apply for a Virtual Card</h1>
        <p className="text-gray-500">
          Get instant access to a virtual card for secure online payments.
        </p>
      </div>

      {/* CARD APPLICATION BOX */}
      <div className="bg-[#0D1F17] text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-1">Card Details</h2>
        <p className="text-gray-300 mb-4">Select your preferred virtual card options below</p>

        {/* CARD TYPE SELECTION */}
        <div className="space-y-4">
          <CardTypeOption
            title="Visa"
            description="Accepted worldwide, suitable for most online purchases"
            value="visa"
            selected={cardType}
            onSelect={setCardType}
            logo="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />

          <CardTypeOption
            title="Mastercard"
            description="Enhanced security features with global acceptance"
            value="mastercard"
            selected={cardType}
            onSelect={setCardType}
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          />

          <CardTypeOption
            title="American Express"
            description="Premium rewards program and exclusive benefits"
            value="amex"
            selected={cardType}
            onSelect={setCardType}
            logo="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
          />
        </div>

        {/* RIGHT SIDE CONTROLS */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          
          {/* CARD LEVEL */}
          <div>
            <label className="font-medium">Card Level *</label>
            <select 
              className="w-full p-3 mt-2 bg-white text-black rounded-lg"
              value={cardLevel}
              onChange={e => setCardLevel(e.target.value)}
            >
              <option value="">Select a card level</option>
              <option value="standard">Standard</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
            </select>
            <p className="text-gray-300 text-sm mt-1">
              Different levels offer varied spending limits and benefits.
            </p>
          </div>

          {/* CURRENCY */}
          <div>
            <label className="font-medium">Currency</label>
            <select 
              className="w-full p-3 mt-2 bg-white text-black rounded-lg"
              value={currency}
              onChange={e => setCurrency(e.target.value)}
            >
              <option value="USD">USD – US Dollar</option>
              <option value="EUR">EUR – Euro</option>
              <option value="GBP">GBP – British Pound</option>
            </select>
          </div>

        </div>

        {/* DAILY LIMIT */}
        <div className="mt-8">
          <label className="font-medium">Daily Spending Limit</label>

          <div className="mt-2 p-3 bg-white text-black rounded-lg flex justify-between">
            <span>${dailyLimit}</span>
            <input 
              type="range"
              min="100"
              max="10000"
              step="100"
              value={dailyLimit}
              onChange={e => setDailyLimit(Number(e.target.value))}
              className="w-full ml-4"
            />
          </div>

          <p className="text-gray-300 text-sm mt-1">
            Limits: $100.00 – $10,000.00
          </p>
        </div>

      </div>

      {/* BILLING INFORMATION */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <InputField label="Billing Address" />
          <InputField label="Postal Code" />
          <InputField label="City" />
          <InputField label="Country" />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <button 
        onClick={handleSubmit}
        className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Submit Application
      </button>

      {showSuccess && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-xl animate-fadeIn">

      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-green-100 rounded-full">
          <svg width="40" height="40" fill="none" stroke="green" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold">Application Submitted</h2>
      <p className="text-gray-600 mt-2">
        Your virtual card application has been received.  
        You will be notified once your card is approved.
      </p>

      {/* Button */}
      <button
        onClick={() => setShowSuccess(false)}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Close
      </button>
    </div>

  </div>
)}


    </div>




  );
}




/* COMPONENTS */

function CardTypeOption({ title, description, value, selected, onSelect, logo }: any) {
  const active = selected === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`p-4 cursor-pointer rounded-xl flex justify-between items-center ${
        active ? "bg-white text-black shadow-lg" : "bg-white/10"
      }`}
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>

      <img src={logo} alt={title} className="h-8 w-auto" />
    </div>
  );
}

function InputField({ label }: any) {
  return (
    <div>
      <label className="font-medium">{label}</label>
      <input 
        type="text"
        className="w-full mt-2 p-3 border rounded-lg focus:ring focus:ring-gray-300"
      />
    </div>
  );
}

