import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#1d1d1d] p-10 rounded-3xl flex">
      <div className="flex-1 text-start flex flex-col gap-10">
        <div className="text-7xl text-white font-semibold">
          bring your <span className="text-blue-400">vision</span> to{" "}
          <span className="text-green-400">live</span>
        </div>
        <div className="text-neutral-400 text-md h-max">
          individualized coding solutions just for you
        </div>
        <a
          href="/"
          className="py-2 px-5 rounded-full text-white border-2 w-max border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
      <div className="flex-1 hidden lg:flex"></div>
    </div>
  );
};

export default Hero;
