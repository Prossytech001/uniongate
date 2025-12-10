"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- SVG Icon Components ---
const AsteriskIcon = () => (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3L12 8L14 3M10 21L12 16L14 21M3 10L8 12L3 14M21 10L16 12L21 14"></path></svg>
);
const ArrowIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
);
const BackgroundLines = () => (
    <svg className="absolute inset-0 w-full h-full z-0 opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-44 570.5C38.6667 523.667 246.5 391 513 423.5C779.5 456 863.5 613 1079 613C1294.5 613 1419.5 533 1481 498" stroke="white" strokeWidth="2"/>
        <path d="M-44 712.5C38.6667 665.667 246.5 533 513 565.5C779.5 598 863.5 755 1079 755C1294.5 755 1419.5 675 1481 640" stroke="white" strokeWidth="2"/>
    </svg>
);

export default function ApproachSection() {
  return (
    <section className="relative bg-[var(--darkgreen)] text-white overflow-hidden py-16 sm:py-24">
      <BackgroundLines />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center space-x-2">
              <AsteriskIcon />
              <p className="text-base font-semibold">Our Approach</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Client centric strategy for lasting success
            </h1>
          </div>
          <div className="lg:pt-16">
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe that a successful financial journey starts with understanding your unique needs and aspirations. Our approach is built on a foundation of collaboration, transparency, and expertise.
            </p>
          </div>
        </div>

        {/* --- Masonry-style Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Card 1 */}
            <div className="bg-white text-[var(--darkgreen)] rounded-3xl p-8 flex flex-col h-full group">
                <div className="flex justify-end">
                    <Link href="#" className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--lemon)] text-[var(--darkgreen)] transition-colors hover:bg-[var(--darkgreen)] hover:text-white"><ArrowIcon /></Link>
                </div>
                <div className="relative h-48 my-4">
                    <Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765377054/approach-image-1_lgt2y1.png" alt="Exchange Rate Illustration" fill className="object-contain"/>
                </div>
                <div className="mt-auto">
                    <span className="inline-block bg-[var(--lemon)] text-sm font-semibold px-4 py-1 rounded-full">Focus</span>
                    <h3 className="mt-4 text-2xl font-bold">Get the real exchange rate</h3>
                    <p className="mt-2 text-[var(--ptext)]">We don’t charge fees for spending on your card abroad, and we pass Mastercard’s exchange rate directly onto you, without extra charges.</p>
                </div>
            </div>

            {/* Column 2: Stacked elements */}
            <div className="flex flex-col gap-8 lg:pt-16">
                {/* Card 2 */}
                <div className="bg-white text-[var(--darkgreen)] rounded-3xl p-8 text-center">
                    <h3 className="text-xl font-bold">We craft customized financial strategies that align with your objectives.</h3>
                </div>
                {/* Image 2 */}
                <div className="relative h-64 rounded-3xl overflow-hidden">
                    <Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765377084/approach-image-2_mn1puh.png" alt="Financial strategies meeting" fill className="object-cover"/>
                </div>
            </div>

            {/* Column 3: Stacked elements */}
            <div className="flex flex-col gap-8">
                {/* Card 3 */}
                <div className="bg-white text-[var(--darkgreen)] rounded-3xl p-6 relative group">
                    <Link href="#" className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--lemon)] text-[var(--darkgreen)] transition-colors hover:bg-[var(--darkgreen)] hover:text-white"><ArrowIcon /></Link>
                    <p className="text-sm font-semibold">Stay on the KNOW</p>
                    <h3 className="text-2xl font-bold">Enroll for Online Banking</h3>
                    <div className="mt-2 flex items-center gap-2">
                        <span className="inline-block bg-[var(--lemon)] text-sm font-semibold px-3 py-1 rounded-full">100%</span>
                        <span className="text-sm text-[var(--ptext)]">Secured</span>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white text-[var(--darkgreen)] rounded-3xl overflow-hidden flex flex-col h-full group">
                    <div className="relative h-80 flex-grow">
                        <Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765377129/approach-image-3_lql6wr.png" alt="Trusted Partner" fill className="object-cover"/>
                        {/* Fade Effect */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold">You gain a trusted partner committed to your financial well-being</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}