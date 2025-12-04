// "use client";

// import Link from "next/link";
// import { CreditCard, Wallet, Clock, Building2, ShieldCheck, ChevronRight } from "lucide-react";

// export default function CardsPage() {
//   return (
//     <div className="p-6 space-y-6">

//       {/* HEADER DATE */}
//       <p className="text-sm text-gray-500">Friday, October 31, 2025</p>

//       {/* TOP SUMMARY CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <SummaryMiniCard 
//           title="Active Cards" 
//           value="0" 
//           icon={<CreditCard />} 
//           color="bg-yellow-100" 
//         />

//         <SummaryMiniCard 
//           title="Pending Applications" 
//           value="0" 
//           icon={<Clock />} 
//           color="bg-blue-100" 
//         />

//         <SummaryMiniCard 
//           title="Total Card Balance" 
//           value="$0.00" 
//           icon={<Wallet />} 
//           color="bg-green-100" 
//         />
//       </div>

//       {/* VIRTUAL CARD INTRO */}
//       <div className="bg-[#0D1F17] text-white rounded-xl p-6 shadow-lg">

//         <h2 className="text-xl font-semibold mb-2">Virtual Cards Made Easy</h2>
//         <p className="text-gray-300 mb-4">
//           Create virtual cards for secure payments, subscriptions and more. Enjoy enhanced security & spending control.
//         </p>

//         <div className="grid md:grid-cols-2 gap-4">

//           <FeatureItem 
//             icon={<ShieldCheck />} 
//             title="Secure Payments"
//             text="Protect your main account using separate virtual cards." 
//           />

//           <FeatureItem 
//             icon={<Building2 />} 
//             title="Global Acceptance"
//             text="Use anywhere major cards are accepted online." 
//           />

//           <FeatureItem 
//             icon={<Wallet />} 
//             title="Spending Controls"
//             text="Set limits and track transactions easily." 
//           />

//           <FeatureItem 
//             icon={<CreditCard />} 
//             title="Instant Issuance"
//             text="Get a virtual card ready in minutes." 
//           />
//         </div>

//         <Link href="/dashboard/cards/apply">
//           <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
//             Apply Now
//           </button>
//         </Link>
//       </div>

//       {/* NO CARDS YET SECTION */}
//       <div className="text-center py-12 bg-white rounded-xl shadow">
//         <div className="flex justify-center mb-4">
//           <CreditCard size={55} className="text-gray-300" />
//         </div>

//         <h3 className="text-xl font-semibold mb-2">No cards yet</h3>
//         <p className="text-gray-500 mb-4">
//           You haven’t applied for any virtual cards yet. Apply to get started.
//         </p>

//         <Link href="/dashboard/cards/apply">
//           <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
//             Apply for Card
//           </button>
//         </Link>
//       </div>

//       {/* HOW VIRTUAL CARDS WORK */}
//       <div className="space-y-6">

//         <h3 className="text-lg font-semibold">How Virtual Cards Work</h3>

//         <div className="grid md:grid-cols-3 gap-4">

//           <WorkStep 
//             icon={<CreditCard />} 
//             title="1. Apply"
//             text="Fill the virtual card application form and select card options." 
//           />

//           <WorkStep 
//             icon={<ShieldCheck />} 
//             title="2. Activate"
//             text="Once approved, your virtual card becomes ready to use." 
//           />

//           <WorkStep 
//             icon={<Wallet />} 
//             title="3. Use"
//             text="Use your virtual card for online transactions & subscriptions." 
//           />

//         </div>
//       </div>

//     </div>
//   );
// }

// /* COMPONENTS */

// function SummaryMiniCard({ title, value, icon, color }: any) {
//   return (
//     <div className={`${color} p-4 rounded-xl flex items-center justify-between`}>
//       <div>
//         <p className="text-gray-600 text-sm">{title}</p>
//         <p className="text-xl font-bold">{value}</p>
//       </div>
//       <div className="text-gray-700">{icon}</div>
//     </div>
//   );
// }

// function FeatureItem({ icon, title, text }: any) {
//   return (
//     <div className="flex items-start gap-3">
//       <div className="p-3 bg-white/10 rounded-lg">{icon}</div>
//       <div>
//         <p className="font-medium">{title}</p>
//         <p className="text-gray-300 text-sm">{text}</p>
//       </div>
//     </div>
//   );
// }

// function WorkStep({ icon, title, text }: any) {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow">
//       <div className="p-3 bg-yellow-200 rounded-full w-fit mb-3">
//         {icon}
//       </div>
//       <p className="font-semibold">{title}</p>
//       <p className="text-gray-500 text-sm mt-1">{text}</p>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Wallet,
  Clock,
  Building2,
  ShieldCheck,
  Snowflake,
  Trash2,
  Eye,
  Loader
} from "lucide-react";

