import React from "react";
import "./Menu.css";
import Image from "next/image";
import classic from "../assets/classic.svg";
import family from "../assets/family.svg";

const Menu = () => {
  return (
    <div className="main-menu-container">
      <p className="menu-caps">double the flavor, double the fun!</p>
      <div className="menu-cards">
        <div className="menu-card">
          <Image src={classic} alt="" />
          <div className="menu-captions">
            <span className="menu-cap">
              <span className="cap">Classic combo</span>
              <span className="hr-line"></span>
              <span className="rate">135</span>
            </span>
            <p className="menu-subcap">
              Signature Chicken Biryani, Garlic Naan, and Raita.&nbsp;&nbsp;
              <span className="readmore">Read More</span>
            </p>
          </div>
        </div>
        <div className="menu-card">
          <Image src={family} alt="" />
          <div className="menu-captions">
            <span className="menu-cap">
              <span className="cap">Family feast</span>
              <span className="hr-line"></span>
              <span className="rate">135</span>
            </span>
            <span className="menu-subcap">
              Signature Chicken Biryani, Garlic Naan, and Raita.&nbsp;&nbsp;
              <span className="readmore">Read More</span>
            </span>
          </div>
        </div>
        <div className="menu-card">
          <Image src={classic} alt="" />
          <div className="menu-captions">
            <span className="menu-cap">
              <span className="cap">Classic combo</span>
              <span className="hr-line"></span>
              <span className="rate">135</span>
            </span>
            <span className="menu-subcap">
              Signature Chicken Biryani, Garlic Naan, and Raita.&nbsp;&nbsp;
              <span className="readmore">Read More</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
