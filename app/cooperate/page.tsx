import BusinessHero from "@/components/BusinessHero";
import BusinessGrowthSection from "@/components/BusinessGrowthSection";
import ExpertiseSection from "@/components/ExpertiseSection";



export default function PersonalPage() {
  return (
    <div>
    <BusinessHero/>
    <BusinessGrowthSection/>
    <ExpertiseSection/>

      {/* Other sections for Personal page can go under here */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold">Personal Banking Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          This is where you add more content for the personal page...
        </p>
      </section>
    </div>
  );
}
