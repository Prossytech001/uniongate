"use client";

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion'; // Using Framer Motion for card animations

// --- SVG Icon Component ---
const AsteriskIcon = () => (
    <svg className="w-5 h-5 text-[var(--darkgreen)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3L12 8L14 3M10 21L12 16L14 21M3 10L8 12L3 14M21 10L16 12L21 14"></path></svg>
);

// --- Main Component ---
export default function FinancialWisdom() {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for the grid items sliding up
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 mb-16 sm:mb-24">
          <div className="relative">
             <div className="absolute -top-8 left-0 w-2.5 h-2.5 bg-[var(--lemon)] rounded-full"></div>
            <div className="flex items-center space-x-2">
              <AsteriskIcon />
              <p className="text-base font-semibold text-[var(--darkgreen)]">Financial Wisdom</p>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[var(--darkgreen)] leading-tight">
              Fascinating facts that shape your financial knowledge
            </h1>
          </div>
          <div className="lg:pt-16">
            <p className="text-lg text-[var(--ptext)] leading-relaxed">
              Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.
            </p>
          </div>
        </div>

        {/* Facts Grid - MODIFIED for 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Item 1: Image */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-64 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765378016/company-wisdom-img-1_hyxe7d.jpg" alt="Woman with credit card" fill className="object-cover"/></motion.div>
            
            {/* Item 2: Stat */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between">
              <p className="font-semibold text-lg text-[var(--ptext)]">The number of publicly traded companies</p>
              <h3 className="text-5xl md:text-6xl font-bold text-[var(--darkgreen)]">
                {inView && <CountUp end={12} duration={2} />}k+
              </h3>
            </motion.div>

            {/* Item 3: Image */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-64 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765378033/company-wisdom-img-2_tuxzmi.jpg" alt="Man holding money" fill className="object-cover"/></motion.div>

            {/* Item 4: Stat */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[var(--lemon)] rounded-3xl p-8 flex flex-col justify-between">
                <p className="font-semibold text-lg text-[var(--darkgreen)]">The percentage of financial advisors</p>
                <h3 className="text-5xl md:text-6xl font-bold text-[var(--darkgreen)]">
                    {inView && <CountUp end={80} duration={2} />}%
                </h3>
            </motion.div>
            
            {/* Item 5: Stat */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[var(--lemon)] rounded-3xl p-8 flex flex-col justify-between">
                <p className="font-semibold text-lg text-[var(--darkgreen)]">The number of credit cards in circulation</p>
                <h3 className="text-5xl md:text-6xl font-bold text-[var(--darkgreen)]">
                    {inView && <CountUp end={31} duration={2} />}k+
                </h3>
            </motion.div>

            {/* Item 6: Image */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-64 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765378053/company-wisdom-img-3_tsdxmh.jpg" alt="Business handshake" fill className="object-cover"/></motion.div>

            {/* Item 7: Stat */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 flex flex-col justify-between">
                <p className="font-semibold text-lg text-[var(--ptext)]">The proportion of Americans who believe that financial literacy</p>
                <h3 className="text-5xl md:text-6xl font-bold text-[var(--darkgreen)]">
                    {inView && <CountUp end={90} duration={2} />}%
                </h3>
            </motion.div>

            {/* Item 8: Image */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-64 rounded-3xl overflow-hidden"><Image src="https://res.cloudinary.com/dastvrhur/image/upload/v1765378082/company-wisdom-img-4_s0hxnf.jpg" alt="Financial meeting" fill className="object-cover"/></motion.div>
        </div>
      </div>
    </section>
  );
}