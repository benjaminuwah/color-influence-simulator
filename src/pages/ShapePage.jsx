// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { swirlingLogo } from "../assets";
// import { circle } from "../assets/shapes";

// const shapes = [
//   { label: "Circle", src: circle },
//   { label: "Square", src: "/assets/square.svg" },
//   { label: "Triangle", src: "/assets/triangle.svg" },
// ];

// const ShapePage = ({ setShapes }) => {
//   const [selectedShapes, setSelectedShapes] = useState([]);
//   const navigate = useNavigate();

//   const handleToggle = (shape) => {
//     if (selectedShapes.includes(shape)) {
//       setSelectedShapes(selectedShapes.filter((item) => item !== shape));
//     } else {
//       setSelectedShapes([...selectedShapes, shape]);
//     }
//   };

//   const handleNext = () => {
//     setShapes(selectedShapes);
//     navigate("/container");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
//       <h1 className="text-2xl font-bold my-10">Choose Shapes</h1>
//       <div className="flex flex-wrap gap-4">
//         {shapes.map((shape, index) => (
//           <button
//             key={index}
//             onClick={() => handleToggle(shape.src)}
//             className={`p-2 border-2 ${
//               selectedShapes.includes(shape.src) ? "border-green-500" : ""
//             }`}>
//             <img src={shape.src} alt={shape.label} className="w-16 h-16" />
//           </button>
//         ))}
//       </div>
//       <button
//         onClick={handleNext}
//         className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
//         Next
//       </button>
//     </div>
//   );
// };

// export default ShapePage;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { circle } from "../assets/shapes";
// import { swirlingLogo } from "../assets";

// const shapes = [
//   { label: "Circle", src: circle },
//   { label: "Square", src: "/assets/square.svg" },
//   { label: "Triangle", src: "/assets/triangle.svg" },
// ];

// const ShapePage = ({ setShapes, color }) => {
//   const navigate = useNavigate();

//   const handleSelectShape = (shape) => {
//     setShapes(shape); // Save the selected shape
//     navigate("/container"); // Go to the container selection page
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//               <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />

//       <h1 className="text-2xl font-bold mb-4">Choose a Shape</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {shapes.map((shape, index) => (
//           <button
//             key={index}
//             onClick={() => handleSelectShape(shape.src)}
//             className="flex flex-col items-center space-y-2"
//           >
//             <img
//               src={shape.src}
//               alt={shape.label}
//               className="w-32 h-32 object-contain"
//               color={shapes.color}
//             />
//             <span>{shape.label}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShapePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { swirlingLogo } from "../assets";

const shapes = ["Circle", "Square", "Triangle", "Line"];

const ShapeSelector = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
      <h1 className="text-2xl font-bold mb-4">Choose a Shape</h1>
      {/* Shape Buttons */}
      <div className="flex space-x-4">
        {shapes.map((shape, index) => (
          <button
            key={index}
            onClick={() => setSelectedShape(shape)}
            className={`px-4 py-2 rounded ${
              selectedShape === shape
                ? "bg-green-500"
                : "bg-gray-700 hover:bg-gray-500"
            }`}
          >
            {shape}
          </button>
        ))}
      </div>
      {/* Container with Shape */}
      <div className="mt-8 flex items-center justify-center p-10 bg-gray-800 rounded-md">
        {selectedShape ? (
          <div className="flex justify-center items-center">
            {selectedShape === "Circle" && (
              <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
            )}
            {selectedShape === "Square" && (
              <div className="w-24 h-24 bg-red-500"></div>
            )}
            {selectedShape === "Triangle" && (
              <div
                className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-yellow-500"
                style={{ transform: "rotate(180deg)" }}
              ></div>
            )}
          </div>
        ) : (
          <p className="text-gray-400">No shape selected</p>
        )}
      </div>
      {/* Next Button */}
      <button
        className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => navigate("/container")}
        disabled={!selectedShape} // Disable button if no shape is selected
      >
        Next
      </button>
    </div>
  );
};

export default ShapeSelector;
