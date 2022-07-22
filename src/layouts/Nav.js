import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <div className="flex items-center justify-start px-5 py-3 gap-x-10">
        <div className="inline-block text-4xl font-bold logo">Coffee</div>
      </div>
      <div className="flex items-center justify-center search">
        <div className="flex items-center justify-center text-lg font-bold gap-x-5 menu text-amber-700">
          <span className="px-4">Cà phê</span>
          <span className="px-4">Trà</span>
          <span className="px-4">Menu</span>
          <span className="px-4">Chuyện Nhà</span>
          <span className="px-4">Cảm hứng CloundFee</span>
          <span className="px-4">Cửa hàng</span>
          <span className="px-4">Tuyển dụng</span>
        </div>
        <div className="flex">
          <button
            onClick={() => console.log(1)}
            className="z-10 px-4 translate-x-6 cursor-pointer bg-slate-700 rounded-l-3xl"
            type="submit"
          >
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            className="w-full h-full px-8 py-2 text-black border-none rounded-full outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center justify-between gap-5 px-3 mx-3">
          <div className="gap-5 cursor-pointer cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="relative gap-5 cursor-pointer account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <p className="absolute flex items-center justify-center w-4 h-4 font-bold text-center text-red-700 bg-white rounded-md -top-1 text-md -right-2">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
