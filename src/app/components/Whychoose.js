import React from "react";
import whyicon1 from "../assets/whyicon1.svg";
import whyicon2 from "../assets/whyicon2.svg";
import Tree from "../assets/Tree.svg";
import Thumb from "../assets/Thumb.svg";
import Sustain from "../assets/Sustain.svg";
import Farm from "../assets/Farm.svg";
import verticle from "../assets/verticle.svg"; // Add vertical line image
import hori from "../assets/hori.svg"; // Add horizontal line image
import "./Whychoose.css";
import Image from "next/image";

const Whychoose = () => {
  return (
    <div className="main-container-why">
      <div className="heading-why">
        <span className="main-heading-why">
          Why choose <span className="hut-cap">Hut</span>?
        </span>
      </div>
      <div className="whyimg1">
        <Image src={whyicon1} alt="icon1" />
      </div>
      <div className="whyimg2">
        <Image src={whyicon2} alt="icon2" />
      </div>
      <div className="values-hut">
        <div className="value-hut">
          <Image src={Thumb} alt="" />
          <span className="main-cap-hut">Authentic Flavour</span>
          <span className="sub-cap-hut">
            Savor the distinct, bold taste of desi chicken, a heritage breed
            cherished for its superior flavor and firmer texture.
          </span>
        </div>

        {/* Add Vertical Line Image */}
        <div className="line-image-ver">
          <Image src={verticle} alt="vertical line icon" />
        </div>

        <div className="value-hut">
          <Image src={Tree} alt="" />
          <span className="main-cap-hut">Rooted In Tradition</span>
          <span className="sub-cap-hut">
            We raise our chickens naturally: free-range, hormone-free, and
            antibiotic-free. With eco-friendly packaging and sustainable
            farming.
          </span>
        </div>

        {/* Add Horizontal Line Image */}
        <div className="line-image-hori">
          <Image src={hori} alt="horizontal line icon" />
        </div>

        <div className="value-hut">
          <Image src={Sustain} alt="" />
          <span className="main-cap-hut">Sustainable Practices</span>
          <span className="sub-cap-hut">
            Every chicken is delivered fresh and full of flavor. No gimmicks, no
            secrets—just honest food you can trust.
          </span>
        </div>

        <div className="value-hut">
          <Image src={Farm} alt="" />
          <span className="main-cap-hut">Farm to Table</span>
          <span className="sub-cap-hut">
            Savor the distinct, bold taste of desi chicken, a heritage breed
            cherished for its superior flavor and firmer texture.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
