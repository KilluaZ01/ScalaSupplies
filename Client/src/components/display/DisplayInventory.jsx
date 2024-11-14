import React from "react";
import Dropdown from "../Dropdown";
import SlidingTab from "../SlidingTab";
import GridDisplay from "../GridDisplay";
import GridInventory from "../GridInventory";

const DisplayInventory = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-between p-4">
        <div>
          <SlidingTab />
        </div>
        <div className="relative">
          <Dropdown />
        </div>
      </div>
      <div>
        <GridInventory />
      </div>
    </div>
  );
};

export default DisplayInventory;
