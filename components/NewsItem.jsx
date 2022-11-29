import React from "react";

function NewsItem({ item }) {
  return (
    <div className="mb-14 lg:mb-10 md:flex items-start md:gap-x-6">
      <div className="w-full md:w-2/5 lg:w-1/4 h-48 md:h-40 ">
        <img
          src={item.urlToImage}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:3/5 lg:w-3/4 mt-3">
        <div className="mb-1 flex justify-start">
          <p className="text-xs text-gray-800">
            by <span className="text-black font-semibold">{item.author}</span>
          </p>
        </div>
        <h1 className="mb-2 font-bold ">{item.title}</h1>
        <p className="text-sm text-gray-800">{item.description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
