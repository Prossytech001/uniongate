import LoanHero from "@/components/LoanHero";
import LoanProducts from "@/components/LoanProducts";
import Footer from "@/components/Footer";

export default function LoanPage() {
  return (
    <div>
      <LoanHero />
      <LoanProducts />
      <Footer/> 

      {/* Next loan sections will go here */}
    </div>
  );
}
