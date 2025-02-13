import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Project = ({ data }) => {
  return (
    <div className="flex justify-between items-center last:pb-0 pb-10 gap-10 border-b-2 border-neutral-800 last:border-none">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="bg-neutral-900 border-2 border-neutral-800 flex-1 h-[250px] rounded-3xl"></div>
        <div className="gap-5 flex flex-col flex-1 text-start">
          <div className="font-medium text-2xl">{data.title}</div>
          <div className="text-neutral-300 text-md">{data.description}</div>
        </div>
      </div>
      <div>
        <div className="bg-neutral-900 w-16 h-16 rounded-full text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-neutral-800">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Project;
