import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex w-1/2 justify-center items-center px-8">
        <img
          className="object-cover w-full h-full"
          src={assets.loginArt}
          alt="Login Art"
        />
      </div>
      <div className="flex flex-col w-1/2 pl-40 py-20">
        <div>
          <h1 className="font-semibold text-3xl">Create an Account</h1>
        </div>
        <div>
          <form class="max-w-md my-10">
            <div class="flex flex-row mb-5 gap-2">
              <input
                type="text"
                id="firstName"
                class="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                id="lastName"
                class="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="Last Name"
                required
              />
            </div>
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
                type="password"
                id="password"
                class="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="Password"
                required
              />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="terms"
                className="ms-2 text-sm font-medium text-[#313957]"
              >
                I agree with the
                <a href="" className="pl-1 text-blue-700 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <Link to="/login">
              <button
                type="submit"
                class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create account
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
              Sign up with Google
            </button>
            <button
              type="button"
              className="flex flex-row mb-6 justify-center hover:bg-[#e8eeef] gap-3 items-center text-sm w-full p-3 shadow-lg bg-[#F3F9FA]  rounded-[10px]"
            >
              <img className="w-4" src={assets.facebookIcon} alt="" />
              Sign up with Facebook
            </button>
            <p className="flex text-sm justify-center">
              Already have an account?
              <Link to="/login">
                <span className="pl-1 text-blue-700 hover:underline">
                  Sign in
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
