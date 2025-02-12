import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Project = ({ data }) => {
  return (
    <div className="flex justify-between items-center pb-10 border-b-2 border-[#353535] last:border-none">
      <div className="flex items-center gap-10">
        <div className="bg-[#1d1d1d] w-[400px] h-[250px] rounded-3xl"></div>
        <div className="gap-5 flex flex-col p- w-[50%]">
          <div className="text-white text-5xl h-max leading-[40px]">
            {data.title}
          </div>
          <div className="text-neutral-400 text-lg h-max">
            {data.description}
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#1d1d1d] w-16 h-16 rounded-full text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#282828]">
            <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Project;
