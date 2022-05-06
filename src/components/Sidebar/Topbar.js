import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-[50px] bg-white">
      <div className="flex items-center justify-between h-full px-5 py-0">
        <div className="left">
          <span className="text-3xl font-bold text-blue-900">lamaadin</span>
        </div>
        <div className="right">
          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
