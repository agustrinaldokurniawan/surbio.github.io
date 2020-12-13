import React from "react";

import Jumbotron from "../../components/Jumbotron";
import Manfaat from "../../components/manfaat";
import Founder from "../../components/founder";
import Gallery from "../../components/gallery";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

const Home = () => {
  return (
    <div className="row m-0">
      <Nav />
      <div className="col-12 p-0">
        <Jumbotron />
      </div>
      <div className="col-12 p-0">
        <Manfaat />
      </div>
      <div className="col-12 p-0" id="tentang-kami">
        <Founder />
      </div>
      <div className="col-12 p-0 mb-5">
        <Gallery />
      </div>
      <div className="col-12 p-0 mt-5" id="hubungi-kami">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
