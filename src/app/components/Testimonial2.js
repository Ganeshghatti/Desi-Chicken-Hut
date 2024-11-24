import React from "react";
import Image from "next/image";
import testbg from "../assets/test-hero.png";
import white from "../assets/whitespherebig.svg";
import yellowsmall from "../assets/yellowspheresmall.svg";
import whitesmall from "../assets/whitespheresmall.svg";
import yellow from "../assets/yellowspherebig.svg";

const Testimonial2 = () => {
  return (
    <div className="relative mt-[250.19px] w-full min-h-[400px] md:min-h-[400px] flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={testbg}
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 md:px-0">
        {/* Text and Button */}
        <div className="flex flex-col items-center mt-[61.5px]">
          <span
            className="text-white text-[2rem] md:text-[3rem] text-center"
            style={{ fontFamily: "'Foregen Rough One', sans-serif" }}
          >
            Loved by thousands <br />
            of meat lovers
          </span>
          <button className="mt-[30px] md:mt-[50px] font-['Sensation-Regular'] cursor-pointer border-[3px] border-[#FFCD45] font-normal text-[#D30000] w-[144px] h-[38px] text-[14px] bg-white rounded-[100px] leading-[19px] tracking-[-3%]">
            Shop Now
          </button>
        </div>
      </div>

      {/* Spheres with increased z-index - Only visible on lg screens and above */}
      <div className="absolute w-full h-full top-1/2 -left-[13%] z-20 hidden lg:block">
        {/* Large white sphere */}
        <div className="absolute -top-[8pc] right-[200.57px]">
          <Image src={white} alt="white sphere" />
        </div>

        {/* Small white sphere */}
        <div className="absolute -top-[2pc] right-[955.57px]">
          <Image src={whitesmall} alt="small white sphere" />
        </div>

        {/* Yellow sphere */}
        <div className="absolute -top-[0.3pc] right-[855.57px]">
          <Image src={yellow} alt="yellow sphere" />
        </div>

        {/* Small yellow sphere */}
        <div className="absolute -top-[2pc] right-[155.57px]">
          <Image src={yellowsmall} alt="small yellow sphere" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
