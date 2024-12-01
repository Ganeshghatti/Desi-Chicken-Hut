"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./ProductDesc.css";
import cartIcon from "../../assets/ProductDesc/cart.svg";
import favIcon from "../../assets/ProductDesc/fav.svg";
import favRed from "../../assets/ProductDesc/favred.svg";

const ProductDesc = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const data = product?.products?.[0] || {
    name: "",
    description: "",
    price: 0,
    image: "/",
    quantity: 0,
    discount: 0,
  };

  const categories = ["Fresh", "Organic", "Farm"];
  const sizes = [2.0, 1.2, 0.4, 0.19];

  return (
    <section
      className="w-full flex justify-center items-center py-[50px] md:py-[75px] lg:py-[100px] min-h-[calc(100vh-200px)] px-[15px] lg:px-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(155, 202, 228, 0.05) 0%, rgba(238, 143, 52, 0.05) 53%, rgba(245, 138, 37, 0.05) 100%, rgba(165, 156, 148, 0.05) 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row w-full lg:w-fit bg-white rounded-[12px] max-w-[1156px]">
        <div className="w-full lg:w-[620px] h-[300px] md:h-[450px] lg:h-[598px] relative overflow-hidden lg:rounded-l-[12px]">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full lg:w-[536px] p-4 md:p-6 lg:p-[40px] flex flex-col justify-center bg-white lg:rounded-r-[12px]">
          {/* Categories */}
          <div className="flex flex-wrap gap-[10px] mb-[25px]">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-[16px] py-[8px] rounded-[20px] bg-[#F6F3F1] text-[#777E90] text-[12px] whitespace-nowrap"
              >
                {category}
              </span>
            ))}
            <span className="px-[16px] py-[8px] rounded-[20px] bg-[#D30000] text-white text-[12px] whitespace-nowrap">
              {data.discount}% OFF
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-[40px] font-normal mb-[25px] leading-[1.2]">
            {data.name}
          </h2>

          {/* Description */}
          <p className="text-sm lg:text-[14px] font-light text-[#666666] mb-[25px] leading-[1.5]">
            {data.description}
          </p>

          {/* Specs */}
          <div className="mb-[25px] text-sm lg:text-[13px] font-bold text-[#666666]">
            <p className="mb-[10px]">
              Quantity available: {data.quantity} units
            </p>
            <p className="mb-[10px]">Farm-fresh quality</p>
            <p>Premium selection</p>
          </div>

          {/* Size Selector */}
          <div className="size-block mb-[25px]">
            <p className="text-sm text-[#777E90] mb-[10px]">Size, kg</p>
            <div className="flex flex-wrap gap-[10px]">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-btn ${
                    selectedSize === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(index)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-[15px]">
            <span className="text-[20px] md:text-[24px] font-bold">
              ${data.price}
            </span>
            <button className="flex items-center gap-[10px] py-[8px] md:py-[10px] px-[15px] md:px-[20px] border-[3px] border-[#D30000] bg-[#D30000] text-white rounded-[25px] hover:bg-white hover:text-[#D30000] group transition-colors duration-300 text-sm md:text-base">
              Add to Cart
              <Image
                src={cartIcon}
                alt="cart"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
              />
            </button>
            <button
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-[3px] border-[#D30000] rounded-full hover:bg-[#D30000] group transition-colors duration-300"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Image
                src={favRed}
                alt="favorite"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6 group-hover:brightness-0 group-hover:invert"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
