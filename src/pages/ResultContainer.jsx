// import React from "react";

// // Helper function to generate random positions for the shapes
// const generateRandomPosition = () => ({
//   top: `${Math.random() * 80}%`, // Random top position
//   left: `${Math.random() * 80}%`, // Random left position
// });

// const ResultContainer = ({ flavor, color, shapes, container }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-2xl font-bold mb-4">
//         Your {flavor} Yogurt in a {color} Container
//       </h1>

//       <div className="relative mt-8 w-64 h-64">
//         {/* Render the selected container */}
//         {container ? (
//           <img
//             src={container}
//             alt="Selected Container"
//             className="w-full h-full object-contain"
//           />
//         ) : (
//           <p className="text-gray-400">No container selected</p>
//         )}

//         {/* Render all selected shapes */}
//         {shapes.map((shape, index) => (
//           <img
//             key={index}
//             src={shape}
//             alt={`Shape ${index + 1}`}
//             className="absolute w-16 h-16 object-contain"
//             style={generateRandomPosition()} // Position the shapes randomly
//           />
//         ))}
//       </div>

//       {/* Display selected color */}
//       <div className="mt-8">
//         <h3 className="text-lg">Selected Color: {color}</h3>
//       </div>
//     </div>
//   );
// };

// export default ResultContainer;

import React from "react";
import { swirlingLogo } from "../assets";

const ResultContainer = ({ color, shape, container }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />

      <h1 className="text-2xl font-bold mb-4">
        Lok at your amazing Yoghurt Container
      </h1>

      <div className="relative mt-8 w-64 h-64">
        {/* Render the selected container */}
        {container ? (
          <img
            src={container}
            alt="Selected Container"
            className="w-full h-full object-contain"
          />
        ) : (
          <p className="text-gray-400">No container selected</p>
        )}

        {/* Render the selected shape with the selected color as background */}
        {shape && (
          <div
            style={{
              backgroundColor: {color},
              position: "absolute",
            //   top: "30%", // Adjust as needed
              left: "30%", // Adjust as needed
              width: "100px", // Adjust size
              height: "100px", // Adjust size
              borderRadius: shape === "/assets/circle.svg" ? "50%" : "0",
              transform:
                shape === "/assets/triangle.svg" ? "rotate(45deg)" : "none",
            }}></div>
        )}
      </div>

      {/* Display selected color */}
      <div className="mt-8">
        <h3 className="text-lg">Selected Color: {color}</h3>
      </div>
    </div>
  );
};

export default ResultContainer;
