import Image from "next/image";

export default function InsuranceHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center px-6 lg:px-20">

      {/* Left Text */}
      <div className="z-10 flex-1 max-w-xl">
        <p className="text-green-700 font-medium">★ Insurance</p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-3">
          Protecting What Matters Most —  
          <br /> Your Life, Health & Future.
        </h1>

        <p className="text-gray-600 mt-6 text-lg">
          Explore our tailored insurance solutions designed to safeguard you, your family,
          and your business against uncertainties — with flexible plans fit for every lifestyle.
        </p>

        <button className="mt-8 bg-[#DDE685] text-black rounded-full px-8 py-3 text-lg font-medium hover:bg-[#cdd76f] transition">
          Get Started →
        </button>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2">
        <Image
          src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg"
          alt="Insurance banner"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

    </section>
  );
}
