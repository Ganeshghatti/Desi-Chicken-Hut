"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sign from "../assets/logo.svg"; // Path to your logo
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"; // Import Hamburger and Cancel icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu visibility

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div className="relative flex justify-between items-center py-[1px] mt-[15px] px-[6%] h-[84px]">
      {/* Logo (hidden on small screens) */}
      <Image
        src={Sign}
        alt="Logo"
        width={70}
        height={70}
        className="hidden md:block"
      />

      {/* Hamburger Menu for Mobile (visible on small screens) */}
      <button
        onClick={handleMenuToggle}
        className="md:hidden text-2xl text-black absolute left-4"
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-6">
          {/* Close Button */}
          <button
            onClick={handleMenuToggle}
            className="text-3xl text-black absolute top-4 right-4"
          >
            <GiCancel />
          </button>

          {/* Logo (appears in the mobile menu) */}
          <div className="flex justify-center mb-8">
            <Image src={Sign} alt="Logo" width={70} height={70} />
          </div>

          {/* Navbar Links */}
          <ul className="list-none flex flex-col font-[Sensation-Regular] text-[16px] text-black gap-[38px]">
            <li className="cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Products</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Locations</a>
            </li>
          </ul>
        </div>
      )}

      {/* Navbar Links for Larger Screens */}
      <nav className={`navbar ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="list-none flex font-[Sensation-Regular] text-[16px] text-black gap-[38px] md:space-x-[20px] md:flex-row flex-col md:items-center">
          <li className="cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Products</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#">Locations</a>
          </li>
        </ul>
      </nav>

      {/* Visit Button (Always on the Right side of Screen) */}
      <button className="font-[Sensation-Regular] font-normal py-[8px] px-[16px] text-white w-[99.95px] h-[40px] text-[16px] bg-[#B60204] rounded-full border-[3px] border-[#FFCD45] cursor-pointer mt-[20px] md:mt-0 hidden md:block">
        Visit
      </button>

      {/* Mobile Visit Button (Positioned on the Right in Mobile Menu) */}
      <div className="absolute bottom-6 right-6 md:hidden">
        <button className="font-[Sensation-Regular] font-normal py-[8px] px-[16px] text-white w-[99.95px] h-[40px] text-[16px] bg-[#B60204] rounded-full border-[3px] border-[#FFCD45] cursor-pointer">
          Visit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
