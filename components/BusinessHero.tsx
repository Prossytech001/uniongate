import Image from "next/image";

export default function BusinessHero() {
  return (
    <section className="relative h-[90vh] w-full">

      {/* Background image using Next/Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1765311809/A_woman_speaking_into_a_microphone_with_a_group_of_people_in_the_background___Premium_AI-generated_image_azvehs.jpg"
          alt="Business banking background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Business banking made easy
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-3xl">
          Maximize your wealth with tailored strategies and expert guidance.
          We provide comprehensive financial solutions designed to help
          individuals and businesses thrive in today’s dynamic marketplace.
        </p>

        <button className="mt-8 bg-[#DDE685] text-black rounded-full px-8 py-3 font-medium text-lg flex items-center gap-2 hover:bg-[#cdd76f] transition">
          Enrol →
        </button>
      </div>
    </section>
  );
}
