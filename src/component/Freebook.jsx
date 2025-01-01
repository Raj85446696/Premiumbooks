import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const filterbook = list.filter((data) => data.Category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 mt-20">
        <div>
          <h1 className="font-semibold text-xl pb-2">Most Viewed Books</h1>
          <p>
            And now here is my secret, a very simple secret: It is only with the
            heart that one can see rightly; what is essential is invisible to
            the eye.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterbook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
