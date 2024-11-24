"use client";
// Values.js
import React, { useState } from "react";
import Image from "next/image";
import value1 from "../assets/value1.svg";
import value2 from "../assets/value2.svg";
import value3 from "../assets/value3.svg";
import value4 from "../assets/value4.svg";
import value1white from "../assets/value1white.svg";
import value2white from "../assets/value2white.svg";
import value3white from "../assets/value3white.svg";
import value4white from "../assets/value4white.svg";

const Values = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const data = [
    {
      id: 1,
      image: value1,
      imageWhite: value1white,
      title: "High Quality",
    },
    {
      id: 2,
      image: value2,
      imageWhite: value2white,
      title: "Swift Delivery",
    },
    {
      id: 3,
      image: value3,
      imageWhite: value3white,
      title: "Organic Value",
    },
    {
      id: 4,
      image: value4,
      imageWhite: value4white,
      title: "Farm Based",
    },
  ];

  return (
    <section className="flex flex-wrap justify-between gap-y-8 md:gap-y-0 px-[18%]  items-center my-[78.5px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-2/5 md:w-1/5 items-center text-center"
        >
          <span
            className="flex justify-center items-center w-[65px] md:w-[72px] h-[65px] md:h-[72px] rounded-full hover:bg-[#B60204] hover:text-white transition-all duration-300 ease-in-out bg-white border-[2.5px] border-[#B60204] mb-[31px]"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              src={hoveredId === item.id ? item.imageWhite : item.image}
              alt={item.title}
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </span>
          <p className="text-[18px] font-medium text-[#333333]">{item.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Values;
