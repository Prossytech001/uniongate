"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Who We Are */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">

        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--darkgreen)] mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Swiss Community Bank Savings is built on trust, innovation, and 
            world-class financial expertise. For decades, we have provided secure, 
            reliable, and forward-thinking financial services to individuals and 
            businesses around the world.
          </p>

          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center gap-3">
              <span className="text-green-700 text-xl">✔</span>
              Trusted by thousands of customers worldwide
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-700 text-xl">✔</span>
              FDIC-insured protection backed by U.S. financial stability
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-700 text-xl">✔</span>
              Serving global clients for over 25 years
            </li>
          </ul>
        </div>

        {/* Optimized Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg"
            alt="Banking professionals"
            width={800}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

      </div>

      {/* Mission Section */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--darkgreen)] mb-6">
          Our Mission
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to empower individuals and businesses with secure,
          transparent, and innovative financial services. We aim to deliver 
          solutions that protect your future and enable sustainable growth.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[var(--darkgreen)] mb-2">
            Integrity
          </h3>
          <p className="text-gray-600 text-sm">
            Upholding honesty, transparency, and accountability.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[var(--darkgreen)] mb-2">
            Innovation
          </h3>
          <p className="text-gray-600 text-sm">
            Delivering modern banking solutions for the future.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[var(--darkgreen)] mb-2">
            Security
          </h3>
          <p className="text-gray-600 text-sm">
            Protecting your assets with world-class security systems.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[var(--darkgreen)] mb-2">
            Customer Care
          </h3>
          <p className="text-gray-600 text-sm">
            Putting your needs first with exceptional support.
          </p>
        </div>

      </div>
    </section>
  );
}
