import React from "react";
import Image from "next/image"; // Import Image from Next.js
import HeroBg from "../assets/HeroBg.png"; // Correctly import the image

const Header = () => {
  return (
    <div className="main-container">
      <div className="hero relative w-full h-[620px] overflow-hidden">
        {/* Hero Background Image with Next.js Image Component */}
        <div className="hero-img absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat">
          <Image
            src={HeroBg} // The imported image
            alt="Hero section background"
            layout="fill" // Make it cover the full container
            objectFit="cover" // Make sure it covers the entire space
            objectPosition="center" // Center the image
          />
        </div>

        {/* Hero Text and Button Container */}
        <div className="hero-text-and-button absolute top-[140px] left-1/2 transform -translate-x-1/2 z-10 text-center bg-transparent px-4 sm:px-8">
          {/* Heading 1 */}
          <span
            className="text-[#1E1E1E] font-normal block mb-[28px] text-[52px] sm:text-[52px] xs:text-[32px]" // Set font size for small screens and above
            style={{
              fontFamily: "'Foregen Rough One', sans-serif",
              lineHeight: "113.03%",
              letterSpacing: "-0.02em",
              width: "100%", // Adjust width to be responsive
              height: "auto", // Allow height to adjust
              background: "transparent",
            }}
          >
            DISCOVER A{" "}
            <span className="text-[#D30000] bg-transparent">NEXT</span> LEVEL OF
            TASTE
          </span>

          {/* Heading 2 */}
          <span
            className="text-[#1E1E1E] font-normal block mb-[28px] text-[18px] sm:text-[18px] xs:text-[14px]" // Set font size for small screens and above
            style={{
              fontFamily: "'Sensation-Regular', sans-serif",
              lineHeight: "113.03%",
              letterSpacing: "-0.02em",
              width: "100%", // Make it responsive
              height: "auto", // Allow height to adjust
              background: "transparent",
            }}
          >
            The Heart of Authentic, Flavorful, and Ethical Poultry
          </span>

          {/* Explore Button */}
          <button
            className="px-[30px] py-[15px] bg-white border-[3.5px] border-[#D30000] text-[#D30000] text-[18px] sm:text-[18px] xs:text-[14px] rounded-[30px] transition-all duration-300 ease-in-out hover:bg-[#D30000] hover:text-white mt-[28px] w-full sm:w-[200px] mx-auto"
            style={{
              fontFamily: "'Foregen Rough One', sans-serif",
              height: "60px",
            }}
          >
            EXPLORE MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
