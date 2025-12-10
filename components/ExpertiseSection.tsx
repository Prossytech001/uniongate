"use client";

import Image from "next/image";
import { useState } from "react";

// ---------- Types ---------- //
interface TabType {
  key: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

// ---------- Tabs Data ---------- //
const tabs: TabType[] = [
  {
    key: "economy",
    label: "Economy Checking",
    title: "Economy Checking:",
    description:
      "This is your essential checking account and is perfect for managing everyday finances.",
    features: [
      "Opening Balance $100",
      "Maintenance Fee $0",
      "Minimum Balance Required $0",
    ],
    image:
      "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg",
  },
  {
    key: "now",
    label: "NOW Checking",
    title: "NOW Checking:",
    description:
      "A flexible interest-bearing checking account designed for convenience and growth.",
    features: ["Opening Balance $200", "Maintenance Fee $0", "Interest Eligible"],
    image:
      "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg",
  },
  {
    key: "ssb",
    label: "Special SSB Account",
    title: "Special SSB Account:",
    description:
      "Exclusive checking designed for premium customers with high-value benefits.",
    features: ["Premium Support", "Zero Fees", "Exclusive Rates"],
    image:
      "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg",
  },
  {
    key: "investment",
    label: "Investment Management",
    title: "Investment Management:",
    description:
      "Professional portfolio management to help grow and secure your future wealth.",
    features: ["Expert Advisors", "Smart Portfolio", "Low Entry Minimum"],
    image:
      "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg",
  },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState("economy");

  // Safe selection — content will ALWAYS exist
  const content: TabType = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">

      {/* ---------- TOP HEADING ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <p className="text-green-700 font-medium">★ Our Expertise</p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-gray-900 leading-tight">
            We have made banking made easier by caring for your needs.
          </h2>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed">
          Swiss Community Bank Savings Invent is our enterprise approach to
          innovation and supports our business strategy as a forward-focused
          bank. It's about using emerging technology to engage with our
          customers and exceeding their rapidly evolving expectations.
        </p>
      </div>

      {/* ---------- TABS ---------- */}
      <div className="flex flex-wrap gap-6 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-8 py-3 rounded-full text-lg font-medium transition
              ${
                active === tab.key
                  ? "bg-green-900 text-white"
                  : "text-gray-700 hover:text-black"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900">{content.title}</h3>

          <p className="text-gray-600 mt-4 mb-6">{content.description}</p>

          <ul className="space-y-4 mb-8">
            {content.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-800">
                <span className="text-green-700 text-xl">✔</span> {f}
              </li>
            ))}
          </ul>

          <button className="bg-[#DDE685] text-black rounded-full px-8 py-3 font-medium text-lg flex items-center gap-2 hover:bg-[#cdd76f] transition">
            Contact Now →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-80 md:h-[420px]">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

      </div>
    </section>
  );
}
