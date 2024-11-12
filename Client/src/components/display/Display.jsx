import React from "react";
import { useSelector } from "react-redux";
import Display_Dashboard from "./DisplayDashboard";
import Display_Inventory from "./DisplayInventory";
import Display_Shipment from "./DisplayShipment";
import Display_Orders from "./DisplayOrders";
import Display_Customers from "./DisplayCustomers";
import Display_Help from "./DispalyHelp";
import Display_Settings from "./DisplaySettings";

const Display = () => {
  const activePage = useSelector((state) => state.navigation.activePage);

  return (
    <div className="h-full w-full rounded bg-[#F9F9F9]">
      {activePage === "Dashboard" && <Display_Dashboard />}
      {activePage === "Inventory" && <Display_Inventory />}
      {activePage === "Shipment" && <Display_Shipment />}
      {activePage === "Orders" && <Display_Orders />}
      {activePage === "Customers" && <Display_Customers />}
      {activePage === "Help & Support" && <Display_Help />}
      {activePage === "Settings" && <Display_Settings />}
    </div>
  );
};

export default Display;
