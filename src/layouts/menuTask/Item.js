import React from "react";

const Item = ({ price, image, children, props }) => {
  return (
    <div className="bg-[#333341] flex flex-col my-5 cursor-pointer gap-y-2 p-4 rounded-md">
      <div>
        <img
          className="w-full h-[200px] object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <span>{children}</span>
        <div className="flex items-center justify-between w-full">
          <small>{price}vnđ</small>
          <div className="px-[12px] rounded-full hover:bg-amber-700 transition-all py-[2px] flex justify-center items-center text-lg bg-amber-800">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
