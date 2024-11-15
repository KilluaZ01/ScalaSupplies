import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/navigationSlice";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.navigation.activePage);

  const handleItemClick = (item) => {
    dispatch(setActivePage(item));
  };

  const SidebarItem = ({ to, item, iconSrc }) => (
    <Link to={to}>
      <div
        className={`flex flex-row gap-4 mb-2 p-2 md:text-sm items-center cursor-pointer ${
          activeItem === item
            ? "bg-[#003DFF] text-white rounded-md md:text-sm"
            : "hover:bg-gray-100"
        }`}
        onClick={() => handleItemClick(item)}
      >
        <img
          src={iconSrc}
          alt={`${item} icon`}
          className={`md:w-4 ${activeItem === item ? "brightness-200" : ""}`}
        />
        <p>{item}</p>
      </div>
    </Link>
  );

  return (
    <div className="fixed flex flex-col h-full px-6 py-6">
      <img
        className="w-2/3 mb-10 mx-auto"
        src={assets.logo}
        alt="Company Logo"
      />

      <SidebarItem
        to="/dashboard"
        item="Dashboard"
        iconSrc={assets.dashboard}
      />
      <SidebarItem
        to="/dashboard?tab=product"
        item="Shipment"
        iconSrc={assets.shipment}
      />
      <SidebarItem
        to="/dashboard?tab=inventory"
        item="Inventory"
        iconSrc={assets.inventory}
      />
      <SidebarItem
        to="/dashboard?tab=orders"
        item="Orders"
        iconSrc={assets.orders}
      />
      <SidebarItem
        to="/dashboard?tab=customers"
        item="Customers"
        iconSrc={assets.customers}
      />

      <div className="border-t border-[#c5c6c850] my-2 mr-6"></div>

      <SidebarItem
        to="/dashboard?tab=help"
        item="Help & Support"
        iconSrc={assets.help}
      />
      <SidebarItem
        to="/dashboard?tab=settings"
        item="Settings"
        iconSrc={assets.setting}
      />

      <div className="mt-auto flex items-center gap-4 cursor-pointer">
        <img
          className="rounded-full h-6 w-6 object-cover"
          src={assets.pfp}
          alt="User Profile"
        />
        <div>
          <p className="text-sm font-medium">Arik Rai</p>
          <p className="text-[10px] text-gray-600">raiarik97@gmail.com</p>
        </div>
        <GoSignOut className="ms-4 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
