import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row md:px-[100px]">
        <div className="w-[85%] bg-gray-100 md:h-[400px] shadow-lg flex flex-col p-4 my-[90px] mx-3 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] "
            src="/image/appDeveloper.png"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">App Developer</h2>
          <p className="text-center text-3xl font-bold">Benefits</p>
          <div className="text-center text-sm md:text-1xl font-medium">
            <p className="py-2 border-b mt-2">Improves Efficiency</p>
            <p className="py-2 border-b">Secures Your App Data</p>
            <p className="py-2 border-b">Offers High Scalability</p>
          </div>
          <button className="m-auto text-black border border-[#a3e635] bg-[#a3e635] w-[200px] rounded-md font-medium my-3 px-6 py-2 hover:border hover:bg-[#84cc16] hover:text-black hover:border-[#84cc16] duration-500">
            Start Courses
          </button>
        </div>
        <div className="w-[85%] md:h-[400px] bg-[#a3e635] shadow-lg flex flex-col p-4 my-[90px] mx-5 rounded-lg scale-105 hover:scale-110 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] "
            src="/image/graphicDesigner.png"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Graphic Designer
          </h2>
          <p className="text-center text-3xl font-bold">Benefits</p>
          <div className="text-center text-sm md:text-1xl font-medium">
            <p className="py-2 border-b  mt-2">
              Attract and keep customers interested
            </p>
            <p className="py-2 border-b  "> Strengthens your brand</p>
            <p className="py-2 border-b  ">Saves time and money</p>
          </div>
          <button className="m-auto text-white  bg-black w-[200px] rounded-md font-medium my-3 px-6 py-2 hover:border hover:bg-white hover:text-black hover:border-white duration-500">
            Start Courses
          </button>
        </div>
        <div className="w-[85%] bg-gray-100 md:h-[400px] shadow-lg flex flex-col p-4 my-[90px] mx-3 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src="/image/webDeveloper.jpg"
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Web Developer</h2>
          <p className="text-center text-3xl font-bold">Benefits</p>
          <div className="text-center text-sm md:text-1xl font-medium">
            <p className="py-2 border-b  mt-2">
              Become a Better Problem Solver
            </p>
            <p className="py-2 border-b  ">Potential to Work Remotely</p>
            <p className="py-2 border-b  ">High-paying Salaries</p>
          </div>
          <button className="m-auto text-black border border-[#a3e635] bg-[#a3e635] w-[200px] rounded-md font-medium my-3 px-6 py-2 hover:border hover:bg-[#84cc16] hover:text-black hover:border-[#84cc16] duration-500">
            Start Courses
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
