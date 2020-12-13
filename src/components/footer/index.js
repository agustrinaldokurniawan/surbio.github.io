import React from "react";
import { Link } from "react-router-dom";

import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  const ecommerceList = [
    {
      name: "Tokopedia",
      url: "#",
    },
    {
      name: "Bukalapak",
      url: "#",
    },
    {
      name: "Shopee",
      url: "#",
    },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "#",
    },
  ];
  return (
    <div
      className="row m-0 text-white text-center justify-content-center pt-5 pr-5 pl-5"
      style={{
        backgroundColor: "#2E7D32",
      }}
    >
      <div className="col-lg-3"></div>
      <div className="col-lg-3 mt-5" style={{ borderLeft: "5px solid white" }}>
        <h3>Diproduksi Oleh</h3>
        <br />
        <h5>PT. ORGANIK ACEH INDONESIA</h5>
        <br />
        <p>
          Jalan Meulaboh - Tapaktuan Desa Padang Sikabu
          <br />
          Kec. Kuala Batee, Kab. Aceh Barat Daya
          <br />
          Contact Person: 0813 6212 1234
          <br />
          email: ptorganikacehindonesia@gmail.com
        </p>
      </div>
      <div className="col-lg-3 mt-5" id="shop">
        <h3>Official Store</h3>
        {ecommerceList.map((item, key) => {
          return (
            <div key={key}>
              <Link to={item.url} className="text-white">
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="col-lg-3 mt-5">
        <h3>Follow Us</h3>
        <div className="row m-0 justify-content-around">
          {socialMedia.map((item, key) => {
            return (
              <div
                className={
                  key % 2 === 0 ? "col-6 text-right" : "col-6 text-left"
                }
                key={key}
              >
                <Link to={item.url}>
                  <img src={item.icon} alt={item.name} width={"30%"} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12 mt-3 text-left mt-5">
        <p>
          <b>© PT Organik Aceh Indonesia 2020. All rights reserved.</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
