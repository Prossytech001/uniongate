"use client";

import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const languages = [
    { code: "en", label: "English", country: "US" },
    { code: "fr", label: "French", country: "FR" },
    { code: "es", label: "Spanish", country: "ES" },
    { code: "de", label: "German", country: "DE" }
  ];

  // Google Translate Initialization
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setCurrentLang(savedLang);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,de",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem("lang", lang);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }

    setOpen(false);
  };

  return (
    <div className="relative">
      {/* UI BUTTON */}
      <button
        className="flex items-center gap-2 bg-white rounded-md px-4 py-2 shadow hover:shadow-md transition text-black"
        onClick={() => setOpen(!open)}
      >
        {/* FLAG */}
        <ReactCountryFlag
          countryCode={languages.find((l) => l.code === currentLang)?.country || "US"}
          svg
          style={{ width: "20px", height: "20px" }}
        />

        {/* CODE */}
        <span className="font-medium">{currentLang.toUpperCase()}</span>

        {/* ARROW */}
        <span>⌄</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 bg-[var(--lemon)] text-[var(--headtext)] rounded-lg shadow-lg p-2 w-36 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left rounded"
              onClick={() => switchLanguage(lang.code)}
            >
              <ReactCountryFlag
                countryCode={lang.country}
                svg
                style={{ width: "20px", height: "20px" }}
              />
              {lang.code.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
