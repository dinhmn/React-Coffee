import React from "react";
import { useState } from "react";
import Input from "../admin/input/Input";

const Topbar = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="w-full h-[50px] bg-white text-black">
      <div className="grid grid-cols-5 gap-x-10 px-10 items-center justify-between h-full">
        <div className="col-span-2 gap-x-[100px]">
          <div className="grid grid-cols-2 gap-x-10">
            <span className="text-3xl font-bold text-blue-900">lamaadin</span>
            <form action="" method="get" className="relative">
              <input
                type="text"
                className="border relative w-full px-2 py-1 rounded-md focus:border-non"
                placeholder="Search"
              />
              <button className="absolute z-99 top-[6px] right-2" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div></div>
        <div className="col-span-2 flex justify-end items-center gap-x-10">
          <div className="flex justify-center items-center gap-x-6 gap-y-1 font-bold text-xl">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button>
              {user ? (
                <div className="flex justify-center items-center gap-x-2 font-bold text-xl">
                  <div>
                    <img
                      src="https://cdn.pixabay.com/photo/2020/04/30/03/26/rufous-5111261_960_720.jpg"
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <small>Ai Commic</small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
