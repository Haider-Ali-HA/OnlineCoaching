import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaMobile,
  FaPhone,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex md:flex-col justify-center items-center  h-[200px] md:h-[250px] bg-[url('/image/bg4.jpg')] bg-no-repeat">
        <div className="mt-[70px]  md:mt-11  flex items-center justify-center  w-[100%] h-[130px] md:w-[80%]">
          <div className=" mr-3 md:mr-[150px]  h-[90%] md:w-[196px] flex justify-center flex-col item ">
            <h1 className="mt-[-16px] text-1xl md:text-2xl font-bold">
              Connect with Us
            </h1>
            <div className="flex items-center">
              <FaPhone className="text-[13px] md:text-1xl" />
              <p className="text-[13px] ml-1 md:text-1xl">
                Support@OnlineCoaching.com
              </p>
            </div>

            <div className="flex items-center">
              <FaMobile className="text-[13px] md:text-1xl" />
              <p className="text-[13px] md:text-1xl"> Phone: +123-456-90</p>
            </div>
          </div>
          <div className=" h-[90%]  md:w-[150px] flex justify-center flex-col item ">
            <h1 className="mt-[-38px] text-1xl md:text-2xl font-bold">
              Follow Us
            </h1>
            <div className="flex">
              <FaFacebookSquare className="cursor-pointer text-[15px] md:text-2xl mr-1" />
              <FaInstagram className="cursor-pointer text-[15px] md:text-2xl mx-1" />
              <FaTwitterSquare className="cursor-pointer text-[15px] md:text-2xl mx-1" />
              <FaGithub className="cursor-pointer text-[15px] md:text-2xl mx-1" />
              <FaDribbbleSquare className="cursor-pointer text-[15px] md:text-2xl mx-1" />
            </div>
          </div>
        </div>
        <div className="text-[11px] md:text-1xl mt-11 ">
          <p className="font-bold ">
            WWW.OnlineCoaching.COM
            <span className=" ml-5 ">&#169;</span> All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
