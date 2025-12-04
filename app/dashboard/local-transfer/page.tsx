"use client";

import { useEffect, useState } from "react";
import { SendHorizonal, User, ArrowRight, DollarSign, Loader } from "lucide-react";

type VerifyResp = { name?: string; error?: string };

export default function LocalTransferPage() {
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [beneficiaryName, setBeneficiaryName] = useState<string>("");
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string>("");

  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // load balance
  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/account/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setBalance(Number(data?.account?.balances?.usd?.available ?? 0));
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  const presets = [100, 500, 1000];

  const verifyBeneficiary = async () => {
    setVerifying(true);
    setVerifyError("");
    setBeneficiaryName("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/transfer/verify-beneficiary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ accountNumber }),
        }
      );
      const data: VerifyResp = await res.json();
      if (!res.ok || !data?.name) {
        setVerifyError(data?.error || "Could not verify beneficiary");
      } else {
        setBeneficiaryName(data.name);
      }
    } catch {
      setVerifyError("Network error. Try again.");
    } finally {
      setVerifying(false);
    }
  };

  const amountNum = Number(amount || 0);
  const amountValid = amountNum > 0 && amountNum <= balance;
  const canContinue = amountValid && beneficiaryName && !verifying;

  if (loading) {
    return (
      <div className="p-6 flex justify-center py-20">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-6 pb-6 space-y-6">
      {/* HEADER BANNER */}
      <div className="bg-[#0D1F17] text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3">
          <SendHorizonal size={40} className="opacity-80" />
          <div>
            <h2 className="text-xl font-semibold">Local Bank Transfer</h2>
            <p className="text-gray-300 text-sm">
              Send money to any local bank account securely.
            </p>
          </div>
        </div>
      </div>

      {/* BALANCE */}
      <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center border">
        <div>
          <p className="text-gray-500 text-sm">Available Balance</p>
          <h2 className="text-2xl font-bold">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </h2>
        </div>
        <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full">
          Available
        </span>
      </div>

      {/* AMOUNT */}
      <div className="bg-white rounded-xl shadow p-6 space-y-3">
        <p className="text-gray-700 font-medium">Transfer Amount</p>

        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-600">
            <DollarSign size={20} />
          </span>
          <input
            type="number"
            className={`w-full border rounded-lg p-3 pl-10 text-lg focus:ring focus:border-black
            ${amount && !amountValid ? "border-red-400" : ""}`}
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min={0}
          />
        </div>

        {!amountValid && amount !== "" && (
          <p className="text-red-600 text-sm">
            Amount must be greater than 0 and not exceed your available balance.
          </p>
        )}

        {/* PRESETS */}
        <div className="flex gap-3 mt-2">
          {presets.map((a) => (
            <button
              key={a}
              onClick={() => setAmount(String(a))}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              type="button"
            >
              ${a}
            </button>
          ))}
          <button
            onClick={() => setAmount(String(balance))}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            type="button"
          >
            All
          </button>
        </div>
      </div>

      {/* BENEFICIARY */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <User /> Beneficiary Details
        </h3>

        <div className="flex gap-3">
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Beneficiary Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <button
            onClick={verifyBeneficiary}
            disabled={!accountNumber || verifying}
            className="px-4 py-2 rounded-lg bg-black text-white disabled:opacity-50"
            type="button"
          >
            {verifying ? "Verifying..." : "Verify"}
          </button>
        </div>

        {verifyError && (
          <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
            {verifyError}
          </div>
        )}

        {beneficiaryName && (
          <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
            Verified: <span className="font-semibold">{beneficiaryName}</span>
          </div>
        )}
      </div>

      {/* CONTINUE (goes to step 2 later) */}
      <button
        disabled={!canContinue}
        className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 disabled:opacity-50 flex items-center justify-center gap-2"
        type="button"
        onClick={() => {
          // Step 2 will handle PIN + submission.
          // For now we just keep the data ready in sessionStorage.

           
            window.location.href = `/dashboard/local-transfer/review?amount=${amount}&accountNumber=${accountNumber}&name=${beneficiaryName}`
          sessionStorage.setItem(
            "localTransferDraft",
            JSON.stringify({ amount: Number(amount), accountNumber, beneficiaryName })
          );
          // you can navigate to /dashboard/local-transfer/confirm in step 2
        }}
      >
        Continue <ArrowRight />
      </button>
    </div>
  );
}
