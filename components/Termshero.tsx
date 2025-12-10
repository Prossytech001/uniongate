"use client";



export default function LoanHero() {
  return (
    <section className="relative h-[70vh] bg-[var(--darkgreen)]  w-full flex items-center justify-center text-center px-6">

      {/* Background Image */}
      <div className="absolute inset-0">
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
         Terms & Conditions
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
         
           Please read these Terms & Conditions carefully before using our banking services.
        </p>


         



        
      </div>
    </section>
  );
}
