// Header.js
import React from "react";
import Image from "next/image";
import Sign from "../assets/logo.svg";
import "./Header.css";
import Hero from "../assets/HeroBg copy.png";
import value1 from "../assets/value1.svg";
import value2 from "../assets/value2.svg";
import value3 from "../assets/value3.svg";
import value4 from "../assets/value4.svg";

const Header = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Image src={Sign} alt="Logo" width={70} height={70} />
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#" />
              Home
            </li>
            <li>
              <a href="#" />
              Products
            </li>
            <li>
              <a href="#" />
              About
            </li>
            <li>
              <a href="#" />
              Locations
            </li>
          </ul>
        </nav>
        <button className="visitButton">Visit</button>
      </div>
      {/* navend */}
      <div className="hero">
        <div className="hero-img">
          {/* <Image src={Hero} alt='Hero-section' /> */}
        </div>
        <div className="hero-text">
          <span className="heading1">
            DISCOVER A <span className="next">NEXT</span> LEVEL OF TASTE
          </span>
          <br />
          <br />
          <span className="heading2">
            The Heart of Authentic, Flavorful, and Ethical Poultry
          </span>
        </div>
        <div className="exploreview">
          <button>EXPLORE MENU</button>
        </div>
      </div>
      {/* heroends */}

      <div className="values">
        <div className="value">
          <span className="ellipse">
            <Image src={value1} alt="value1" />
          </span>
          <span>High Quality</span>
        </div>
        <div className="value">
          <span className="ellipse">
            <Image src={value2} alt="value2" />
          </span>
          <span>Swift Delivery</span>
        </div>
        <div className="value">
          <span className="ellipse">
            <Image src={value3} alt="value3" />
          </span>
          <span>Organic Value</span>
        </div>
        <div className="value">
          <span className="ellipse">
            <Image src={value4} alt="value4" />
          </span>
          <span>Farm Based</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
