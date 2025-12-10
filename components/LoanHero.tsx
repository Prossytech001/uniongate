"use client";

import Image from "next/image";

export default function LoanHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center px-6">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg"
          alt="Loans Background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Business banking made easy
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Sefton International Bank has been supporting the businesses in our communities
          for almost 30 years with a wide range of loans. Our dedicated lending staff
          and quick turnaround times will help you achieve your short and long-term goals.
        </p>

        <button className="mt-10 bg-[#DDE685] text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-[#cdd76f] transition flex items-center justify-center gap-2 mx-auto">
          Enrol →
        </button>
      </div>
    </section>
  );
}
