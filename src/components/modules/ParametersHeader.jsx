import React from "react";
import "../../styles/parameters-header.css";

const ParametersHeader = () => {
  return (
    <div className="parameters-header bg-white p-8 rounded-[32px] w-[1140px] h-[200px]">
      <div className="parameters-nav flex gap-5 items-center">
        <button className="font-bold px-2 py-4 border-b-2 border-primary">
          My Parameters
        </button>
        <button className="font-normal px-2 py-4 transition-all duration-300 border-b-2 border-[transparent] hover:border-b-2 hover:border-primary">Public</button>
        <button className="font-normal px-2 py-4 transition-all duration-300 border-b-2 border-[transparent] hover:border-b-2 hover:border-primary">Configurations</button>
      </div>
    </div>
  );
};

export default ParametersHeader;
