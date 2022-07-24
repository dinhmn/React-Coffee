import React from "react";
import IconCoffee from "./IconCoffee";

const ElementTask = ({ className, children, props }) => {
  return (
    <div className="flex items-start justify-start gap-x-3 gap-y-3" {...props}>
      <IconCoffee className={className}></IconCoffee> {children}
    </div>
  );
};

export default ElementTask;
