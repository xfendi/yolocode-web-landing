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
    <div className="flex flex-col gap-20 items-center mt-20 bg-blue-500">
      <div className="text-4xl sm:text-5xl text-white text-center">
        Ensuring the <span className="text-green-400">security and trust</span>{" "}
        of the platform using <span className="text-pink-400">modern</span>{" "}
        systems and <span className="text-blue-400">customer services.</span>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex flex-col gap-5 w-full items-center justify-center">
        <div className="h-[340px] lg:h-[540px] sm:col-span-2 bg-[#1d1d1d] rounded-3xl flex lg:items-end items-center">
          <div className="flex-1 flex">
            <div className="flex flex-col gap-10 mt-auto lg:items-start items-center lg:text-start text-center p-10">
              <div className="flex-col flex gap-5">
                <div className="text-white text-3xl font-semibold h-max">
                  Data Protection
                </div>
                <div className="text-neutral-400 text-md h-max">
                  Your security is our priority. We implement the latest
                  technologies, like SSL encryption and secure authentication
                  methods, to keep your data safe.
                </div>
              </div>

              <div className="text-white bg-[#252525] flex gap-5 p-5 rounded-full w-max">
                <ShoppingCartOutlinedIcon />
                <RouteOutlinedIcon className="text-pink-400" />
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
        <div className="h-[340px] lg:h-[540px] bg-[#1d1d1d] rounded-3xl flex flex-col lg:items-end items-center">
          <div className="flex-1 hidden lg:flex justify-center items-center pl-5">
            <img src={Innovation} alt="innovation" />
          </div>
          <div className="flex-col flex gap-5 p-5 mt-auto h-max lg:text-start text-center lg:m-0 m-auto">
            <div className="text-white text-3xl font-semibold h-max">
              Innovation at Core
            </div>
            <div className="text-neutral-400 text-md h-max">
              We embrace innovation to deliver cutting-edge solutions for
              developers and creators. At Yolo Code, we’re always pushing
              boundaries to make your projects better.
            </div>
          </div>
        </div>
        <div className="h-[340px] lg:h-[540px] sm:col-span-3 bg-[#1d1d1d] rounded-3xl flex w-full">
          <div className="flex-1 hidden lg:flex justify-center items-end">
            <img src={Discord} alt="discord" className="w-[560px] h-[500px]" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className=" flex flex-col gap-5 items-center w-1/2 text-center">
              <div className="text-white text-5xl font-semibold h-max">
                Community and Support
              </div>
              <div className="text-neutral-400 text-md h-max">
                At Yolo Code, we’re more than just a platform — we’re a
                community.
              </div>
              <a
                href="/"
                className="py-2 px-5 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
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
