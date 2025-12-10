export default function PersonalHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765310816/WhatsApp_Image_2025-12-09_at_12.00.00_b4333112_rs5s6s.jpg" // Change to your image path
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Empowering Individuals and <br /> Businesses to Grow
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-3xl">
          Maximize your wealth with tailored strategies and expert guidance.
          We provide comprehensive financial solutions designed to help individuals 
          and businesses thrive in today’s dynamic marketplace.
        </p>

        <button className="mt-8 bg-[#DDE685] text-black rounded-full px-8 py-3 font-medium text-lg flex items-center gap-2 hover:bg-[#cdd76f] transition">
          Enrol <span>→</span>
        </button>
      </div>
    </section>
  );
}
