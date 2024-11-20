import React from "react";
import Image from "next/image";
import testicon1 from "../assets/testicon1.svg";
import "./Testimonials.css";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import chick1 from "../assets/chick1.svg";
import chick2 from "../assets/chick2.svg";
import chick3 from "../assets/chick3.svg";

const Testimonials = () => {
  return (
    <div className="main-container-testimonials">
      <div className="testicon1">
        <Image src={testicon1} alt="" />
      </div>

      <span className="test-title">Testimonials</span>
      <div className="test-captions">
        <div className="leftarrow">
          <Image src={leftarrow} alt="" />
        </div>
        <p className="test-main-cap">
          “The taste and texture of the chicken breed was
          <br /> amazing. This made me fall in love".
        </p>
        <span className="author">- Riya Sharma</span>
        <div className="rightarrow">
          <Image src={rightarrow} alt="" />
        </div>
      </div>
      <div className="chickens">
        <div className="chick">
          <Image src={chick1} alt="" />
        </div>
        <div className="chick">
          <Image src={chick2} alt="" />
        </div>
        <div className="chick">
          <Image src={chick3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
