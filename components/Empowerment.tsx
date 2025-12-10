"use client";

import React from 'react';

// --- SVG Icon Components ---
const AsteriskIcon = () => (
    <svg className="w-5 h-5 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3L12 8L14 3M10 21L12 16L14 21M3 10L8 12L3 14M21 10L16 12L21 14"></path></svg>
);
const TrustIcon = () => (
    <svg className="w-8 h-8 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const SolutionsIcon = () => (
    <svg className="w-8 h-8 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
);
const TrackRecordIcon = () => (
    <svg className="w-8 h-8 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
);

// --- Data for the feature cards ---
const features = [
    {
        icon: <TrustIcon />,
        title: "Expertise You Can Trust",
        description: "Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.",
    },
    {
        icon: <SolutionsIcon />,
        title: "Personalized Solutions",
        description: "Our personalized solutions are crafted address your unique financial helping you achieve your specific goals and aspirations.",
    },
    {
        icon: <TrackRecordIcon />,
        title: "Proven Track Record",
        description: "Our proven track record highlights successful outcomes and client satisfaction through effective financial solutions.",
    }
];


export default function Empowerment() {
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
              <p className="text-base font-semibold text-[var(--darkgreen)]">About Us</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[var(--darkgreen)] leading-tight">
              Empowering businesses and individuals with experts
            </h1>
          </div>
          {/* Right Column */}
          <div className="lg:pt-16">
            <p className="text-lg text-[var(--ptext)] leading-relaxed">
              We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity. With years of experience in financial planning, investment management, business consulting.
            </p>
          </div>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {features.map((feature) => (
                <div key={feature.title}>
                    <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[var(--lemon)]">
                        {feature.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[var(--darkgreen)]">{feature.title}</h3>
                    <p className="mt-2 text-base text-[var(--ptext)]">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}