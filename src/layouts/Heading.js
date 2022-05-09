import React, { Fragment } from "react";

const Heading = ({ header, children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-8 font-body gap-y-6">
        <h3 className="p-2 text-lg leading-5 text-center font-body">
          {header}
        </h3>
        <h1 className="text-3xl font-bold text-center text-secondary">
          {children}
        </h1>
        <div className="w-48 h-1 m-1 bg-secondary"></div>
      </div>
    </>
  );
};

export default Heading;
