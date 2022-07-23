import Nav from "./layouts/common/Nav";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";
import Menu from "./views/Menu";
import NavAddress from "./layouts/common/NavAddress";

function App() {
  return (
    <div>
      <NavAddress className="bg-opacity-60 bg-slate-700 text-br"></NavAddress>
      <Nav></Nav>
      <Routes>
        <Route path="/">
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
