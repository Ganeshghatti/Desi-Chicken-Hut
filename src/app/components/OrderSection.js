import React from "react";
import Image from "next/image";
import eggs from "../assets/eggs.png";
import chicken from "../assets/chicken.png";
import petmeat from "../assets/petmeat.png";

const OrderSection = () => {
  const data = [
    {
      image: eggs,
      title: "Eggs",
      description:
        "A carousel or grid of images showing the food-making process, fresh ingredients, or happy customers.",
    },
    {
      image: chicken,
      title: "Chicken",
      description:
        "A carousel or grid of images showing the food-making process, fresh ingredients, or happy customers.",
    },
    {
      image: petmeat,
      title: "Pet Meat",
      description:
        "A carousel or grid of images showing the food-making process, fresh ingredients, or happy customers.",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center mt-[78px] px-[6%]">
      <div className="mb-[40px]">
        <span
          className=" text-[48px] font-normal text-center text-[#333]"
          style={{
            fontFamily: "'Foregen Rough One',sans-serif",
          }}
        >
          Order Now
        </span>
      </div>
      <div className="flex justify-center items-start gap-[20px] flex-wrap w-full">
        {/* <div className="flex gap-[20px] flex-wrap justify-center"> */}
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-[20px] w-[432px] h-[520px] text-center mb-[30px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-[auto] h-[280px] object-cover rounded-[10px]"
            />
            <div className="mt-[46px]">
              <div className=" text-[28px] font-bold leading-[113.03%] tracking-[-0.02em] text-[#1E1E1E] text-start">
                {item.title}
              </div>
              <div className="text-[16px] leading-[113.03%] tracking-[-0.02em] text-[#1E1E1E] mt-[20px] text-start">
                {item.description}
              </div>
              <button className="relative float-left  font-normal border-[#D30000] border-[3px] text-[#D30000] w-[144px] h-[38px] mt-[22.59px] text-[14px] bg-white rounded-[100px] leading-[19px] tracking-[-3%] cursor-pointer">
                Order Now
              </button>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default OrderSection;
