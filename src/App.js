import Nav from "./components/Nav";
import News from "./components/News";
import Slider from "./components/slides/Slider";

function App() {
  return (
    <div className="bg-coffee">
      <Nav></Nav>
      <Slider></Slider>
      <News className=""></News>
    </div>
  );
}

export default App;
