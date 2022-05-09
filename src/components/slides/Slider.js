import React from "react";

const Slider = () => {
  return (
    <div className="relative w-full h-full bg-image">
      <img
        src="https://images.unsplash.com/photo-1647815567584-9fd320e4f039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="flex-shrink object-cover w-screen h-[800px]"
      />
      <div className="absolute top-1/4 left-[200px]">
        <div className="title">
          <h1 className="font-bold text-9xl">DISTINT</h1>
          <h1 className="font-bold text-9xl">
            COFFEE <span className="text-green-600">AROMA</span>
          </h1>
          <h4 className="m-2 text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h4>
        </div>
        <button className="px-6 py-3 font-semibold transition-all ease-in read-more bg-slate-800 hover:bg-secondary rounded-[4px]">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default Slider;
