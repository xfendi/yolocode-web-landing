import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="hero"
    >
      <div className="flex flex-col gap-10 items-center" data-aos="fade-up">
      <Link className="relative hover:-rotate-12 hover:scale-105 transition-all duration-300" to="/">
        <img src={Logo} alt="" className="w-14" />
      </Link>
        <div className="text-5xl sm:text-6xl text-white text-center">
          Bring your <span className="text-pink-400">vision</span> of a <span className="text-blue-400">dream website</span> or application to <span className="text-green-400">live</span>!
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <a
          href="https://dc.yolocode.pl"
          className="cursor-pointer p-3 px-10 text-lg font-medium w-max rounded-full transition-all duration-300 border-2 border-neutral-100 bg-neutral-100 text-black hover:border-neutral-300 hover:bg-neutral-300"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default Hero;
