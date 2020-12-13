import React, { useState } from "react";

import SoilImage from "../../assets/icons/carbon_soil-moisture.png";
import FruitImage from "../../assets/icons/emojione_kiwi-fruit.png";
import PotImage from "../../assets/icons/noto_potted-plant.png";
import TreeImage from "../../assets/icons/openmoji_tanabata-tree.png";
import RootImage from "../../assets/icons/simple-icons_roots.png";
import LeaveImage from "../../assets/icons/twemoji_leafy-green.png";
import FlowerImage from "../../assets/icons/twemoji_sunflower.png";

import BGGreen from "../../assets/images/bgGreen.png";

const Manfaat = () => {
  const [arr, setArr] = useState([
    {
      icon: LeaveImage,
      title: "Daun",
      description:
        "Mempercepat pertumbuhan daun menjadi lebat, keras, lebar, tebal, berisi, mengkilap, muncul warna asli dan tidak mudak rontok",
    },
    {
      icon: TreeImage,
      title: "Batang",
      description:
        "Mempercepat perkembangan batang dalam melakukan pembelahan sel, sehingga cepat besar, kokoh dan berurat",
    },
    {
      icon: FlowerImage,
      title: "Bunga",
      description:
        "Mempercepat keluarnya bungan kuncup disetiap pori-pori perbungaan dan tidak mudah gugur",
    },
    {
      icon: FruitImage,
      title: "Buah",
      description:
        "Mempercepat putik bunga jadi buah, buah lebih padat, besar dan berisi",
    },
    {
      icon: RootImage,
      title: "Akar",
      description: "Mempercepat pertumbuhan akar baru dan kokoh",
    },
    {
      icon: PotImage,
      title: "Tunas",
      description:
        "Mempercepat keluarnya tunas-tunas dan anakan baru pada setiap pori pori",
    },
    {
      icon: SoilImage,
      title: "Tanah",
      description: "Memperbaiki struktur tanah yang rusak",
    },
  ]);

  return (
    <div
      id="produk"
      className="row m-0 pl-5 pr-5"
      style={{
        backgroundImage: `url(${BGGreen})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="col-12 p-0 text-center" style={{ marginTop: -70 }}>
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
            Manfaat Surbio Organik
          </span>
        </p>
      </div>
      <div className="col-12 p-0">
        <div className="row m-0 justify-content-center align-item-center">
          {arr.map((item, key) => {
            return (
              <div
                className="col-md-3 col-12 text-center m-5 pt-5 pb-5"
                key={key}
                style={{ backgroundColor: "#F1F1F1", borderRadius: 50 }}
              >
                <img src={item.icon} width={"30%"} />
                <p
                  style={{ fontSize: 26, fontWeight: 600 }}
                  className="mt-3 mb-3"
                >
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Manfaat;
