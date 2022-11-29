import React from "react";

function PopularNewsItem({ item }) {
  return (
    <div className="flex flex-col mt-4 mr-4">
      <img
        src={item.urlToImage}
        alt=""
        className="w-full h-36 lg:h-48 object-cover rounded-lg"
      />
      <div className="mt-3">
        <div className="mb-1 flex justify-start">
          <p className="text-xs text-gray-800">
            by <span className="text-black font-semibold">{item.author}</span>
          </p>
        </div>
        <h1 className="mb-2 font-bold ">{item.title}</h1>
        {/* <p className="font-semibold text-gray-800">
          {item.description.substring(0, 130)}
        </p> */}
      </div>
    </div>
  );
}

export default PopularNewsItem;
