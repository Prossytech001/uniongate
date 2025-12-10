import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import Contacthero from "@/components/Contacthero"
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="">
        <Contacthero/>

      <ContactInfo />

      {/* Page Title */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <p className="text-green-700 font-medium">★ Contact Us</p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900">
          Get in touch with our experts finance
        </h1>
      </div>

      {/* Map + Form */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        <Map />

        <ContactForm />
        <Footer/> 

      </div>
    </div>
  );
}
