import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex flex-col w-1/2 pl-40 py-32">
        <div>
          <h1 className="font-semibold text-3xl">Login</h1>
        </div>
        <div>
          <form class="max-w-md my-10">
            <div class="mb-5">
              <input
                type="email"
                id="email"
                class="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="Email Address"
                required
              />
            </div>
            <div class="mb-5">
              <input
                type="email"
                id="email"
                class="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="Password"
                required
              />
            </div>
            <p className="flex text-sm justify-end mb-5 underline text-blue-800 cursor-pointer">
              Forgot Password?
            </p>
            <Link to="/dashboard">
              <button
                type="submit"
                class="text-white mb-5 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </Link>
            <div className="flex items-center mb-8 mt-3 px-10">
              <div className="flex-grow border-t border-[#CFDFE2]"></div>
              <p className="forgot text-[12px] text-center mx-4">Or</p>
              <div className="flex-grow border-t border-[#CFDFE2]"></div>
            </div>
            <button
              type="button"
              className="flex flex-row mb-5 justify-center hover:bg-[#e8eeef] gap-3 items-center text-sm w-full p-3 shadow-lg bg-[#F3F9FA]  rounded-[10px]"
            >
              <img className="w-4" src={assets.googleIcon} alt="" />
              Sign in with Google
            </button>
            <button
              type="button"
              className="flex flex-row mb-6 justify-center hover:bg-[#e8eeef] gap-3 items-center text-sm w-full p-3 shadow-lg bg-[#F3F9FA]  rounded-[10px]"
            >
              <img className="w-4" src={assets.facebookIcon} alt="" />
              Sign in with Facebook
            </button>
            <p className="flex text-sm justify-center">
              Don't have an account?
              <Link to="/signup">
                <span className="underline ml-1 text-blue-800 cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center px-8">
        <img
          className="object-cover w-full h-full"
          src={assets.loginArt}
          alt="Login Art"
        />
      </div>
    </div>
  );
};

export default Login;
