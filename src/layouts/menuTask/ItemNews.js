import React from "react";

const Item = ({ image, button, children, props }) => {
  return (
    <div className="bg-[#333341] flex flex-col my-5 cursor-pointer gap-y-2 p-4 rounded-md">
      <div>
        <img
          className="object-cover w-full h-[200px] rounded-lg"
          src={image}
          alt={children}
        />
      </div>
      <div className="flex flex-col content-around w-full gap-3">
        <span>{children}</span>
        <div className="flex items-center justify-between w-full">
          <small></small>
          <div className="px-[20px] rounded-full hover:bg-amber-700 transition-all py-[2px] flex justify-center items-center text-base bg-amber-800">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
