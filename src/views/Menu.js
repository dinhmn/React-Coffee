import React from "react";
import ElementTask from "../layouts/homePage/ElementTask";
import Item from "../layouts/homePage/Item";

const Menu = () => {
  return (
    <div className="grid grid-cols-4 gap-4 page-container">
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
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-3">
          <Item price="30.000">Americano</Item>
          <Item price="35.000">Cold Brew Sữa Tươi</Item>
          <Item price="40.000">Cold Brew Truyền Thống</Item>
          <Item price="50.000">CloudFee Creamy Caramel</Item>
        </div>
      </div>
    </div>
  );
};

export default Menu;
