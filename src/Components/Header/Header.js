import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        className="header-img"
        alt="tomato logo"
        src="https://freesvg.org/img/1546230197.png"
      />
      <h1 className="title"> Rancid Tomatillos</h1>
    </header>
  );
};

export default Header;