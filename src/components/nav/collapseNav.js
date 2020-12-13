import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "../../assets/menu.png";
import CloseIcon from "../../assets/close.png";

import Drawer from "@material-ui/core/Drawer";
import { Button } from "@material-ui/core";

const CollapseNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowMenu(false);
  };

  return (
    <div className="col-6 text-right p-0">
      <React.Fragment key={"right"}>
        <img
          src={MenuIcon}
          alt="Bepahkupi"
          width={50}
          onClick={() => setShowMenu(!showMenu)}
          style={{ cursor: "pointer" }}
        />
        <Drawer
          anchor={"right"}
          open={showMenu}
          onClose={toggleDrawer("right", false)}
        >
          <div className="row m-0 h-100 align-items-center text-center">
            <div className="col-12 text-right">
              <img
                src={CloseIcon}
                alt="Bepahkupi"
                width={50}
                onClick={() => setShowMenu(!showMenu)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-12">
              <a href="/#produk" className="text-body">
                Produk
              </a>
            </div>
            <div className="col-12">
              <a href="/#tentang-kami" className="text-body">
                Tentang Kami
              </a>
            </div>
            <div className="col-12">
              <a href="/#hubungi-kami" className="text-body">
                Hubungi Kami
              </a>
            </div>
            <div className="col-12">
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
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CollapseNav;
