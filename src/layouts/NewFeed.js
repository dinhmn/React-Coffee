import React from "react";

const NewFeed = () => {
  return (
    <div className="">
      <div className="w-auto">
        <img
          src="https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-img-2.jpg"
          alt=""
          className="w-full h-full object-cover shrink-0"
        />
      </div>
      <div className="flex flex-col items-start mt-4 gap-y-3">
        <h1 className="text-3xl text-center font-bold tracking-wider">
          PLACES TO GET LOST
        </h1>
        <p className="text-base font-light">
          Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos
          ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix
          atle.
        </p>
        <button className="text-secondary flex items-start justify-center gap-x-3 uppercase font-bold">
          <span>Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6"
          >
            <path
              className="bg-secondary"
              d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewFeed;
