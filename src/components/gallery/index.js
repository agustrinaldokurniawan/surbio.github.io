import React from "react";
import Slider from "react-slick";

import data from "./data";

import utils from "../../utils";

const Gallery = () => {
  const { screenSize } = utils();
  const { images } = data();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenSize < 960 ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <div className="row m-0 pl-5 pr-5">
      <div className="col-12 p-0 text-center" style={{ marginTop: -30 }}>
        <p style={{ borderBottom: "solid 3px black", display: "block" }}>
          <span
            style={{
              backgroundColor: "white",
              bottom: "-15px",
              position: "relative",
              fontSize: 20,
              fontWeight: 600,
            }}
            className="pl-3 pr-3"
          >
            Gallery
          </span>
        </p>
      </div>

      <div className="col-12 p-0 mt-5 text-center">
        <Slider {...settings}>
          {images.map((item, key) => {
            return (
              <div className="col-12 mb-5">
                <img src={item.image} width={"100%"} />
                <small>{item.label}</small>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
