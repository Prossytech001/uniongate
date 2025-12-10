"use client";

import Image from "next/image";

export default function InsuranceHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center px-6">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765361632/%D0%93%D1%80%D1%83%D0%BF%D0%BF%D0%B0_%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9_%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85_%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BF%D0%BB%D0%B0%D0%BD_%D0%B2_%D0%BE%D1%84%D0%B8%D1%81%D0%B5___%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5_%D1%84%D0%BE%D1%82%D0%BE_rrcrvl.jpg"
          alt="Insurance Background"
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
          Quality insurance without <br /> the hassle
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Our customers are at the heart of what we do, and we know how important it is for you
          to have peace of mind. We’ve partnered with top insurance providers to offer premium
          insurance to help protect against any unexpected costs. For quality insurance without
          the hassle, we’ve got you covered.
        </p>

        <button className="mt-10 bg-[#DDE685] text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-[#cdd76f] transition flex items-center justify-center gap-2 mx-auto">
          Enrol →
        </button>
      </div>
    </section>
  );
}
