import React from "react";
import Slider from "../components/slides/Slider";
import Introduce from "../layouts/Introduce";
import Nav from "../layouts/Nav";
import NavAddress from "../layouts/NavAddress";
import News from "../layouts/News";

const HomePage = () => {
  return (
    <div>
      <NavAddress></NavAddress>
      <Nav></Nav>
      <Slider></Slider>
    </div>
  );
};

export default HomePage;
