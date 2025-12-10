import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-sm">

        <div className="flex items-center gap-4">
          <div className="bg-[var(--lemon)] p-3 rounded-full">
            <Phone className="text-[var(--darkgreen)]" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Contact</p>
            <p className="text-gray-600 text-sm">+1 (000) 000-0000</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[var(--lemon)] p-3 rounded-full">
            <Mail className="text-[var(--darkgreen)]" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p className="text-gray-600 text-sm">info@uniongatebank.com.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[var(--lemon)] p-3 rounded-full">
            <MapPin className="text-[var(--darkgreen)]" size={24} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">Address</p>
            <p className="text-gray-600 text-sm">
              Bahnhofstrasse 15, P.O. Box CH-8022 Zürich
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
