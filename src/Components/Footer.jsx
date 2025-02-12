import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-9xl leading-none sm:text-[300px] lg:text-[500px] sm:leading-[250px] lg:leading-[400px] font-bold text-white">
        Yolo
      </div>
      <div className="flex justify-between border-t pt-5 border-neutral-700">
        <div className="text-neutral-600 text-sm text-center">
          &copy; 2024 Yolo Code. <span className="hover:text-yellow-400 hover:underline transition-all duretion-300 cursor-pointer">Yolo</span> All rights reserved.
        </div>
        <div className="flex justify-center gap-5 text-sm text-neutral-600">
          <a href="/" className="hover:text-neutral-400 hover:underline transition-all duration-300">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-neutral-400 hover:underline transition-all duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
