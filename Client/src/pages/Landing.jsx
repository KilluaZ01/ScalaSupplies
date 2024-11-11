import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col gap-12 h-screen items-center justify-center">
      <img className="w-1/3" src={assets.logo} alt="" />
      <div className="flex gap-4">
        <Link to="/signup">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </Link>

        <Link to="/login">
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
