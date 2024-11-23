// Values.js
import React from "react";
import Image from "next/image";
import value1 from "../assets/value1.svg";
import value2 from "../assets/value2.svg";
import value3 from "../assets/value3.svg";
import value4 from "../assets/value4.svg";

const Values = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-[120px] mt-[78.5px] mb-[78.5px]">
      <div className="flex flex-col items-center text-center">
        <span className="flex justify-center items-center w-[72px] h-[72px] rounded-full bg-white border-[2.5px] border-[#B60204] mb-[31px]">
          <Image src={value1} alt="value1" width={30} height={30} />
        </span>
        <span className="text-[18px] font-medium text-[#333333]">
          High Quality
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="flex justify-center items-center w-[72px] h-[72px] rounded-full bg-white border-[2.5px] border-[#B60204] mb-[31px]">
          <Image src={value2} alt="value2" width={30} height={30} />
        </span>
        <span className="text-[18px] font-medium text-[#333333]">
          Swift Delivery
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="flex justify-center items-center w-[72px] h-[72px] rounded-full bg-white border-[2.5px] border-[#B60204] mb-[31px]">
          <Image src={value3} alt="value3" width={30} height={30} />
        </span>
        <span className="text-[18px] font-medium text-[#333333]">
          Organic Value
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="flex justify-center items-center w-[72px] h-[72px] rounded-full bg-white border-[2.5px] border-[#B60204] mb-[31px]">
          <Image src={value4} alt="value4" width={30} height={30} />
        </span>
        <span className="text-[18px] font-medium text-[#333333]">
          Farm Based
        </span>
      </div>
    </div>
  );
};

export default Values;
