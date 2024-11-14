import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none"
        >
          Week
          <FaCaretDown className="ml-2" />
        </button>
        <button className="px-4 py-2 bg-blue-700 text-white drop-shadow-lg rounded-md hover:bg-blue-600 focus:outline-none flex items-center">
          <IoAdd className="mr-2" />
          New Shipment
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            top: "100%", // Positions it directly below the button
            zIndex: 10, // Ensures it appears over other elements
          }}
        >
          <ul>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
              Week 1
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
              Week 2
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
              Week 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
