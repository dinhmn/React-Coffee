import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-[300px] h-auto bg-white shadow-md flex flex-col justify-start items-start px-5 py-3 gap-y-5 text-lg uppercase font-bold text-black">
      <NavLink
        to={"/category"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Category
      </NavLink>

      <NavLink
        to={"/product"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Product
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Contact
      </NavLink>
      {/* <Link>Product</Link>
      <Link>Contact</Link> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
