import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  ColorPage,
  ContainerPage,
  FlavorPage,
  Home,
  ResultContainer,
  ShapePage,
  ThankYou,
} from "../pages";

const AppRoute = () => {
  const [flavor, setFlavor] = useState("");
  const [color, setColor] = useState("#fff000");
  const [shapes, setShapes] = useState([]); // Store multiple shapes
  const [container, setContainer] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/color" element={<ColorPage color={color} setColor={setColor} />} />
        <Route path="/flavor" element={<FlavorPage flavor={flavor} setFlavor={setFlavor} />} />
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
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default AppRoute