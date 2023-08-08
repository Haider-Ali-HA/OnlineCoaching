import { faScaleUnbalancedFlip } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div
        className={
          color
            ? "fixed z-10 bg-black text-white flex justify-between items-center h-[70px] w-full duration-500"
            : "fixed z-10 bg-transparent text-white flex justify-between items-center h-[70px] w-full "
        }
      >
        <div className=" flex justify-center items-center ml-[5%] md:ml-[2%]   h-[70px] w-[100px]">
          <img className="w-[60px]" src="/image/logo.png" alt="" />
        </div>
        <div>
          <ul className="hidden md:flex md:mr-20">
            <li className="text-white px-3 group transition-all duration-300 ease-in-out">
              <Link
                to="/"
                className="bg-left-bottom bg-gradient-to-r from-[#3f9202] to-[#3f9202] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Home
              </Link>
            </li>
            <li className="px-3 group transition-all duration-300 ease-in-out">
              <Link className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About
              </Link>
            </li>
            <li className="px-3 group transition-all duration-300 ease-in-out">
              <Link className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Service
              </Link>
            </li>
            <li className="px-3 group transition-all duration-300 ease-in-out">
              <Link className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          onClick={handleClick}
          className=" block md:hidden mr-10 hover:cursor-pointer "
        >
          {!click ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        {/* // Mobile Device NAV */}
        <div
          className={
            click
              ? " block md:hidden fixed top-0 left-0 w-[45%] border-r border-r-white h-full bg-[url('/image/bg4.jpg')] bg-no-repeat bg-cover transition-all duration-500 ease-in-out"
              : "fixed left-[-100%]"
          }
        >
          <div className="mt-5 flex items-center ml-[10%]  h-[70px] w-[100px]">
            <img className="w-[70px]" src="/image/logo.png" alt="" />
          </div>
          <ul className="pt-9 ml-9 uppercase text-white">
            <li className="p-1 w-[80%] border-b border-b-white hover:cursor-pointer hover:text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1 w-[80%] border-b border-b-white hover:cursor-pointer hover:text-black">
              <Link>About</Link>
            </li>
            <li className="p-1 w-[80%] border-b border-b-white hover:cursor-pointer hover:text-black">
              <Link>Services</Link>
            </li>
            <li className="p-1 w-[80%] hover:cursor-pointer hover:text-black">
              <Link>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
