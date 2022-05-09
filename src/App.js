import Nav from "./layouts/Nav";
import News from "./layouts/News";
import Slider from "./components/slides/Slider";
import Introduce from "./layouts/Introduce";
import styled from "styled-components";
import Favorite from "./layouts/Favorite";

const StyleIntroduce = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/01/home-3-parallax-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0;
  /* background-color: ; */
`;

function App() {
  return (
    <div className="bg-coffee">
      <Nav></Nav>
      <Slider></Slider>
      <News className="container w-[1280px] m-auto"></News>
      <StyleIntroduce>
        <Introduce className="container w-[1280px] m-auto mt-8 mb-8 gap-x-10 flex items-center justify-center"></Introduce>
      </StyleIntroduce>
      <Favorite className="m-auto my-8 page-container"></Favorite>
    </div>
  );
}

export default App;
