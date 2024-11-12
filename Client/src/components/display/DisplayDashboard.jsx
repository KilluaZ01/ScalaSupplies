import React from "react";
import SlidingTab from "../SlidingTab";
import Dropdown from "../Dropdown";

const DisplayDashboard = () => {
  return (
    <div>
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

export default DisplayDashboard;
