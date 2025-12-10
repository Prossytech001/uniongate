"use client";

import Image from "next/image";

export default function LoanProducts() {
  const products = [
    {
      title: "Business Loans",
      text: "We use soft credit searching when you apply for a loan with us, this doesn’t leave a negative mark on your credit file if you are unsuccessful.",
      img: "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765362512/Did_you_know_that_96_of_our_loan_applications_are_zmg3lj.jpg",
      button: false,
    },
    {
      title: "Car Loans",
      text: "Do you need help getting back on the road? We might be able to help.",
      img: "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765362512/At_BriMarc_Noel_LLC_we_understand_the_nuances_of_fzmy4a.jpg",
      button: false,
    },
    {
      title: "Debt Consolidation",
      text: "Consolidating your debts can make keeping on top of your monthly payments much simpler. Even if you’ve had bad credit in the past, you can apply for a loan with us to see if we can help you.",
      img: "https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765362512/An_FHA_203_k_loan_provides_the_money_needed_for_pysrl2.jpg",
      button: true,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {products.map((item, i) => (
          <div
            key={i}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Background */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Glass Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-6 rounded-2xl backdrop-blur-md bg-white/30 shadow-md">
              <h3 className="text-2xl font-semibold text-white drop-shadow">
                {item.title}
              </h3>

              <p className="text-white/90 text-sm mt-2">
                {item.text}
              </p>

              {item.button && (
                <button className="mt-4 bg-[#DDE685] hover:bg-[#cdd76f] transition text-black rounded-full p-3 w-fit">
                  →
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
