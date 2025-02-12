import React from "react";
import Hero from "../Pages/Landing/Hero";

const Footer = () => {
  return (
    <div className="p-5">
      <div className="bg-neutral-900 rounded-3xl border-2 border-neutral-800 h-full p-5 gap-5 flex flex-col relative overflow-hidden">
        <Hero />
        <div className="flex justify-between">
          <div className="text-neutral-600 text-sm text-center">
            &copy; 2025 Yolo Code. All rights reserved.
          </div>
          <div className="flex justify-center gap-5 text-sm text-neutral-600">
            <a
              href="/"
              className="hover:text-neutral-400 hover:underline transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="hover:text-neutral-400 hover:underline transition-all duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
