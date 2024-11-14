import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen md:flex-row">
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center px-6 overflow-hidden">
        <img
          className="object-cover w-full h-full max-h-screen"
          src={assets.loginArt}
          alt="Login Art"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <form className="max-w-md w-full mx-auto">
          <h1 className="font-semibold text-2xl mb-8">Create an Account</h1>
          <div className="flex flex-row mb-3 gap-2">
            <input
              type="text"
              id="firstName"
              className="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastName"
              className="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              className="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="bg-[#F7FBFF] focus:border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-start mb-4">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
            <label htmlFor="terms" className="ml-2 text-xs text-[#313957]">
              I agree with the
              <a href="#" className="pl-1 text-blue-800 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <Link to="/dashboard">
            <button
              type="submit"
              className="text-white mb-4 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create account
            </button>
          </Link>
          <div className="flex items-center mb-6 mt-3 px-8">
            <div className="flex-grow border-t border-[#CFDFE2]"></div>
            <p className="text-xs text-center mx-3">Or</p>
            <div className="flex-grow border-t border-[#CFDFE2]"></div>
          </div>
          <button
            type="button"
            className="flex flex-row mb-4 justify-center hover:bg-[#e8eeef] gap-2 items-center text-sm w-full p-2.5 shadow-lg bg-[#F3F9FA] rounded-md"
          >
            <img className="w-3.5" src={assets.googleIcon} alt="Google Icon" />
            Sign up with Google
          </button>
          <button
            type="button"
            className="flex flex-row mb-5 justify-center hover:bg-[#e8eeef] gap-2 items-center text-sm w-full p-2.5 shadow-lg bg-[#F3F9FA] rounded-md"
          >
            <img
              className="w-3.5"
              src={assets.facebookIcon}
              alt="Facebook Icon"
            />
            Sign up with Facebook
          </button>
          <p className="flex text-xs justify-center">
            Already have an account?
            <Link to="/login">
              <span className="underline ml-1 text-blue-800 cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
