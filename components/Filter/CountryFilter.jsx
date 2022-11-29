import React from "react";

function CountryFilter() {
  const Languagelinks = [
    { id: "en", name: "English", value: "en" },
    { id: "es", name: "Spanish", value: "es" },
    { id: "it", name: "Italian", value: "it" },
    { id: "ar", name: "Arab", value: "ar" },
    { id: "ru", name: "Rusian", value: "ru" },
    { id: "it", name: "de", value: "de" },
  ];

  function OnClick(value) {
    setLanguage(value);
  }

  return (
    <div className="px-4 pt-8 flex gap-3">
      {Languagelinks.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={() => setLanguage(link.value)}
        >
          {link.name}
        </button>
      ))}
    </div>
  );
}

export default CountryFilter;
