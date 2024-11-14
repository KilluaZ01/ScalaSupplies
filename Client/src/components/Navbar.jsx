import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const activePage = useSelector((state) => state.navigation.activePage);

  const IconButton = ({ iconSrc, altText }) => (
    <button
      type="button"
      className="text-white bg-white hover:bg-[#eaeaea] drop-shadow-lg font-medium rounded-lg text-sm p-1.5 inline-flex items-center mr-2"
    >
      <img src={iconSrc} alt={altText} className="w-4 h-4" />
    </button>
  );

  return (
    <div className="w-full h-[10%] bg-white">
      <div className="w-full h-full flex items-center justify-between px-6">
        <p className="font-medium text-2xl text-gray-700">{activePage}</p>

        <Link to="/profile">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="flex items-center gap-1">
              <IconButton iconSrc={assets.search} altText="Search" />
              <IconButton iconSrc={assets.setting} altText="Settings" />
              <IconButton
                iconSrc={assets.notification}
                altText="Notifications"
              />
            </div>

            <div className="h-6 border-l border-gray-300 mx-2"></div>

            <div className="text-sm">
              <p className="font-medium text-gray-800">Arik Rai</p>
            </div>

            <img
              className="rounded-full h-6 w-6 object-cover"
              src={assets.facebookIcon}
              alt="User Profile"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
