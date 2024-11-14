import React, { useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { assets } from "../assets/assets";
import { FaCaretDown } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import MonthlyBarChart from "./charts/MonthlyBarChart";
import SalesTrendChart from "./charts/SalesTrendChart";
import OrderTable from "./OrderTable";

const GridInventory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);

  return (
    <div>
      <div className="h-full w-full grid grid-cols-8 grid-rows-3 gap-4 px-5 pb-5">
        <div className="col-span-2 row-span-1 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Total Shipments</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.truck}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">71.21</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-[10px] text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-red-300 text-red-700 text-[10px] font-medium rounded-2xl px-2 py-1">
              -3.2%
              <FaArrowTrendDown />
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 col-start-3 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Total Orders</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.pack}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">92</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-[10px] text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-green-300 text-green-600 text-[10px] font-semibold rounded-2xl px-2 py-1">
              +9.3%
              <FaArrowTrendUp />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 col-start-5 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Revenue</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.money}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">$ 13.71K</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-[10px] text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-red-300 text-red-700 text-[10px] font-semibold rounded-2xl px-2 py-1">
              -1.7%
              <FaArrowTrendDown />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 col-start-7 p-4 flex flex-col bg-white drop-shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-xs mt-1">Delivered</h3>
            <img
              className="drop-shadow-lg shadow-sm rounded-md h-7 w-7 bg-white p-1"
              src={assets.check}
              alt=""
            />
          </div>
          <p className="font-semibold text-xl">140</p>
          <div className="flex items-center justify-between">
            <p className="mt-2 text-[10px] text-slate-400 font-normal">
              vs last week
            </p>
            <div className="flex flex-row items-center gap-2 bg-green-300 text-green-600 text-[10px] font-semibold rounded-2xl px-2 py-1">
              +4.7%
              <FaArrowTrendUp />
            </div>
          </div>
        </div>

        <div className="col-span-8 bg-white drop-shadow-lg rounded-lg">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default GridInventory;
