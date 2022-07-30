import React from "react";

const NavIcons = ({ title, children, props }) => {
  return (
    <span className="flex justify-start items-center gap-x-3" {...props}>
      {children} {title}
    </span>
  );
};

export default NavIcons;
