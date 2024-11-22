// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { swirlingLogo } from "../assets";

// const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Pink"];

// const ColorPage = ({ setColor }) => {
//   const navigate = useNavigate();

//   const handleSelectColor = (color) => {
//     setColor(color); // Save the selected color
//     navigate("/shape"); // Go to the shape selection page
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
//       <h1 className="text-2xl font-bold mb-4">Choose a Color</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {colors.map((color, index) => (
//           <button
//             key={index}
//             onClick={() => handleSelectColor(color)}
//             style={{ backgroundColor: color }}
//             className="p-3 rounded-full">
//             {color}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ColorPage;

// import React from "react";
// import { ChromePicker } from "react-color";
// import { useNavigate } from "react-router-dom";
// import { swirlingLogo } from "../assets";

// const ColorPage = ({ color, setColor }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
//       <h1 className="text-2xl font-bold mb-4">Select a Color</h1>
//       <ChromePicker
//         color={color}
//         onChange={(updatedColor) => setColor(updatedColor.hex)}
//       />
//       <button
//         className="mt-4 p-3 bg-green-500 text-white rounded-md"
//         onClick={() => navigate("/shape")}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default ColorPage;

// import React from "react";
// import { ChromePicker } from "react-color";
// import { useNavigate } from "react-router-dom";
// import { swirlingLogo } from "../assets/"; // Update the path to your image as needed

// const ColorPage = ({ color, setColor }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
//       <h1 className="text-2xl font-bold mb-4">Select a Color</h1>
//       <ChromePicker
//         color={color}
//         onChange={(updatedColor) => setColor(updatedColor.hex)}
//       />
//       <button
//         className="mt-4 p-3 bg-green-500 text-white rounded-md"
//         onClick={() => navigate("/shape")}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default ColorPage;

import React from "react";
import { ChromePicker } from "react-color";
import { useNavigate } from "react-router-dom";
import { swirlingLogo } from "../assets/";

const ColorPage = ({ color, setColor }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
      <h1 className="text-2xl font-bold mb-4">Select a Color</h1>
      <ChromePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
      />
      <button
        className="bg-cyan-500 mt-4 px-10 py-4 text-white rounded-full"
        onClick={() => navigate("/shape")}
      >
        Next
      </button>
    </div>
  );
};

export default ColorPage;
