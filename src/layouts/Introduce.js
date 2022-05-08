import React from "react";
import Button from "../components/admin/button/Button";

const Introduce = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h3>Application</h3>
        <h1>USE OUR APPLICATION.</h1>
        <p>
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos
          ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix
          at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis
          urbanitas moderatius id.
        </p>
        <button className="bg-secondary uppercase font-bold text-lg px-6 py-3 border-">
          Read more
        </button>
      </div>
      <div>
        <video src="https://www.youtube.com/watch?v=AVuJTw5yEH8"></video>
      </div>
    </div>
  );
};

export default Introduce;
