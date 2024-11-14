import React from "react";
import Dashboard_Nav from "../components/Navbar";
import Dashboard_Sidebar from "../components/Sidebar";
import Display from "../components/display/Display";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-row py-4">
      <div className="w-[20%] h-full">
        <Dashboard_Sidebar />
      </div>

      <div className="h-full w-[80%] flex flex-col">
        <Dashboard_Nav />
        <div className="w-full flex flex-col px-2 pb-2">
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
