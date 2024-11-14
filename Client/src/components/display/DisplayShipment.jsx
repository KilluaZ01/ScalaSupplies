import React from "react";
import SlidingTab from "../SlidingTab";
import Dropdown from "../Dropdown";
import GridShipment from "../GridShipment";

const DisplayShipment = () => {
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
        <GridShipment />
      </div>
    </div>
  );
};

export default DisplayShipment;
