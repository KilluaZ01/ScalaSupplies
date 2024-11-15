import React, { useState } from "react";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaFileExport,
  FaFilter,
} from "react-icons/fa6";
import { assets } from "../assets/assets";
import { FaCaretDown } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import MonthlyBarChart from "./charts/MonthlyBarChart";
import SalesTrendChart from "./charts/SalesTrendChart";
import OrderTable from "./OrderTable";
import StockAvailability from "./StockAvailability";
import InventoryTable from "./InventoryTable";

const GridInventory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);

  return (
    <div>
      <div className="h-full w-full grid grid-cols-8 grid-rows-2 gap-4 px-5 pb-5">
        <div className="col-span-2 row-span-1 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Total Inventory</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.truck}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">$520,000</p>
        </div>
        <div className="col-span-2 row-span-1 col-start-3 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Units on Hand</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.check}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">1,200</p>
        </div>

        <div className="col-span-2 row-span-1 row-start-2 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Units on Order</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.money}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">3,000</p>
        </div>

        <div className="col-span-2 row-span-1 row-start-2 col-start-1 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Units to Reorder</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.pack}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">500</p>
        </div>
        <div className="col-span-4 row-span-2 col-start-5 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <StockAvailability />
        </div>

        <div className="col-span-8 bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center px-4 py-2 rounded-t-lg bg-gray-200 flex-row justify-between">
            <h1 className="font-medium text-sm">Reorder Recommendations</h1>
            <div>
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <button className="flex items-center text-xs px-3 py-1 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none">
                    <FaFilter className="mr-2" />
                    Filter
                  </button>

                  <button className="flex items-center p-2 bg-white h-6 w-6 text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none">
                    <SlOptions />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export default GridInventory;