export default function CardsPage() {
  const [cards, setCards] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // FETCH CARDS + APPLICATIONS
  useEffect(() => {
    if (!token) return;

    async function loadData() {
      try {
        // Fetch approved cards
        const resCards = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/cards`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dataCards = await resCards.json();
        setCards(dataCards.cards || []);

        // Fetch pending applications
        const resApps = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/applications`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const dataApps = await resApps.json();
        setApplications(dataApps.applications || []);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    loadData();
  }, [token]);

  // Freeze/unfreeze logic
  const toggleFreeze = async (card: any) => {
    const route = card.status === "active" ? "freeze" : "unfreeze";

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/${route}/${card._id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });

    // reload
    const refreshed = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/cards`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await refreshed.json();
    setCards(data.cards || []);
  };

  // delete
  const deleteCard = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/virtual-cards/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setCards(cards.filter((card) => card._id !== id));
  };

  if (loading)
    return (
      <div className="p-6 flex justify-center py-20">
        <Loader size={30} className="animate-spin" />
      </div>
    );

  return (
    <div className="pt-6 pb-6 space-y-6">

      {/* HEADER DATE */}
      <p className="text-sm text-gray-500">Friday, October 31, 2025</p>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <SummaryMiniCard
          title="Active Cards"
          value={cards.length}
          icon={<CreditCard />}
          color="bg-yellow-100"
        />

        <SummaryMiniCard
          title="Pending Applications"
          value={applications.length}
          icon={<Clock />}
          color="bg-blue-100"
        />

        <SummaryMiniCard
          title="Total Card Balance"
          value="$0.00"
          icon={<Wallet />}
          color="bg-green-100"
        />
      </div>

      {/* VIRTUAL CARD INTRO */}
      <div className="bg-[#0D1F17] text-white rounded-xl p-6 shadow-lg">

        <h2 className="text-xl font-semibold mb-2">Virtual Cards Made Easy</h2>
        <p className="text-gray-300 mb-4">
          Create virtual cards for secure payments, subscriptions and more. Enjoy enhanced security & spending control.
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          <FeatureItem
            icon={<ShieldCheck />}
            title="Secure Payments"
            text="Protect your main account using separate virtual cards."
          />

          <FeatureItem
            icon={<Building2 />}
            title="Global Acceptance"
            text="Use anywhere major cards are accepted online."
          />

          <FeatureItem
            icon={<Wallet />}
            title="Spending Controls"
            text="Set limits and track transactions easily."
          />

          <FeatureItem
            icon={<CreditCard />}
            title="Instant Issuance"
            text="Get a virtual card ready in minutes."
          />
        </div>

        <Link href="/dashboard/cards/apply">
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Apply Now
          </button>
        </Link>
      </div>

      {/* ACTIVE CARDS LIST */}
      {cards.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Cards</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card) => (
              <CardItem
                key={card._id}
                card={card}
                onFreeze={() => toggleFreeze(card)}
                onDelete={() => deleteCard(card._id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* EMPTY STATE */}
      {cards.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow">
          <CreditCard size={55} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No cards yet</h3>
          <p className="text-gray-500 mb-4">
            You haven’t applied for any virtual cards yet. Apply to get started.
          </p>

          <Link href="/dashboard/cards/apply">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Apply for Card
            </button>
          </Link>
        </div>
      )}

      {/* HOW VIRTUAL CARDS WORK */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">How Virtual Cards Work</h3>

        <div className="grid md:grid-cols-3 gap-4">

          <WorkStep
            icon={<CreditCard />}
            title="1. Apply"
            text="Fill the virtual card application form and select card options."
          />

          <WorkStep
            icon={<ShieldCheck />}
            title="2. Activate"
            text="Once approved, your virtual card becomes ready to use."
          />

          <WorkStep
            icon={<Wallet />}
            title="3. Use"
            text="Use your virtual card for online transactions & subscriptions."
          />

        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function SummaryMiniCard({ title, value, icon, color }: any) {
  return (
    <div className={`${color} p-4 rounded-xl flex items-center justify-between`}>
      <div>
        <p className="text-gray-600 text-sm">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="text-gray-700">{icon}</div>
    </div>
  );
}

function FeatureItem({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-3 bg-white/10 rounded-lg">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-300 text-sm">{text}</p>
      </div>
    </div>
  );
}

function WorkStep({ icon, title, text }: any) {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <div className="p-3 bg-yellow-200 rounded-full w-fit mb-3">{icon}</div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-500 text-sm mt-1">{text}</p>
    </div>
  );
}

function CardItem({ card, onFreeze, onDelete }: any) {
  const masked = `**** **** **** ${card.cardNumber.slice(-4)}`;

  return (
    <div className="bg-[#0D1F17] text-white rounded-2xl p-6 shadow-lg">
      <p className="uppercase text-sm">{card.cardType}</p>

      <h2 className="text-2xl tracking-wider mt-1">{masked}</h2>

      <p className="text-gray-300 text-sm mt-2">
        Exp: {card.expiryMonth}/{card.expiryYear}
      </p>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-xs ${
          card.status === "active" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {card.status}
      </span>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onFreeze}
          className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
        >
          <Snowflake size={18} />
          {card.status === "active" ? "Freeze" : "Unfreeze"}
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-1 bg-red-600 px-3 py-2 rounded-lg hover:bg-red-700"
        >
          <Trash2 size={18} />
          Delete
        </button>

        <Link
          href={`/dashboard/cards/${card._id}`}
          className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
        >
          <Eye size={18} />
          View
        </Link>
      </div>
    </div>
  );
}
