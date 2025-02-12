import React from "react";

import Discord from "../../Assets/Images/yolo-discord.png";
import Table from "../../Assets/Images/data-table.png";
import Innovation from "../../Assets/Images/innovation.png";

import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Security = () => {
  return (
    <div
      className="flex flex-col gap-10 text-center justify-center items-center px-5 py-[15%] md:py-[5%] md:px-[10%] 2xl:px-[15%]"
      id="security"
    >
      <div className="flex flex-col gap-10 items-center" data-aos="fade-up">
        <div className="bg-neutral-900 p-2 px-4 text-sm rounded-full w-max">
          Security & Trust
        </div>
        <div className="text-5xl sm:text-6xl text-white text-center">
        Ensuring the <span className="text-green-400">security and trust</span>{" "}
        of the platform using <span className="text-pink-400">modern</span>{" "}
        systems and <span className="text-blue-400">customer services.</span>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col gap-5 w-full items-center justify-center" data-aos="fade-up">
        <div className="p-5 lg:p-0 lg:h-[540px] sm:col-span-2 flex lg:items-end items-center bg-neutral-900 rounded-3xl border-2 border-neutral-800">
          <div className="flex-1 flex">
            <div className="flex flex-col gap-10 mt-auto lg:items-start items-center lg:text-start text-center lg:p-10">
              <div className="flex-col flex gap-5">
                <div className="font-medium text-2xl">
                  Data Protection
                </div>
                <div className="text-neutral-300 text-md">
                  Your security is our priority. We implement the latest
                  technologies, like SSL encryption and secure authentication
                  methods, to keep your data safe.
                </div>
              </div>

              <div className="cursor-pointer flex p-3 px-5 gap-5 text-lg font-medium w-max rounded-full transition-all duration-300 border-2 border-neutral-100 bg-neutral-100 text-neutral-900">
                <ShoppingCartOutlinedIcon />
                <RouteOutlinedIcon className="text-yellow-400 hover:scale-110 hover:-rotate-12" />
                <GraphicEqOutlinedIcon />
                <DonutLargeOutlinedIcon />
                <MailOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="flex-1 hidden lg:flex justify-center items-end">
            <img
              src={Table}
              alt="table"
              className="w-[430px] h-[450px] rounded-br-3xl"
            />
          </div>
        </div>
        <div className="p-5 lg:p-0 lg:h-[540px] bg-neutral-900 rounded-3xl border-2 border-neutral-800 flex flex-col lg:items-end items-center">
          <div className="flex-1 hidden lg:flex justify-center items-center pl-5">
            <img src={Innovation} alt="innovation" />
          </div>
          <div className="flex-col flex gap-5 lg:p-10 mt-auto h-max lg:text-start text-center lg:m-0 m-auto">
            <div className="font-medium text-2xl">
              Innovation at Core
            </div>
            <div className="text-neutral-300 text-md">
              We embrace innovation to deliver cutting-edge solutions for
              developers and creators. At Yolo Code, we’re always pushing
              boundaries to make your projects better.
            </div>
          </div>
        </div>
        <div className="p-5 lg:p-0 lg:h-[540px] sm:col-span-3 bg-neutral-900 border-2 border-neutral-800 rounded-3xl flex w-full">
          <div className="flex-1 hidden lg:flex justify-center items-end">
            <img src={Discord} alt="discord" className="w-[560px] h-[500px]" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col gap-5 items-center lg:w-1/2 text-center">
              <div className="font-medium text-2xl">
                Community and Support
              </div>
              <div className="text-neutral-300 text-md">
                At Yolo Code, we’re more than just a platform — we’re a
                community.
              </div>
              <a
              href="https://dc.yolocode.pl"
              className="p-3 px-10 text-lg font-medium w-max rounded-full transition-all duration-300 border-2 border-neutral-100 hover:bg-neutral-900"
            >
              Join Discord
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
