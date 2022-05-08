import React from "react";
import NewFeed from "./NewFeed";

const News = ({ className }) => {
  return (
    <div className={`${className} `}>
      <div className="m-8 font-body flex flex-col items-center justify-center gap-y-6">
        <h3 className="text-center text-lg font-body p-2 leading-5">
          What Happens Here
        </h3>
        <h1 className="text-secondary text-3xl font-bold text-center">
          COFFEE BUILD YOUR BASE.
        </h1>
        <div className="w-48 h-1 bg-secondary m-1"></div>
      </div>
      <div className="flex items-center m-auto justify-center gap-x-8 ">
        <NewFeed></NewFeed>
        <NewFeed></NewFeed>
        <NewFeed></NewFeed>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default News;
