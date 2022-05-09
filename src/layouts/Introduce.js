import React from "react";
import { Player } from "video-react";
import Button from "../components/admin/button/Button";

const Introduce = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-start justify-center w-1/2 gap-y-6">
        <h3 className="text-2xl font-bold leading-8 tracking-wider text-secondary">
          Application
        </h3>
        <h1 className="text-4xl font-bold leading-8 tracking-wider text-white">
          USE OUR APPLICATION.
        </h1>
        <div className="w-48 h-1 m-1 bg-secondary"></div>
        <p className="text-base">
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos
          ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix
          at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis
          urbanitas moderatius id.
        </p>
        <button className="px-6 py-3 text-lg font-bold uppercase bg-[#caa885] hover:bg-[#c28c55] rounded-[4px]">
          Read more
        </button>
      </div>
      <div className="w-1/2">
        {/* <video src="https://www.youtube.com/watch?v=iMzMRhBx9mQ&ab_channel=BASS6"></video> */}
        <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          playsInline
          poster="../images/newfeed.jpg"
        >
          {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /> */}
        </Player>
      </div>
    </div>
  );
};

export default Introduce;
