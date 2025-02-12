import React from "react";

import NavBar from "../../Components/NavBar";

import AppIcon from "../../Assets/Images/app-icon.png";

const Header = () => {
  return (
    <div className="h-screen p-5">
      <div className="bg-neutral-900 rounded-3xl border-2 border-neutral-800 h-full p-5 gap-10 flex flex-col relative overflow-hidden">
        <NavBar />
        <div className="flex flex-col gap-10 z-10" data-aos="fade-up">
          <div className="text-5xl sm:text-6xl lg:text-8xl">
            <span className="text-pink-400">Tailored</span> coding <br />{" "}
            solutions <span className="text-blue-400">crafted</span> <br />{" "}
            exclusively <span className="text-green-400">for you</span>
          </div>
          <div className="text-neutral-300 text-md">
            Join our discord server and bring your vision of a dream website or
            application to life!
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <a
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#projects").offsetTop,
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer p-3 px-10 text-lg font-medium w-max rounded-full transition-all duration-300 border-2 border-neutral-100 bg-neutral-100 text-black hover:border-neutral-300 hover:bg-neutral-300"
            >
              Our Projects
            </a>
            <a
              href="https://dc.yolocode.pl"
              className="p-3 px-10 text-lg font-medium w-max rounded-full transition-all duration-300 border-2 border-neutral-100 hover:bg-neutral-900"
            >
              Join Discord
            </a>
          </div>
        </div>
        <img
          src={AppIcon}
          alt=""
          className="absolute right-0 top-0 h-full object-cover z-0 opacity-10"
        />
      </div>
    </div>
  );
};

export default Header;
