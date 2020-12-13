import React from "react";

import BGFrame from "../../assets/images/bgFrame.png";
import FoudnerImage from "../../assets/images/founderImage.jpg";

import utils from "../../utils";

const Founder = () => {
  const { screenSize } = utils();
  return (
    <div
      className="row m-0 justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${BGFrame})`,
        backgroundSize: "100% 100%",
        paddingTop: screenSize < 960 ? "35%" : "15%",
        paddingBottom: screenSize < 960 ? "35%" : "15%",
      }}
    >
      <div className="col-md-4 p-0">
        <img src={FoudnerImage} width={"50%"} style={{ borderRadius: 35 }} />
      </div>
      <div className="col-md-5 pl-3 pr-3 text-center text-white">
        <h1 className="text-left">Founder</h1>
        <p className="text-left">
          Zulkifli ali adalah seorang Inisiator untuk dapat memperbaiki
          pertanian yang ada di Aceh Mulanya. Mendengar Keluhan Petani tentang
          hasil panen yang sangat buruk serta penurunan kualitas hasil
          pertanian. Pak Zulkifli mengambil inisiatif untuk bisa Menciptakan
          Pupuk Organik dengan Salah Satu Kerabat dekatnya yang Ahli di Bidang
          Pupuk Organik. Sehingga Surbio Organik Saat ini menjadi Pupuk yang
          dipercaya oleh petani Indonesia untuk dapat meningkatkan hasil
          pertanian yang lebih baik.
        </p>
      </div>
    </div>
  );
};

export default Founder;
