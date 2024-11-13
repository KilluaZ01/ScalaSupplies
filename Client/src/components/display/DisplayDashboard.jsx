import React from "react";
import SlidingTab from "../SlidingTab";
import Dropdown from "../Dropdown";
import GridDisplay from "../GridDisplay";

const DisplayDashboard = () => {
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
      <div>
        <GridDisplay />
      </div>
    </div>
  );
};

export default DisplayDashboard;
