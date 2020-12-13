import React, { useEffect } from "react";

import utils from "../../utils";
import BigNav from "./bigNav";
import CollapseNav from "./collapseNav";
import Logo from "../../assets/logo.png";

const Nav = (props) => {
  const { screenSize } = utils();

  useEffect(() => {}, []);

  return (
    <div
      className="pl-lg-5 pl-lg-5 pl-2 pr-2 pt-3 pb-3"
      style={{
        backgroundColor: "rgba(53, 30, 16, 0.5)",
        position: "fixed",
        width: "100%",
        zIndex: 1,
      }}
    >
      <div className="ml-lg-5 mr-lg-5 row align-items-center m-0 ">
        <div className="col-6 float-left">
          <img
            src={Logo}
            alt="Bepahkupi"
            width={screenSize / 10 > 100 ? screenSize / 20 : 50}
            style={{ cursor: "pointer" }}
            onClick={() => (window.location = "/")}
          />
        </div>
        {screenSize > 1280 ? <BigNav /> : <CollapseNav />}
      </div>
    </div>
  );
};

export default Nav;
