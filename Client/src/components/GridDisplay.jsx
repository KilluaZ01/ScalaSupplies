import React, { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { assets } from "../assets/assets";
import { FaCaretDown } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import MonthlyBarChart from "./charts/MonthlyBarChart";
import SalesTrendChart from "./charts/SalesTrendChart";
import OrderTable from "./OrderTable";

const GridDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);

  return (
    <div>
      <div className="h-full w-full grid grid-cols-8 grid-rows-8 gap-4 px-5 pb-5">
        <div className="col-span-2 row-span-2 p-5 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm mt-1">Total Shipments</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md bg-white p-1"
              src={assets.truck}
              alt=""
            />
          </div>
          <p className="font-semibold text-2xl">71.21</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-xs text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-red-300 text-red-700 text-xs font-semibold rounded-2xl px-2 py-1">
              -3.2%
              <FaArrowTrendDown />
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 bg-white drop-shadow-lg rounded-lg p-5 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm mt-1">Total Orders</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md bg-white p-1"
              src={assets.pack}
              alt=""
            />
          </div>
          <p className="font-semibold text-2xl">92</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-xs text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-green-300 text-green-600 text-xs font-semibold rounded-2xl px-2 py-1">
              +9.3%
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col col-span-2 row-span-2 col-start-5 bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm mt-1">Revenue</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md bg-white p-1"
              src={assets.money}
              alt=""
            />
          </div>
          <p className="font-semibold text-2xl">$ 13.71K</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-xs text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-red-300 text-red-700 text-xs font-semibold rounded-2xl px-2 py-1">
              -1.7%
              <FaArrowTrendDown />
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col col-span-2 row-span-2 col-start-7 bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm mt-1">Delivered</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md bg-white p-1"
              src={assets.check}
              alt=""
            />
          </div>
          <p className="font-semibold text-2xl">140</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-xs text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-green-300 text-green-600 text-xs font-semibold rounded-2xl px-2 py-1">
              +4.7%
              <FaArrowTrendUp />
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-4 row-start-3 bg-white drop-shadow-lg rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center px-4 py-2 rounded-t-lg bg-gray-200 flex-row justify-between">
              <h1 className="font-medium">Total Sales</h1>
              <div>
                <div className="relative">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center px-3 py-1 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none"
                    >
                      Monthly
                      <FaCaretDown className="ml-2" />
                    </button>
                    <button className="flex items-center p-2 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none">
                      <SlOptions />
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
                      <ul>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          January
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          Febraury
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          June
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3 pl-4">
              <p className="font-semibold text-2xl">71.21</p>
              <div className="flex items-center justify-between ">
                <p className="text-xs text-slate-400 font-normal">
                  vs last year
                </p>
                <div className="flex flex-row items-center gap-2 bg-green-300 text-green-600 text-xs font-semibold rounded-2xl px-2 py-1">
                  +4.7%
                  <FaArrowTrendUp />
                </div>
              </div>
              <MonthlyBarChart />
            </div>
          </div>
        </div>
        <div className="col-span-5 row-span-4 col-start-4 row-start-3 bg-white drop-shadow-lg rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center px-4 py-2 rounded-t-lg bg-gray-200 flex-row justify-between">
              <h1 className="font-medium">Total Sales</h1>
              <div>
                <div className="relative">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={toggleDropdown1}
                      className="flex items-center px-3 py-1 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none"
                    >
                      Monthly
                      <FaCaretDown className="ml-2" />
                    </button>
                    <button className="flex items-center p-2 bg-white text-gray-600 rounded-md drop-shadow-lg hover:bg-slate-100 focus:outline-none">
                      <SlOptions />
                    </button>
                  </div>
                  {isOpen1 && (
                    <div
                      className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        top: "100%",
                        zIndex: 10,
                      }}
                    >
                      <ul>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          January
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          Febraury
                        </li>
                        <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                          June
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-3 pl-4">
              <p className="font-semibold text-2xl">71.21</p>
              <div className="flex items-center justify-between ">
                <p className="text-xs text-slate-400 font-normal">
                  vs last year
                </p>
                <div className="flex flex-row items-center gap-2 bg-red-300 text-red-700 text-xs font-semibold rounded-2xl px-2 py-1">
                  -3.2%
                  <FaArrowTrendDown />
                </div>
              </div>
              <SalesTrendChart />
            </div>
          </div>
        </div>
        <div className="col-span-8 row-span-2 row-start-7 bg-white drop-shadow-lg rounded-lg overflow-y-auto max-h-96">
          {/* Add your table content here */}
          <OrderTable />
        </div>{" "}
      </div>
    </div>
  );
};

export default GridDisplay;
