import React from "react";

const Analytics = () => {
  return (
    <>
      <div className="flex flex-col  h-[650px] md:h-[500px] md:flex md:flex-row md:justify-center items-center">
        <div className="">
          <img
            className="mt-11 w-[250px] sm:w-[350px] md:w-[400px]"
            src="/image/img.jpg"
            alt=""
          />
        </div>
        <div className="mt-11 flex flex-col items-center w-[79%] sm:w-[450px] md:w-[40%] md:ml-11 md:flex md:items-start font-sans">
          <h3 className="text-[#a3e635] font-bold text-sm">
            Data Analytics Dashboard
          </h3>
          <h3 className="font-bold text-2xl">Manage Data Analytics</h3>
          <p className="text-justify ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure modi
            asperiores obcaecati mollitia aliquid hic officiis rem quia
            reiciendis corrupti. Est, cupiditate. Voluptates vitae quas vel aut
            dignissimos nesciunt doloremque sed alias.
          </p>

          <button className="text-white border border-black bg-black w-[200px] rounded-md font-medium my-3 px-6 py-2 hover:border hover:bg-[#84cc16] hover:text-black hover:border-[#84cc16] duration-500">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Analytics;
