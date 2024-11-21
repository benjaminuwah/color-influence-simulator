import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { flavourItems } from "../data";
import { swirlingLogo } from "../assets";

// const flavors = [
//   { label: "Sweet", value: "Mild, Creamy, Floral." },
//   { label: "Sour", value: "Tangy, Zesty, Sharp." },
//   { label: "Bitter", value: "Earthy, Deep, Balanced." },
//   { label: "Salt", value: "Rich, Intense, Oceanic." },
//   { label: "Umami", value: "Meaty, Enriching, Savory." },
// ];

const FlavorPage = ({ setFlavor }) => {
  const navigate = useNavigate();
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const handleSelect = (flavor) => {
    setSelectedFlavor(flavor);
    // navigate("/color");
  };

  const handleNext = () => {
    if (selectedFlavor) {
      navigate("/color"); // Navigate to the color selection page
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <img src={swirlingLogo} width={100} alt="Logo" className="rounded-xl" />
      <h1 className="text-2xl font-bold mb-4">
        Choose a flavor for your yogurt
      </h1>
      <div className="flex flex-col space-y-2">
        {flavourItems.map((flavor, index) => (
          <button
          key={index}
          className={`p-3 ${
            selectedFlavor === flavor.title ? "bg-cyan-500" : "bg-gray-700"
          } text-white text-2xl rounded`}
          onClick={() => handleSelect(flavor.title)}
        >
          {flavor.title}
          <p className="text-sm text-gray-300">{flavor.description}</p>
        </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedFlavor}
        className={`mt-4 px-4 py-2 rounded ${
          selectedFlavor
            ? "bg-cyan-500 hover:bg-green-700 text-white py-4 px-20 rounded-full"
            : "bg-gray-500 text-gray-300 cursor-not-allowed py-4 px-20 rounded-full"
        }`}>
        Next
      </button>
    </div>
  );
};

export default FlavorPage;
