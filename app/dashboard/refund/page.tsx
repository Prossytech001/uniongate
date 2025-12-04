"use client";

import { ShieldCheck, FileSearch, Landmark, CheckCircle, XCircle, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function IRSRefundPage() {
  return (
    <div className="pt-6 pb-6 max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">IRS Tax Refund Service</h1>
        <p className="text-gray-500 mt-1">
          Receive eligible U.S. tax refunds quickly and securely through your account.
        </p>
      </div>

      {/* OVERVIEW CARD */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">What is IRS Refund?</h2>
        <p className="text-gray-600 leading-relaxed">
          The IRS Refund Service allows eligible users to receive U.S. federal tax refunds directly
          into their bank account. Our system ensures secure processing, faster payouts, and
          real-time status updates of your refund.
        </p>
      </div>

      {/* REQUIREMENTS CARD */}
      <div className="bg-white rounded-xl shadow p-6 space-y-5 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Eligibility Requirements</h2>

        <div className="space-y-4">

          <Requirement
            passed={false}
            title="You must have completed KYC verification"
            description="IRS refunds can only be processed once your identity is fully verified."
          />

          <Requirement
            passed={false}
            title="You must have made at least 1 deposit"
            description="This confirms your account activity before receiving a federal refund."
          />

          <Requirement
            passed={true}
            title="Valid U.S. Tax Identification Number (TIN / SSN)"
            description="A valid identification number is required to process your refund."
          />

          <Requirement
            passed={false}
            title="Your account must be active and not restricted"
            description="Frozen or restricted accounts cannot receive IRS deposit transfers."
          />

        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-700">
          ⚠️ <strong>Important:</strong>{" "}
          Meeting eligibility requirements does not guarantee approval.  
          Refund processing depends on IRS verification and compliance checks.
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Why Use Our Refund Service?</h2>

        <div className="grid md:grid-cols-3 gap-4">

          <Benefit
            icon={<Clock size={26} className="text-blue-600" />}
            title="Faster Refund Processing"
            text="Receive your refund quicker than traditional bank transfers."
          />

          <Benefit
            icon={<ShieldCheck size={26} className="text-emerald-600" />}
            title="Secure & Compliant"
            text="All refund transfers are processed with strict banking security layers."
          />

          <Benefit
            icon={<DollarSign size={26} className="text-purple-600" />}
            title="No Hidden Fees"
            text="You receive the exact refund amount approved by the IRS."
          />

        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 space-y-6">
        <h2 className="text-lg font-semibold">How IRS Refund Works</h2>

        <div className="space-y-4">

          <Step
            number="1"
            title="Submit Your Information"
            text="Provide your Tax ID and the necessary IRS documents for verification."
          />

          <Step
            number="2"
            title="IRS Verification"
            text="We work with the IRS to validate your refund eligibility."
          />

          <Step
            number="3"
            title="Refund Deposited"
            text="Your approved tax refund is transferred directly to your bank account."
          />

        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-between items-center bg-emerald-600 rounded-xl p-6 text-white">
        <div>
          <h3 className="text-xl font-semibold">Ready to Request Your Refund?</h3>
          <p className="text-white/80">Start the process today and track your refund in real-time.</p>
        </div>

        <Link href="/dashboard/refund/apply">
          <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Start Now
          </button>
        </Link>
      </div>

    </div>
  );
}


/* COMPONENTS */

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

function Step({ number, title, text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white font-bold rounded-full">
        {number}
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-gray-500 text-sm">{text}</p>
      </div>
    </div>
  );
}
