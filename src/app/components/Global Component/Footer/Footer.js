import React from "react";
import footerimg from "../../../assets/HomePage/footerimg.svg";
import Image from "next/image";
import logo from "../../../assets/HomePage/logo.svg";
import location from "../../../assets/HomePage/location.svg";
import operation from "../../../assets/HomePage/operation.svg";
import phone from "../../../assets/HomePage/phone.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="left-content">
        <Image src={logo} alt="" />
        <p className="footer-caption">
          Get your dream order fresh, steaming hot, and packed
          <br /> with bold flavors—crafted just for you at DC
          <br />
          Hut, your go-to non-veg paradise.
          <br />
          <br />
          Dive into a world of irresistible dishes and authentic
          <br /> tastes today!
        </p>
      </div>
      <div className="right-content">
        <div className="address">
          <p className="address-cap">Address</p>
          <div className="address-content">
            <Image src={location} alt="" />
            <p className="address-data">1234 Location, City, State</p>
          </div>
        </div>

        <div className="phone">
          <p className="phone-cap">Phone</p>
          <div className="phone-content">
            <Image src={phone} alt="" />
            <p className="phone-data">
              Contact sales officer
              <br />
              +91 1234567890
            </p>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={phone} alt="" />
            <p className="phone-data">
              Contact sales officer
              <br />
              +91 1234567890
            </p>
          </div>
        </div>

        <div className="operation">
          <p className="operation-cap">Hours of operation</p>
          <div className="operation-content">
            <Image src={operation} alt="" />
            <p className="operation-data">
              Weekdays
              <br />8 AM until 8 PM
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src={operation} alt="" />
            <p className="operation-data">
              Weekdays
              <br />8 AM until 8 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
