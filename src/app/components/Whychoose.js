import React from "react";
import whyicon1 from "../assets/whyicon1.svg";
import whyicon2 from "../assets/whyicon2.svg";
import Tree from "../assets/Tree.svg";
import Thumb from "../assets/Thumb.svg";
import Sustain from "../assets/Sustain.svg";
import Farm from "../assets/Farm.svg";
import verticle from "../assets/verticle.svg";
import hori from "../assets/hori.svg";
import Image from "next/image";

const Whychoose = () => {
  const data = [
    {
      id: 1,
      image: Thumb,
      title: "Authentic Flavour",
      description:
        "Savor the distinct, bold taste of desi chicken, a heritage breed cherished for its superior flavor and firmer texture.",
    },
    {
      id: 2,
      image: Tree,
      title: "Rooted In Tradition",
      description:
        "We raise our chickens naturally: free-range, hormone-free, and antibiotic-free. With eco-friendly packaging and sustainable farming.",
    },
    {
      id: 3,
      image: Sustain,
      title: "Sustainable Practices",
      description:
        "Every chicken is delivered fresh and full of flavor. No gimmicks, no secrets—just honest food you can trust.",
    },
    {
      id: 4,
      image: Farm,
      title: "Farm to Table",
      description:
        "Savor the distinct, bold taste of desi chicken, a heritage breed cherished for its superior flavor and firmer texture.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-start relative h-auto md:h-[675px] mt-[78px] p-0 mx-[6%] md:mx-[18%]">
      <div className="mb-0 relative">
        <span className="font-['Foregen_Rough_One'] text-[32px] md:text-[48px] font-normal text-center text-[#1E1E1E]">
          Why choose <span className="text-[#D30000]">Hut</span>?
        </span>
      </div>

      <div className="absolute -left-[27.8%] pt-[43px] top-[43px] h-auto z-0 hidden md:block">
        <Image src={whyicon1} alt="icon1" />
      </div>

      <div className="absolute -right-[27.8%] pt-[80.45px] top-[80.45px] h-auto z-0 hidden md:block">
        <Image src={whyicon2} alt="icon2" />
      </div>

      <div className="pt-[50px] md:pt-[110px] bg-transparent md:absolute relative left-0 md:left-1/2 top-0 md:top-2/4 md:-translate-x-1/2 md:-translate-y-1/2 grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[100px] justify-items-center z-[1] w-full md:h-[573px]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="bg-transparent flex flex-col items-center justify-center text-center w-full md:w-[380px] h-auto md:h-[216.58px] p-[20px] box-border relative"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="bg-transparent w-[60px] h-[60px] object-contain mb-[10px]"
            />
            <span className="font-['Foregen_Rough_One'] font-normal text-[18px] md:text-[21px] pt-[20px] md:pt-[36.5px]">
              {item.title}
            </span>
            <span className="pt-[15px] md:pt-[22px] text-[14px] md:text-[16px] leading-[26px] bg-transparent text-[#1E1E1E] my-[5px]">
              {item.description}
            </span>
          </div>
        ))}

        {/* Vertical and Horizontal Lines - Only visible on desktop */}
        <div className="absolute flex justify-center my-[84px] hidden md:flex">
          <Image src={verticle} alt="vertical line icon" />
        </div>
        <div className="absolute flex justify-center my-[370.5px] hidden md:flex">
          <Image src={hori} alt="horizontal line icon" />
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
