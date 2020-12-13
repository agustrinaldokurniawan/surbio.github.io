import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const BigNav = () => {
  return (
    <div className="col-6 text-right p-0">
      <a href="/#produk" className="text-white mr-lg-5">
        Produk
      </a>
      <a href="/#tentang-kami" className="text-white mr-lg-5">
        Tentang Kami
      </a>
      <a href="/#hubungi-kami" className="text-white mr-lg-5">
        Hubungi Kami
      </a>
      <a href="/#shop" className="text-white ">
        <Button
          className="btn pl-4 pr-4"
          style={{
            backgroundColor: "#2E7D32",
            color: "white",
            borderRadius: 50,
          }}
        >
          Beli Sekarang
        </Button>
      </a>
    </div>
  );
};

export default BigNav;
