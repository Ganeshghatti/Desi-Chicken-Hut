"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sign from "../assets/logo.svg"; // Path to your logo
import { GiHamburgerMenu, GiCancel } from "react-icons/gi"; // Import Hamburger and Cancel icons
import Link from "next/link"; // Add this import at the top

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu visibility

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className="relative flex justify-between bg-[#323232] items-center px-[5%] h-[90px]">
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
        className="md:hidden text-2xl text-white absolute left-4"
      >
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="bg-black z-30 w-screen h-screen opacity-50 fixed top-0 left-0 "
          onClick={handleMenuToggle}
        ></div>
      )}
      {menuOpen && (
        <div className="fixed top-0 w-[70vh] left-0 h-screen bg-[#323232] z-50 p-6">
          {/* Close Button */}

          {/* Logo (appears in the mobile menu) */}
          {/* <div className="flex justify-center mb-8">
            <Image src={Sign} alt="Logo" width={70} height={70} />
          </div> */}

          {/* Navbar Links */}
          <ul className="list-none flex flex-col font-[Sensation-Regular] p-0 m-0 items-center w-full h-full justify-center text-[16px] text-white gap-y-[38px]">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/locations">Locations</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Navbar Links for Larger Screens */}
      <nav className={`navbar ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="list-none flex font-[Sensation-Regular] text-[16px] text-white  gap-[38px] md:space-x-[20px] md:flex-row flex-col md:items-center">
          <li className="cursor-pointer hover:text-[#D30000]">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D30000]">
            <Link href="/products">Products</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D30000]">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-[#D30000]">
            <Link href="/locations">Locations</Link>
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
    </nav>
  );
};

export default Navbar;
