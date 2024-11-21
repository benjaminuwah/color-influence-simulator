import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ColorPage,
  ContainerPage,
  FlavorPage,
  Home,
  ResultContainer,
  ShapePage,
} from "../pages";

const AppRoute = () => {
  const [flavor, setFlavor] = useState("");
  const [color, setColor] = useState("");
  const [shapes, setShapes] = useState([]); // Store multiple shapes
  const [container, setContainer] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/color" element={<ColorPage setColor={setColor} />} />
        <Route path="/flavor" element={<FlavorPage setFlavor={setFlavor} />} />
        <Route path="/shape" element={<ShapePage setShapes={setShapes} />} />
        <Route
          path="/container"
          element={<ContainerPage setContainer={setContainer} />}
        />
        <Route
          path="/result"
          element={
            <ResultContainer
              flavor={flavor}
              color={color}
              shapes={shapes}
              container={container}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoute