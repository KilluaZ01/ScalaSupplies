import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/navigationSlice"; // Adjust path as needed
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.navigation.activePage);

  const handleItemClick = (item) => {
    dispatch(setActivePage(item));
  };

  return (
    <div className="flex px-6 py-4 h-full">
      <div className="h-full px-3 py-4 overflow-y-auto flex flex-col gap-2">
        <img className="w-[200px] mb-10" src={assets.logo} alt="" />

        <Link to="/dashboard">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Dashboard"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Dashboard")}
          >
            <img
              src={assets.dashboard}
              alt=""
              className={`${
                activeItem === "Dashboard" ? "brightness-200" : ""
              }`}
            />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link to="/dashboard?tab=product">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Shipment"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Shipment")}
          >
            <img
              src={assets.shipment}
              alt=""
              className={`${activeItem === "Shipment" ? "brightness-200" : ""}`}
            />
            <p>Shipment</p>
          </div>
        </Link>

        <Link to="/dashboard?tab=inventory">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Inventory"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Inventory")}
          >
            <img
              src={assets.inventory}
              alt=""
              className={`${
                activeItem === "Inventory" ? "brightness-200" : ""
              }`}
            />
            <p>Inventory</p>
          </div>
        </Link>

        <Link to="/dashboard?tab=orders">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Orders"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Orders")}
          >
            <img
              src={assets.orders}
              alt=""
              className={`${activeItem === "Orders" ? "brightness-200" : ""}`}
            />
            <p>Orders</p>
          </div>
        </Link>

        <Link to="/dashboard?tab=customers">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Customers"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Customers")}
          >
            <img
              src={assets.customers}
              alt=""
              className={`${
                activeItem === "Customers" ? "brightness-200" : ""
              }`}
            />
            <p>Customers</p>
          </div>
        </Link>

        <div className="border-t border-[#c5c6c850] my-4 mr-6"></div>

        <Link to="/dashboard?tab=help">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Help & Support"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Help & Support")}
          >
            <img
              src={assets.help}
              alt=""
              className={`${
                activeItem === "Help & Support" ? "brightness-200" : ""
              }`}
            />
            <p>Help & Support</p>
          </div>
        </Link>

        <Link to="/dashboard?tab=settings">
          <div
            className={`flex flex-row gap-4 p-3 items-center cursor-pointer ${
              activeItem === "Settings"
                ? "bg-[#003DFF] text-white rounded-md"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleItemClick("Settings")}
          >
            <img
              src={assets.setting}
              alt=""
              className={`${activeItem === "Settings" ? "brightness-200" : ""}`}
            />
            <p>Settings</p>
          </div>
        </Link>
        <div className="mt-auto flex flex-row items-center gap-3">
          <img
            className="rounded-full h-[25px] w-[25px] object-cover"
            src={assets.facebookIcon}
          />
          <div>
            <p className="text-md">Arik Rai</p>
            <p className="text-xs text-gray-600">raiarik97@gmail.com</p>
          </div>
          <GoSignOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
