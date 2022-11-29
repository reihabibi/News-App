import React from "react";

function CategoryFilter({ category, setCategory }) {
  const Languagelinks = [
    { name: "Latest", value: "general" },
    { name: "Entertainment", value: "entertainment" },
    { name: "Health", value: "health" },
    { name: "Science", value: "science" },
    { name: "Sports", value: "sports" },
    { name: "Technology", value: "technology" },
  ];

  function OnClick(value) {
    setCategory(value);
  }

  return (
    <div className="sticky top-0 bg-white py-4 pt-6 lg:pt-14">
      <h1 className="mb-6 text-2xl font-bold tracking-wide">Latest News</h1>
      <div className="flex gap-2 md:gap-4 overflow-scroll scrollHide">
        {Languagelinks.map((link, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCategory(link.value)}
            className={
              " py-1 px-6 text-sm font-semibold tracking-wide  rounded-xl lg:border lg:border-gray-700 lg:hover:bg-gray-800 lg:hover:text-white transition duration-150 ease-in focus:ring-0 " +
              (category === link.value
                ? " bg-gray-800 text-white border-gray-800"
                : " border border-gray-700")
            }
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
