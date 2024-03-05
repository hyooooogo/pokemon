import React from "react";
import "./Header.css";
import pic1 from './png1.png'
import pic2 from './png2.png'


const Header = () => {
  return (
    <>
      <header>
        <img className="pic1" src={pic1}></img>
        <h1 className="header-title">ポケモン図鑑（全1302種）</h1>
        <img className="pic2" src={pic2}></img>
      </header>
    </>
  );
};

export default Header;
