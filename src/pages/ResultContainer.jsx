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

// import React from "react";
// import { swirlingLogo } from "../assets";

// const ResultContainer = ({ color, shape, container }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />

//       <h1 className="text-2xl font-bold mb-4">
//         Lok at your amazing Yoghurt Container
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

//         {/* Render the selected shape with the selected color as background */}
//         {shape && (
//           <div
//             style={{
//               backgroundColor: {color},
//               position: "absolute",
//             //   top: "30%", // Adjust as needed
//               left: "30%", // Adjust as needed
//               width: "100px", // Adjust size
//               height: "100px", // Adjust size
//               borderRadius: shape === "/assets/circle.svg" ? "50%" : "0",
//               transform:
//                 shape === "/assets/triangle.svg" ? "rotate(45deg)" : "none",
//             }}></div>
//         )}
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
import { swirlingLogo } from "../assets"; // Adjust the path as needed

const ResultContainer = ({ color, shape, container, flavor }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />

      <h1 className="text-2xl font-bold mb-4 text-center">
        Look at your amazing <br /> Yoghurt Container
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
              backgroundColor: color, // Use the color directly
              position: "absolute",
              top: "50%", // Center within the container
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the shape
              width: "100px", // Adjust size
              height: "100px", // Adjust size
              borderRadius: shape === "/assets/circle.svg" ? "50%" : "0",
              clipPath:
                shape === "/assets/triangle.svg"
                  ? "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangle shape
                  : "none",
            }}
          ></div>
        )}
      </div>

      {/* Display selected color */}
      <div className="mt-8 flex items-center space-x-4">
        <h3 className="text-lg">Selected Color:</h3>
        <div
          className="w-10 h-10 rounded border"
          style={{
            backgroundColor: color, // Use the color as the background
          }}
        ></div>
      </div>

      {/* Display selected flavor */}
      {/* <div className="mt-4 flex flex-col items-center">
        <h3 className="text-lg mb-2">Selected Flavor:</h3>
        <p
          className="px-4 py-2 text-center bg-gray-800 rounded text-white"
          style={{
            minWidth: "150px", // Ensures a consistent size for the display
          }}
        >
          {flavor}
        </p>
      </div> */}
      <div className="py-10">
        <h1>Are you happy with your flavor design? </h1>
      </div>

      <div className="flex gap-5">
        <a className="bg-cyan-500 mt-4 px-10 py-3 text-white rounded-full" href="/">START OVER</a>
        <a className="bg-cyan-500 mt-4 px-10 py-3 text-white rounded-full" href="/thankyou">YES</a>
      </div>
    </div>
  );
};

export default ResultContainer;
