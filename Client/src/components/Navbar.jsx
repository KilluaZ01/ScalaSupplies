import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const activePage = useSelector((state) => state.navigation.activePage);

  return (
    <div className="w-full h-[10%]">
      <div className=" w-full h-full flex items-center justify-between px-6">
        <p className="font-medium text-2xl">{activePage}</p>
        <Link to="/profile">
          <div className="flex flex-row items-center gap-4 cursor-pointer">
            <div>
              <button
                type="button"
                class="text-white bg-white hover:bg-[#eaeaea] drop-shadow-lg font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 "
              >
                <img src={assets.search} alt="" />
              </button>
              <button
                type="button"
                class="text-white bg-white hover:bg-[#eaeaea] drop-shadow-lg font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 "
              >
                <img src={assets.setting} alt="" />
              </button>
              <button
                type="button"
                class="text-white bg-white hover:bg-[#eaeaea] drop-shadow-lg font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 "
              >
                <img src={assets.notification} alt="" />
              </button>
            </div>
            <div className="h-6 border-l border-gray-400 mx-2"></div>
            <div className="">
              <p className="text-sm font-regular">Arik Rai</p>
            </div>
            <img
              className="rounded-full h-[25px] w-[25px] object-cover"
              src={assets.facebookIcon}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
