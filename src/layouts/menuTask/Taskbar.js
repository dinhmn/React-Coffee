import React from "react";
import ElementTask from "./ElementTask";

const Taskbar = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-3">
      <ElementTask>
        <h5>Tất cả</h5>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <div>
          Cà phê
          <ul className="flex flex-col pl-3 mt-1 gap-y-2">
            <li>Cà phê Việt Nam</li>
            <li>Cà phê máy</li>
            <li>Cold Brew</li>
          </ul>
        </div>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <div>
          CloundFee
          <ul className="flex flex-col pl-3 mt-1 gap-y-2">
            <li>Creamy</li>
            <li>Creamy Brulee</li>
          </ul>
        </div>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <h5>Trà</h5>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <h5>Hi-Tea Healthy</h5>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <h5>Cà phê hạt</h5>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <h5>Cà phê gói</h5>
      </ElementTask>
      <ElementTask className="text-[#2b2b36]">
        <h5>Cà phê</h5>
      </ElementTask>
    </div>
  );
};

export default Taskbar;
