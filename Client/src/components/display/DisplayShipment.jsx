import React from "react";
import SlidingTab from "../SlidingTab";
import Dropdown from "../Dropdown";

const DisplayShipment = () => {
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

export default DisplayShipment;
