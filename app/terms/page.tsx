import Termshero from "../../components/Termshero"
import Footer from "@/components/Footer";



export default function TermsPage() {
  return (
    <div className="">

      {/* Hero Section */}
      <Termshero/>

      {/* Terms Content */}
      <div className=" max-w-4xl mx-auto px-6 py-20 text-gray-800 space-y-12 leading-relaxed">

        {/* SECTION 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            These Terms & Conditions govern your use of Swiss Community Bank Savings’
            services, website, and mobile applications. By accessing or using our services,
            you agree to comply with these terms.
          </p>
        </section>

        {/* SECTION 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
          <p>
            By opening an account or using our banking platform, you confirm that you are
            at least 18 years of age and legally capable of entering a binding agreement.
          </p>
        </section>

        {/* SECTION 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Account Responsibility</h2>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>You are responsible for maintaining confidentiality of your login details.</li>
            <li>You agree to provide accurate and current information at all times.</li>
            <li>
              Any unauthorized use of your account must be reported to us immediately.
            </li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Prohibited Activities</h2>
          <p>Users are strictly prohibited from engaging in activities such as:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Money laundering or fraudulent transactions</li>
            <li>Unauthorized access attempts to our systems</li>
            <li>Providing false or misleading information</li>
          </ul>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Fees & Charges</h2>
          <p>
            All account fees, maintenance charges, and transaction costs will be clearly
            communicated to you. By using our services, you agree to these fees.
          </p>
        </section>

        {/* SECTION 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Privacy & Security</h2>
          <p>
            Your personal and financial information is protected under strict security
            measures. For details, please refer to our{" "}
            <a href="/privacy" className="text-[var(--darkgreen)] underline">
              Privacy Policy
            </a>.
          </p>
        </section>

        {/* SECTION 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Service Availability</h2>
          <p>
            We strive to maintain uninterrupted service. However, we may suspend or limit
            access for maintenance, upgrades, or unforeseen circumstances.
          </p>
        </section>

        {/* SECTION 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Limitation of Liability</h2>
          <p>
            Swiss Community Bank Savings is not liable for losses arising from:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Technical errors beyond our control</li>
            <li>Unauthorized access caused by user negligence</li>
            <li>Unexpected service interruptions</li>
          </ul>
        </section>

        {/* SECTION 9 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Updated
            terms will be posted on this page with a revised date.
          </p>
        </section>

        {/* SECTION 10 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <p>
            For any questions regarding these Terms, please contact us at:
          </p>

          <ul className="mt-3 space-y-1">
            <li>Email: support@uniongatebank.com.com</li>
            <li>Address: Bahnhofstrasse 15, P.O. Box CH-8022 Zürich</li>
          </ul>
        </section>

      </div>

      {/* Last Updated */}
      <p className="mt-16 text-sm text-gray-500">
        Last Updated: January 2025
      </p>
      <Footer/> 
    </div>
  );
}
