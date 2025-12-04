"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  Snowflake,
  Trash2,
  Copy,
  CreditCard,
  Loader
} from "lucide-react";

export default function CardDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [card, setCard] = useState<any>(null);
  const [showNumber, setShowNumber] = useState(false);
  const [showCVV, setShowCVV] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // Load card details
  useEffect(() => {
    if (!id || !token) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/cards`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const found = (data.cards || []).find((c: any) => c._id === id);
        setCard(found || null);
        setLoading(false);
      });
  }, [id, token]);

  const toggleFreeze = async () => {
    const route = card.status === "active" ? "freeze" : "unfreeze";

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/${route}/${card._id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });

    setCard({ ...card, status: card.status === "active" ? "frozen" : "active" });
  };

  const deleteCard = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/${card._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    router.push("/dashboard/cards");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (loading)
    return (
      <div className="p-6 flex justify-center py-20">
        <Loader className="animate-spin" size={32} />
      </div>
    );

  if (!card)
    return (
      <div className="p-6 text-center">
        <p>Card not found.</p>
      </div>
    );

  // MASK CARD NUMBER
  const masked = showNumber ? card.cardNumber : `**** **** **** ${card.cardNumber.slice(-4)}`;

  return (
    <div className="pt-6 pb-6 space-y-6">

      {/* BACK BUTTON */}
      <button
        className="flex items-center gap-2 text-gray-600 hover:text-black"
        onClick={() => router.push("/dashboard/cards")}
      >
        <ArrowLeft size={20} />
        Back to cards
      </button>

      {/* CARD UI */}
      <div className="bg-[#0D1F17] text-white p-6 rounded-2xl shadow-xl">

        <p className="uppercase text-sm">{card.cardType}</p>

        <h2 className="text-3xl tracking-wider mt-2">{masked}</h2>

        {/* VIEW/ HIDE CARD NUMBER */}
        <button
          onClick={() => setShowNumber(!showNumber)}
          className="flex items-center gap-2 text-gray-300 text-sm mt-2"
        >
          {showNumber ? <EyeOff size={18} /> : <Eye size={18} />}
          {showNumber ? "Hide Number" : "Show Number"}
        </button>

        {/* COPY */}
        <button
          onClick={() => copyToClipboard(card.cardNumber)}
          className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 mt-4"
        >
          <Copy size={16} />
          Copy Number
        </button>

        {/* EXPIRY */}
        <p className="text-sm text-gray-300 mt-6">
          Expiry: {card.expiryMonth}/{card.expiryYear}
        </p>

        {/* CVV */}
        <div className="mt-4">
          <p className="text-sm text-gray-300 mb-1">CVV:</p>

          <p className="text-xl font-semibold tracking-wide">
            {showCVV ? card.cvv : "***"}
          </p>

          <div className="flex gap-3 mt-2">
            <button
              onClick={() => setShowCVV(!showCVV)}
              className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
            >
              {showCVV ? <EyeOff size={18} /> : <Eye size={18} />}
              {showCVV ? "Hide CVV" : "Show CVV"}
            </button>

            <button
              onClick={() => copyToClipboard(card.cvv)}
              className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
            >
              <Copy size={18} />
              Copy
            </button>
          </div>
        </div>

        {/* STATUS */}
        <span
          className={`inline-block mt-6 px-3 py-1 rounded-full text-xs ${
            card.status === "active" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {card.status}
        </span>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={toggleFreeze}
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <Snowflake size={18} />
            {card.status === "active" ? "Freeze Card" : "Unfreeze Card"}
          </button>

          <button
            onClick={deleteCard}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>

      {/* BILLING + LIMIT INFO */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <h3 className="text-lg font-semibold mb-2">Card Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <InfoItem label="Card Type" value={card.cardType} />
          <InfoItem label="Card Level" value={card.cardLevel} />
          <InfoItem label="Currency" value={card.currency} />
          <InfoItem label="Daily Limit" value={`$${card.dailyLimit}`} />
        </div>
      </div>
    </div>
  );
}

/* INFO ITEM COMPONENT */
function InfoItem({ label, value }: any) {
  return (
    <div className="p-4 border rounded-xl">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
