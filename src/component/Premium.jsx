import React from "react";

const Premium = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center h-[400px] md:h-[300px] bg-[url('/image/bg4.jpg')] bg-no-repeat">
        <div className="my-5  mx-5 text-center w-[80%] md:w-[100%] md:ml-11 lg:ml-0 lg:w-[490px]">
          <h1 className="my-1 w-[100%] lg:text-left text-3xl font-bold ">
            Enjoy Our Premium Subscription!{" "}
          </h1>
          <p className="text-sm lg:text-left md:text-black">
            Are you ready to unlock a world of exclusive benefits and take your
            experience to the next level
          </p>
        </div>
        <div className="mx-9">
          <div className="justify-center items-center flex flex-col md:flex md:flex-row ">
            <input
              className="h-10 mx-1 w-[200px] p-3 rounded-md outline-none text-center md:text-left"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="mx-1 text-white border border-black  bg-black w-[200px] rounded-md font-medium my-3 px-6 py-2 hover:border hover:bg-white hover:text-black hover:border-white duration-500">
              Notify Me
            </button>
          </div>
          <div className="">
            <p className="text-center text-md font-bold mx-1">
              Unlock the premium potential today!{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
