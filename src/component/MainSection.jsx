import React from "react";
import Typed from "react-typed";
const MainSection = () => {
  return (
    <div>
      <div className="bg-[url('/image/bg4.jpg')] bg-no-repeat bg-cover flex font-sans h-[530px] items-center md:h-[690px] w-full">
        <div className="w-full md:flex font-semibold md:flex-col md:justify-center md:items-center text-black  md:w-2/5  md:ml-[10%] md:font-semibold  ">
          <div className="flex flex-col items-center">
            <div className="flex items-center flex-col  md:flex md:flex-col md:items-start w-[280px]">
              <h1 className="text-5xl font-extrabold md:text-5xl lg:6xl">
                UNLOCK
              </h1>
              <h1 className="text-5xl font-extrabold md:text-5xl lg:6xl">
                CREATIVE
              </h1>
              <h1 className="text-5xl font-extrabold md:text-5xl lg:6xl">
                POTENTIAL
              </h1>
            </div>
            <div className="flex flex-col items-center md:items-start  md:flex md:flex-col justify-center w-[270px] md:w-[95%] text-2xl">
              <h1>Became A Professional</h1>

              <Typed
                className="md:w-[250px]"
                strings={["App Developer", "Web Developer", "Graphic Designer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >
                <input
                  className="text-center md:text-left bg-transparent text-white"
                  type="text"
                />
              </Typed>
            </div>
            <div className="w-[290px] flex justify-center ml-1 md:flex md:justify-start">
              <button className=" text-white border-[1px] border-black bg-black w-[200px] md:w-[250px] rounded-md font- my-3 px- py-2 hover:border hover:bg-transparent hover:text-[#4d7c0f] hover:border-white hover:bg-white duration-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="hidden  md:block mx-1">
          <img className="w-[80%]" src="/image/img1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
