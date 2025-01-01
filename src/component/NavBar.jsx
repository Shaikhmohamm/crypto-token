import React from "react";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/logo.jpeg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-transparent absolute w-full z-50">
      {/* Logo */}
      <div className="flex items-center justify-center md:ml-0">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      {/* Centered Links */}
      <div className="hidden md:flex space-x-8 text-white font-medium mx-auto">
        <a href="#home" className="hover:text-blue-400 transition cursor-pointer">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400 transition cursor-pointer">
          About
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 text-white text-2xl">
        <a
          href="https://x.com/Big_BullBB"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://telegram.org"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
