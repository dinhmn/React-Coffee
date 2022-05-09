import React from "react";
import Heading from "./Heading";
import NewFeed from "./NewFeed";

const News = ({ className }) => {
  return (
    <div className={`${className} `}>
      <Heading header="What Happens Here">COFFEE BUILD YOUR BASE.</Heading>
      <div className="flex items-center justify-center m-auto gap-x-8 ">
        <NewFeed></NewFeed>
        <NewFeed></NewFeed>
        <NewFeed></NewFeed>
      </div>
    </div>
  );
};

export default News;
