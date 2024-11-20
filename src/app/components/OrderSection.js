import React from "react";
import "./OrderSection.css";
import Image from "next/image";
import eggs from "../assets/eggs.png";
import chicken from "../assets/chicken.png";
import petmeat from "../assets/petmeat.png";

const OrderSection = () => {
  return (
    <div className="main-container-order">
      <div className="heading">
        <span className="main-heading">Order Now</span>
      </div>
      <div className="cardset">
        <div className="cards">
          <div className="card">
            <Image src={eggs} alt="" />
            <div className="captions">
              <div className="cap">Eggs</div>
              <div className="subcap">
                A carousel or grid of images showing the food-making process,
                fresh ingredients, or happy customers.
              </div>
              <button className="orderbtn">Order Now</button>
            </div>
          </div>
          <div className="card">
            <Image src={chicken} alt="" />
            <div className="captions">
              <div className="cap">Chicken</div>
              <div className="subcap">
                A carousel or grid of images showing the food-making process,
                fresh ingredients, or happy customers.
              </div>
              <button className="orderbtn">Order Now</button>
            </div>
          </div>
          <div className="card">
            <Image src={petmeat} alt="" />
            <div className="captions">
              <div className="cap">Pet Meat</div>
              <div className="subcap">
                A carousel or grid of images showing the food-making process,
                fresh ingredients, or happy customers.
              </div>
              <button className="orderbtn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
