import Nav from "./layouts/Nav";
import News from "./layouts/News";
import Slider from "./components/slides/Slider";
import Introduce from "./layouts/Introduce";

function App() {
  return (
    <div className="bg-coffee">
      <Nav></Nav>
      <Slider></Slider>
      <News className="container w-[1280px] m-auto"></News>
      <Introduce className="container w-[1280px] m-auto mt-8 gap-x-10"></Introduce>
    </div>
  );
}

export default App;
