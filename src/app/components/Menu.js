import React from "react";
import Image from "next/image";
import classic from "../assets/classic.svg";
import family from "../assets/family.svg";

const Menu = () => {
  const data = [
    {
      image: classic,
      title: "Classic combo",
      description: "Signature Chicken Biryani, Garlic Naan, and Raita.",
      price: 135,
    },
    {
      image: family,
      title: "Family feast",
      description: "Signature Chicken Biryani, Garlic Naan, and Raita.",
      price: 135,
    },
    {
      image: classic,
      title: "Classic combo",
      description: "Signature Chicken Biryani, Garlic Naan, and Raita.",
      price: 135,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center p-0 gap-[52px] w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 mt-[65px]">
      <p className="font-['Foregen_Rough_One'] font-normal text-[32px] md:text-[48px] text-center w-full">
        double the flavor, double the fun!
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[45px] place-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[400px] w-full"
          >
            <div className="w-full aspect-square mb-4">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-[8px] w-full">
              <div className="flex items-center justify-between w-full gap-2">
                <span className="font-['Foregen_Rough_One'] font-normal text-[20px] md:text-[24px] whitespace-nowrap">
                  {item.title}
                </span>
                <span className="w-full h-[2px] bg-black min-w-[20px]"></span>
                <span className="font-['Foregen_Rough_One'] font-normal text-[20px] md:text-[24px] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <span className="font-['Sensation-Regular'] font-medium text-[16px] leading-[1.5] text-black">
                {item.description}&nbsp;&nbsp;
                <span className="font-['Sensation-Regular'] text-[12px] text-[#B60204] cursor-pointer hover:underline">
                  Read More
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
