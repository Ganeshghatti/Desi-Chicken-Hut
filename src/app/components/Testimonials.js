"use client";
import React, { useState } from "react";
import Image from "next/image";
import testicon1 from "../assets/testicon1.svg";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import chick1 from "../assets/chick1.svg";
import chick2 from "../assets/chick2.svg";
import chick3 from "../assets/chick3.svg";

const Testimonials = () => {
  // Demo reviews data with line breaks
  const reviews = [
    {
      id: 1,
      text: "The taste and texture of the chicken breed was amazing.\nThis made me fall in love with their products.",
      author: "Riya Sharma",
    },
    {
      id: 2,
      text: "Best quality chicken I've ever had in my entire life!\nThe meat was tender and perfectly seasoned.",
      author: "John Davis",
    },
    {
      id: 3,
      text: "Their farm-fresh eggs are simply incredible.\nYou can really taste the difference in quality.",
      author: "Sarah Wilson",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative flex justify-center m-0 p-0 h-[650px] top-[150px] bg-[#B12415]">
      <div className="absolute pt-2 bg-transparent pl-[700px] hidden md:block">
        <Image src={testicon1} alt="" className="bg-transparent" />
      </div>

      <span className="pt-[35px] relative font-['Foregen_Rough_One'] text-[32px] md:text-[48px] font-normal text-center m-0 text-white bg-transparent">
        Testimonials
      </span>

      <div className="text-center m-0 absolute bg-transparent top-[125.40px] w-full md:w-[1200px] px-4 md:px-8 lg:px-16">
        <button
          onClick={prevReview}
          className="absolute top-[125.40px] left-4 md:left-[200px] -translate-y-1/2 bg-transparent hover:opacity-70 transition-opacity"
        >
          <Image
            src={leftarrow}
            alt="Previous"
            className="bg-transparent w-[24px] h-[24px] md:w-auto md:h-auto"
          />
        </button>

        <div className="w-[280px] md:w-[500px] mx-auto transition-opacity duration-300 ease-in-out">
          <p className="relative top-[70px] block whitespace-pre-wrap font-normal text-[#FFCD45] text-[14px] md:text-[18px] leading-[1.3] tracking-[-2%] bg-transparent">
            "
            {reviews[currentReview].text.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
            "
          </p>

          <span className="mt-[32px] relative top-[100px] font-normal text-[14px] md:text-[16px] text-white bg-transparent">
            - {reviews[currentReview].author}
          </span>
        </div>

        <button
          onClick={nextReview}
          className="absolute top-[125.40px] right-4 md:right-[200px] -translate-y-1/2 bg-transparent hover:opacity-70 transition-opacity"
        >
          <Image
            src={rightarrow}
            alt="Next"
            className="bg-transparent  w-[24px] h-[24px] md:w-auto md:h-auto"
          />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-around bg-transparent p-0 m-0">
        <div className="flex items-end justify-center bg-transparent h-[150px] md:h-[200px]">
          <Image
            src={chick1}
            alt=""
            className="w-full h-auto block bg-transparent scale-[0.6] md:scale-100"
          />
        </div>
        <div className="flex items-end justify-center bg-transparent h-[150px] md:h-[200px]">
          <Image
            src={chick2}
            alt=""
            className="w-full h-auto block bg-transparent scale-[0.6] md:scale-100"
          />
        </div>
        <div className="flex items-end justify-center bg-transparent h-[150px] md:h-[200px]">
          <Image
            src={chick3}
            alt=""
            className="w-full h-auto block bg-transparent scale-[0.6] md:scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
