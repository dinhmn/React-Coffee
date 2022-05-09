import React from "react";

const Items = ({ path, header, className, children }) => {
  return (
    <div className={className}>
      <div>
        <img src={path} alt="" />
      </div>
      <div className="text-xl font-bold leading-5 tracking-wide text-secondary">
        {header}
      </div>
      <p className="text-sm tracking-normal text-center">{children}</p>
    </div>
  );
};

export default Items;
