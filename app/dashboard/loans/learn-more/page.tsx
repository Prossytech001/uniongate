"use client";

import { ShieldCheck, Landmark, PiggyBank, CheckCircle, XCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function LoanLearnMorePage() {
  return (
    <div className="pt-6  pb-6 max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Loan Eligibility & Requirements</h1>
        <p className="text-gray-500 mt-1">
          Understand what you need before applying for a loan.
        </p>
      </div>

      {/* REQUIREMENTS CARD */}
      <div className="bg-white rounded-xl shadow p-6 space-y-5 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Minimum Eligibility Criteria</h2>

        <div className="space-y-4">

          <Requirement
            passed={false}
            title="You must have made at least 2 deposits"
            description="This helps us verify your earning consistency and account activity."
          />

          <Requirement
            passed={false}
            title="Account must be at least 30 days old"
            description="Newly created accounts cannot apply for loans immediately."
          />

          <Requirement
            passed={true}
            title="KYC Verification Required"
            description="Your identity must be verified to comply with financial regulations."
          />

          <Requirement
            passed={true}
            title="No outstanding unpaid loans"
            description="All previous loan balances must be cleared before a new request."
          />

          <Requirement
            passed={false}
            title="Maintain a healthy account balance"
            description="We recommend keeping your account active to improve approval chances."
          />

        </div>

        {/* WARNING BOX */}
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-700">
          ⚠️ <strong>Important:</strong>{" "}
          Meeting these requirements does not guarantee approval. Your account activity, deposits, and transaction patterns may influence loan decisions.
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Why Our Loans Are Different</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <Benefit
            icon={<Landmark size={26} className="text-emerald-600" />}
            title="Flexible Repayments"
            text="Choose repayment terms that fit your financial comfort."
          />

          <Benefit
            icon={<PiggyBank size={26} className="text-blue-600" />}
            title="Low Interest"
            text="Our rates are calculated based on your account credibility."
          />

          <Benefit
            icon={<ShieldCheck size={26} className="text-purple-600" />}
            title="Secure & Protected"
            text="Your application and financial data are guarded by bank-level security."
          />

        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-between items-center bg-[var(--darkgreen)] rounded-xl p-6 text-white">
        <div>
          <h3 className="text-xl font-semibold">Ready to Apply?</h3>
          <p className="text-white/80">If you meet the requirements, you can start your loan application immediately.</p>
        </div>

        <Link href="/dashboard/loan/apply">
          <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Apply Now
          </button>
        </Link>
      </div>

    </div>
  );
}


/* ──────────────────────────────── COMPONENTS ─────────────────────────────── */

function Requirement({ passed, title, description }: any) {
  return (
    <div className="flex items-start gap-3">
      {passed ? (
        <CheckCircle className="text-green-600 mt-1" size={22} />
      ) : (
        <XCircle className="text-red-500 mt-1" size={22} />
      )}

      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Benefit({ icon, title, text }: any) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
      <div>{icon}</div>
      <p className="font-semibold mt-2">{title}</p>
      <p className="text-gray-500 text-sm mt-1">{text}</p>
    </div>
  );
}
