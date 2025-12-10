"use client";
import { useState } from "react";

const tabs = ["Economy Checking", "NOW Checking", "Special SSB Account", "Investment Management"];

export default function BusinessGrowthSection() {
  const [active, setActive] = useState("Economy Checking");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <p className="text-green-700 font-medium flex items-center gap-2">
            ★ Grow Your Business With Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-3 leading-tight">
            With Banking Solutions <br />
            Designed to Increase the <br />
            productivity and growth, <br />
            together we will make your <br />
            business vision a reality.
          </h2>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-8 py-3 rounded-full text-lg font-medium transition
                  ${
                    active === tab
                      ? "bg-green-900 text-white"
                      : "text-gray-700 hover:text-black"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-gray-700 text-lg">

          <p>
            Join the thousands of businesses that value our people-people
            approach to business banking. Whether you’re a small business, large
            corporation or somewhere in between, you can trust our #1 rated
            in-store service to meet your business banking needs.
          </p>

          <hr className="border-gray-300" />

          <p>
            At Sefton International Bank we are committed to the development of
            the real sectors of the economy. Banking made easier by caring for your needs.
            We offer a comprehensive portfolio of corporate and commercial banking
            services in the Energy, Manufacturing, FMCGs, Export & Import,
            amongst others.
          </p>

          {/* Stats card */}
          <div className="border rounded-xl p-6 w-48">
            <p className="text-gray-600 text-sm">Join</p>
            <p className="text-green-700 text-4xl font-bold mt-1">912k+</p>
            <p className="text-gray-600 text-sm mt-1">Other Businesses</p>
          </div>

        </div>
      </div>
    </section>
  );
}
