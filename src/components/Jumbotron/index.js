import React from "react";

import JumbotronImage1 from "../../assets/images/jumbotron.png";
import ProductImage from "../../assets/images/product.png";

import utils from "../../utils";

import { Button } from "@material-ui/core";

const Jumbotron = () => {
  const { screenSize } = utils();

  return (
    <div
      className="row m-0 justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${JumbotronImage1})`,
        backgroundSize: "100% 100%",
        paddingTop: screenSize < 960 ? "30%" : "15%",
        paddingBottom: screenSize < 960 ? "30%" : "15%",
      }}
    >
      <div className="col-3 p-0">
        <img src={ProductImage} width={screenSize > 960 ? "50%" : "100%"} />
      </div>
      <div className="col-md-6 pl-3 pr-3 text-center text-white">
        <h1 className="text-left">Surbio Organik</h1>
        <p className="text-left">
          Pupuk Surbio Organik adalah terobosan untuk pertanian indonesia. Pupuk
          dengan bahan dasar organik dan bio teknologi telah teruji dapat
          meningkatkan kualitas serta produktifitas hasil pertanian dan
          perkebunan yang lebih sehat.
        </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#60D66A", color: "white" }}
        >
          Beli Sekarang
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
