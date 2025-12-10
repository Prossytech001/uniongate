"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- SVG Icon Components ---
const AsteriskIcon = () => (
    <svg className="w-5 h-5 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3L12 8L14 3M10 21L12 16L14 21M3 10L8 12L3 14M21 10L16 12L21 14"></path></svg>
);
const ArrowIcon = () => (
    <svg className="w-6 h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
);

// --- Data for the cards ---
const chooseUsData = [
  {
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765375915/why-choose-image-1_1_cgdyjz.jpg',
    title: 'Unparalleled Expertise',
    description: 'Our team comprises seasoned professionals with extensive.',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765375930/why-choose-image-2_1_j7qzhl.jpg',
    title: 'Cash Flow Optimization',
    description: 'Improve cash flow through structured savings, budgeting techniques.',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765375950/why-choose-image-3_1_ysob5e.jpg',
    title: 'Financial Accountability',
    description: 'Stay on track with your financial goals through regular check-ins.',
  },
];

export default function HomepageWhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16 sm:mb-24">
          {/* Left Column */}
          <div className="relative">
             <div className="absolute -top-8 left-0 w-2.5 h-2.5 bg-[var(--lemon)] rounded-full"></div>
            <div className="flex items-center space-x-2">
              <AsteriskIcon />
              <p className="text-base font-semibold text-[var(--darkgreen)]">Why Choose Us</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[var(--darkgreen)] leading-tight">
              Expertise and client focused solutions for your success
            </h1>
          </div>
          {/* Right Column */}
          <div className="lg:pt-16">
            <p className="text-lg text-[var(--ptext)] leading-relaxed">
              Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.
            </p>
          </div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseUsData.map((card, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden h-[450px] group cursor-pointer"
            >
              {/* Background Image with Hover Zoom Effect */}
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              
              {/* Numbered Circle with Hover Effect */}
              <div className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center rounded-full bg-[var(--lemon)] text-[var(--darkgreen)] group-hover:bg-[var(--darkgreen)] group-hover:text-white font-bold text-lg z-10 transition-colors duration-300">
                0{index + 1}
              </div>

              {/* Glassmorphism Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                 <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 text-white">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">{card.description}</p>
                    
                    {/* Arrow Button with Hover Effects */}
                    <Link 
                        href="#"
                        className="group/arrow mt-4 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--lemon)] text-[var(--darkgreen)]
                                   opacity-0 group-hover:opacity-100 
                                   hover:!bg-[var(--darkgreen)] hover:!text-white
                                   transition-all duration-300 ease-in-out"
                    >
                        <ArrowIcon />
                    </Link>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}