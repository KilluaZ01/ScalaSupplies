import React from "react";
import Dropdown from "../Dropdown";
import SlidingTab from "../SlidingTab";

const DisplayInventory = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row justify-between p-6">
        <div>
          <SlidingTab />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default DisplayInventory;
