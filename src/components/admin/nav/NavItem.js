import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, url, props }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? "text-purple-600 py-[6px] px-3 bg-purple-300 rounded-lg w-full"
          : "py-[6px] px-3 hover:text-purple-600 hover:bg-purple-300 transition-all rounded-lg w-full"
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
