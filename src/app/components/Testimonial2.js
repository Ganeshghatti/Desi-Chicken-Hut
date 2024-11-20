import React from "react";
import Image from "next/image";
import testbg from "../assets/test-hero.png";
import "./Testimonial2.css";
import white from "../assets/whitespherebig.svg";
import yellowsmall from "../assets/yellowspheresmall.svg";
import whitesmall from "../assets/whitespheresmall.svg";
import yellow from "../assets/yellowspherebig.svg";

const Testimonial2 = () => {
  return (
    <div className="test2">
      <Image src={testbg} alt="" />
      <div className="caption">
        <span className="test-cao">
          Loved by thousands <br />
          of meat lovers
        </span>
        <button className="shop">Shop Now</button>
      </div>
      <div className="sphere_1">
        <Image src={white} alt="" />
      </div>
      <div className="sphere_2">
        <Image src={whitesmall} alt="" />
      </div>
      <div className="sphere_3">
        <Image src={yellow} alt="" />
      </div>
      <div className="sphere_4">
        <Image src={yellowsmall} alt="" />
      </div>
    </div>
  );
};

export default Testimonial2;
