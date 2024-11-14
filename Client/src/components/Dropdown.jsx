import React, { useState, useRef, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-2 text-sm bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle week selection dropdown"
        >
          Week
          <FaCaretDown className="ml-2" />
        </button>
        <button className="px-3 py-2 text-sm bg-blue-700 text-white drop-shadow-lg rounded-md hover:bg-blue-600 focus:outline-none flex items-center">
          <IoAdd className="mr-2" />
          New Shipment
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            top: "100%",
            zIndex: 10,
          }}
        >
          <ul className="py-1">
            {["Week 1", "Week 2", "Week 3"].map((week, index) => (
              <li
                key={index}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close on selection
              >
                {week}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
