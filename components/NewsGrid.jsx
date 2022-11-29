import React from "react";

import NewsItem from "./NewsItem";

function NewsGrid({ items }) {
  return (
    <div className="mt-4">
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
