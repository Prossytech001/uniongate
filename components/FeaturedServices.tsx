"use client";

import React from 'react';
import Image from 'next/image';

// --- SVG Icon Component ---
const AsteriskIcon = () => (
    <svg className="w-5 h-5 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3L12 8L14 3M10 21L12 16L14 21M3 10L8 12L3 14M21 10L16 12L21 14"></path></svg>
);

// --- Data for the service cards ---
const servicesData = [
  {
    pillText: 'Financial Planning',
    title: 'Strategic Business Consulting for Growth Success',
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765373740/service-box-image-1_w8llj0.png',
    bgColor: 'bg-gray-50',
    textColor: 'text-[var(--darkgreen)]',
  },
  {
    pillText: 'Business Consulting',
    title: 'Comprehensive Financial Planning for Your Future',
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765373764/service-box-image-2_d17aet.png',
    bgColor: 'bg-[var(--darkgreen)]',
    textColor: 'text-white',
  },
  {
    pillText: 'Want To Own Your Own Home?',
    title: 'Check Out Our Mortgage Plan',
    imageSrc: 'https://res.cloudinary.com/dastvrhur/image/upload/v1765373791/service-box-image-3_xqsxlj.png',
    bgColor: 'bg-gray-50',
    textColor: 'text-[var(--darkgreen)]',
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16 sm:mb-24">
          {/* Left Column */}
          <div>
            <div className="flex items-center space-x-2">
              <AsteriskIcon />
              <p className="text-base font-semibold text-[var(--darkgreen)]">Our Services</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[var(--darkgreen)] leading-tight">
              Expert financial services for your needs
            </h1>
          </div>
          {/* Right Column */}
          <div className="lg:pt-16">
            <p className="text-lg text-[var(--ptext)] leading-relaxed">
              Move funds between your accounts and schedule transfers, plus use Send Money with Zelle® to pay friends quickly, easily and for free. View all your account activity and balances, pay bills automatically, set up e-mail alerts and more.
            </p>
          </div>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className={`${service.bgColor} ${service.textColor} rounded-3xl overflow-hidden flex flex-col`}
            >
              {/* Top Content */}
              <div className="p-8 pb-4 flex-grow">
                <span className="bg-[var(--lemon)] text-[var(--darkgreen)] text-xs font-semibold px-4 py-1.5 rounded-full">
                  {service.pillText}
                </span>
                <h3 className="mt-4 text-2xl font-bold">
                  {service.title}
                </h3>
              </div>
              
              {/* Image container for margin and pushing to bottom */}
              <div className="mt-auto px-6 pb-6">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={600} // Original width of your image
                  height={400} // Original height of your image
                  // 'rounded-t-2xl' curves the top corners of the image itself
                  className="w-full h-auto object-cover rounded-t-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}