import React from "react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { assets } from "../assets/assets";

const TopCountriesBySales = () => {
  const salesData = [
    {
      country: "China",
      sales: "12.50k",
      flag: <img src={assets.china} alt="China Flag" className="w-6 h-4" />, // Replace with China SVG
      trend: "up",
    },
    {
      country: "USA",
      sales: "9.25k",
      flag: <img src={assets.usa} alt="USA Flag" className="w-6 h-4" />, // Replace with USA SVG
      trend: "up",
    },
    {
      country: "India",
      sales: "8.92k",
      flag: <img src={assets.india} alt="India Flag" className="w-6 h-4" />, // Replace with India SVG
      trend: "down",
    },
    {
      country: "Canada",
      sales: "8.92k",
      flag: <img src={assets.canada} alt="Canada Flag" className="w-6 h-4" />, // Canada Flag SVG
      trend: "down",
    },
    {
      country: "France",
      sales: "7.20k",
      flag: <img src={assets.france} alt="France Flag" className="w-6 h-4" />, // France Flag SVG
      trend: "up",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-white drop-shadow-lg rounded-lg p-4">
      <h1 className="text-sm font-medium">Top Countries by Sales</h1>
      <div className="border-t border-gray-300 my-2"></div>
      <p className="text-2xl font-semibold">34.89k</p>
      <p className="text-xs text-gray-400 mb-4">Since Last Week</p>
      {salesData.map((data, index) => (
        <div key={index} className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-2xl mr-2">{data.flag}</span>{" "}
            {/* Display the flag as an SVG */}
            <p className="text-base font-medium">{data.country}</p>
          </div>
          <div className="flex items-center space-x-10">
            {data.trend === "up" ? (
              <div className="flex items-center text-green-500 text-sm">
                <FaArrowTrendUp />
              </div>
            ) : (
              <div className="flex items-center text-red-500 text-sm">
                <FaArrowTrendDown />
              </div>
            )}
            <p className="text-base font-semibold">{data.sales}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCountriesBySales;
