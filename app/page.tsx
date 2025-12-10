import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Empowerment from "@/components/Empowerment"
import FeaturedServices from "@/components/FeaturedServices";
import HomepageExpertise from '@/components/HomepageExpertise';
import HomepageWhyChooseUs from "@/components/HomepageWhyChooseUs";
import ApproachSection from "@/components/ApproachSection";
import FinancialWisdom from "@/components/FinancialWisdom";
import CtaSection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
     
      <Hero />
      <Empowerment/>
      <FeaturedServices/>
      <HomepageExpertise/>
      <HomepageWhyChooseUs/>
      <ApproachSection/>
      <FinancialWisdom/>
      <CtaSection/>
      <FaqSection/>
      <Footer/> 
    </div>
  );
}
