// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Container_1, Container_2, Container_3, Container_4 } from "../assets";

// const containers = [
//   { label: "Parfait Cup", src: Container_1 },
//   { label: "Jar", src: Container_2 },
//   { label: "Glass", src: Container_3 },
//   { label: "Bowl", src: Container_4 },
// ];

// const ContainerPage = ({ setContainer }) => {
//   const navigate = useNavigate();

//   const handleSelectContainer = (container) => {
//     setContainer(container); // Save the selected container
//     navigate("/result"); // Go to the result page
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-2xl font-bold mb-4">Choose a Container</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {containers.map((container, index) => (
//           <button
//             key={index}
//             onClick={() => handleSelectContainer(container.src)}
//             className="flex flex-col items-center space-y-2"
//           >
//             <img
//               src={container.src}
//               alt={container.label}
//               className="w-32 h-32 object-contain"
//             />
//             <span>{container.label}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContainerPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container_1,
  Container_2,
  Container_3,
  Container_4,
  swirlingLogo,
} from "../assets";

const containers = [
  { label: "Parfait Cup", src: Container_1 },
  { label: "Jar", src: Container_2 },
  { label: "Glass", src: Container_3 },
  { label: "Bowl", src: Container_4 },
];

const ContainerPage = ({ setContainer }) => {
  const navigate = useNavigate();

  const handleSelectContainer = (container) => {
    setContainer(container); // Save the selected container
    navigate("/result"); // Go to the result page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />

      <h1 className="text-2xl font-bold mb-4">Choose a Container</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {containers.map((container, index) => (
          <button
            key={index}
            onClick={() => handleSelectContainer(container.src)}
            className="flex flex-col items-center space-y-2">
            <img
              src={container.src}
              alt={container.label}
              className="w-32 h-32 object-contain"
            />
            <span>{container.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContainerPage;
