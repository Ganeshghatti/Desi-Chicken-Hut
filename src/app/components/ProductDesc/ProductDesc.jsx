"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProductImage from "../../assets/ProductDesc/Productimg.png";
import "./ProductDesc.css";
import cartIcon from "../../assets/ProductDesc/cart.svg";
import favIcon from "../../assets/ProductDesc/fav.svg";
import favRed from "../../assets/ProductDesc/favred.svg";

const ProductDesc = () => {
  const [selectedSize, setSelectedSize] = useState(0);

  const data = {
    category: "DAIRY & EGGS",
    discount: "10% OFF",
    image: ProductImage,
    title: "Farm-Fresh Eggs:\nPerfect Protein",
    description:
      "Experience the taste of premium-quality, farm-fresh eggs. Rich in flavor, packed with protein, and versatile for any meal, our eggs are perfect for cooking, baking, or enjoying on their own.",
    specs: [
      "Energy value per 100g: 381 kcal",
      "Net weight: 200g",
      "Expiration date: 48 days",
    ],
    size: {
      text: "Size, kg",
      options: [2.0, 1.2, 0.4, 0.19],
    },
    prices: {
      2.0: "$3.10",
      1.2: "$1.86",
      0.4: "$0.62",
      0.19: "$0.29",
    },
  };

  return (
    <section
      className="w-full flex justify-center items-center py-[100px] min-h-[calc(100vh-200px)] px-[15px] lg:px-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(155, 202, 228, 0.05) 0%, rgba(238, 143, 52, 0.05) 53%, rgba(245, 138, 37, 0.05) 100%, rgba(165, 156, 148, 0.05) 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row w-full lg:w-fit bg-white rounded-[12px]">
        <div className="w-[calc(100%+30px)] -ml-[15px] lg:ml-0 lg:w-[620px] h-[300px] lg:h-[598px] overflow-hidden lg:rounded-[12px]">
          <Image
            src={data.image}
            alt="product"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-[536px] p-6 lg:p-[40px] flex flex-col justify-center bg-white lg:rounded-r-[12px]">
          <div className="flex gap-[10px] mb-[25px]">
            {[data.category, data.discount].map((badge, idx) => (
              <span
                key={idx}
                className="px-[16px] py-[8px] rounded-[20px] bg-[#D30000] text-white text-[12px]"
              >
                {badge}
              </span>
            ))}
          </div>

          <h2 className="text-2xl lg:text-[40px] font-normal mb-[25px] whitespace-pre-line leading-[1.2]">
            {data.title}
          </h2>

          <p className="text-sm lg:text-[14px] font-light text-[#666666] mb-[25px] leading-[1.5]">
            {data.description}
          </p>

          <div className="mb-[25px] text-sm lg:text-[13px] font-bold text-[#666666]">
            {data.specs.map((spec, idx) => (
              <p
                key={idx}
                className={idx !== data.specs.length - 1 ? "mb-[10px]" : ""}
              >
                {spec}
              </p>
            ))}
          </div>

          <div className="mb-[25px]">
            <p className="text-[13px] text-[#777E90]">{data.size.text}</p>
            <div className="flex gap-[10px]">
              {data.size.options.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(idx)}
                  className={`w-[41px] h-[23px] rounded-[12px] text-[13px] flex items-center justify-center
                    ${
                      idx === selectedSize
                        ? "bg-[#777E90] text-white"
                        : "bg-[#F6F3F1] text-[#777E90]"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="w-[80px]">
              <span className="text-xl lg:text-[24px] font-bold">
                {data.prices[data.size.options[selectedSize]]}
              </span>
            </div>
            <button
              className="px-[20px] py-[10px] border-[3px] border-[#D30000] text-[#D30000] rounded-[25px] flex items-center gap-[8px] 
              hover:bg-[#D30000] hover:text-white transition-colors duration-300 group"
            >
              Add to cart
              <Image
                src={cartIcon}
                alt="cart"
                className="w-[20px] h-[20px] group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            </button>
            <button
              className="w-[40px] h-[40px] rounded-full bg-[#D30000] flex items-center justify-center 
              hover:bg-white hover:border-[3px] hover:border-[#D30000] transition-all duration-300 group"
            >
              <Image
                src={favRed}
                alt="favorite"
                className="w-[20px] h-[20px] brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
