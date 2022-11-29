import React from "react";
import PopularNewsItem from "./PopularNewsItem ";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArticleOfTheDay({ latestItems }) {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-wide">Articel of The Day</h1>
      <div className="mt-2">
        <Slider {...settings}>
          {latestItems.map((item, i) => (
            <PopularNewsItem key={i} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ArticleOfTheDay;
