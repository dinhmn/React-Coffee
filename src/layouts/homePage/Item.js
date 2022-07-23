import React from "react";

const Item = ({ price, children, props }) => {
  return (
    <div className="flex flex-col my-5 gap-y-2">
      <div>
        <img
          className="w-[200px] h-[200px] object-cover rounded-lg"
          src="https://images.pexels.com/photos/4051221/pexels-photo-4051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <span>{children}</span>
        <small>{price}vnđ</small>
      </div>
    </div>
  );
};

export default Item;
