import { useEffect, useState } from "react";

const Utils = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    screenSizeHandleChange();
  }, []);

  const screenSizeHandleChange = () => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  };

  return { screenSize };
};

export default Utils;
