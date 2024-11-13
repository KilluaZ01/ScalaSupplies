import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { assets } from "../assets/assets";

const GridDisplay = () => {
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
        <div className="col-span-3 row-span-3 row-start-3 bg-white drop-shadow-lg rounded-lg">
          5
        </div>
        <div className="col-span-5 row-span-3 col-start-4 row-start-3 bg-white drop-shadow-lg rounded-lg">
          6
        </div>
        <div className="col-span-8 row-span-3 row-start-6 bg-white drop-shadow-lg rounded-lg">
          7
        </div>
      </div>
    </div>
  );
};

export default GridDisplay;
