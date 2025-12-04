"use client";

import Link from "next/link";
import {
  Zap, Percent, CheckCircle, Shield,  // features
  Home, Car, Briefcase, Users, Wallet, HeartPulse,  // loan types
  ChevronRight
} from "lucide-react";


/** UI-only Loan Request page */
export default function LoansPage() {
  return (
    <div className="pt-6 pb-6 space-y-8">

      {/* Header / Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0D1F17] text-white shadow">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
        <div className="relative p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Loan Request</h1>
          <p className="text-gray-300 mt-1">
            Flexible financing options tailored to your goals.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-100">
              Not Eligibility
            </button>
            <Link href="/dashboard/loans/learn-more" className="rounded-lg border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Our Loan Services */}
      <section>
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Why Choose Our Loan Services
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <FeatureCard
            icon={<Zap className="text-emerald-600" />}
            title="Quick Approval"
            text="Get a decision within hours and funds within days."
          />
          <FeatureCard
            icon={<Percent className="text-indigo-600" />}
            title="Competitive Rates"
            text="Low interest rates tailored to your credit profile."
          />
          <FeatureCard
            icon={<CheckCircle className="text-yellow-600" />}
            title="Simple Process"
            text="Straightforward application with minimal paperwork."
          />
          <FeatureCard
            icon={<Shield className="text-rose-600" />}
            title="Secure & Confidential"
            text="Your information is protected with bank-level security."
          />
        </div>
      </section>

      {/* Available Loan Types */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Available Loan Types</h2>
          <Link href="#" className="text-sm font-medium text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
            View all loan options <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <LoanTypeCard
            icon={<Home />}
            title="Personal Home Loans"
            text="Finance your dream home with competitive rates."
            href="#"
          />
          <LoanTypeCard
            icon={<Car />}
            title="Automobile Loans"
            text="Get on the road with flexible auto financing."
            href="#"
          />
          <LoanTypeCard
            icon={<Briefcase />}
            title="Business Loans"
            text="Grow your business with tailored financing."
            href="#"
          />
          <LoanTypeCard
            icon={<Users />}
            title="Joint Mortgage"
            text="Share responsibility with a co-borrower."
            href="#"
          />
          <LoanTypeCard
            icon={<Wallet />}
            title="Secured Overdraft"
            text="Access funds when needed with asset backing."
            href="#"
          />
          <LoanTypeCard
            icon={<HeartPulse />}
            title="Health Financing"
            text="Cover medical expenses with flexible payments."
            href="#"
          />
        </div>
      </section>

      {/* Small footer note */}
      <p className="text-xs text-gray-500">
        * This page is a visual preview. Actions are disabled in this UI-only version.
      </p>
    </div>
  );
}

/* ——— UI Subcomponents ——— */

function FeatureCard({
  icon, title, text,
}: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-white rounded-xl  shadow-sm p-4 flex items-start gap-3">
      <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}

function LoanTypeCard({
  icon, title, text, href,
}: { icon: React.ReactNode; title: string; text: string; href: string }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-gray-500 text-sm">{text}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          disabled
          className="rounded-lg bg-gray-900 text-white px-3 py-2 text-sm font-medium opacity-60 cursor-not-allowed"
          title="UI-only preview"
        >
          Apply
        </button>
        <Link href={href} className="text-sm text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
          Details <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
