"use client";

import { useState } from "react";

export default function AuthPage() {
  // States
  const [rememberMe, setRememberMe] = useState(false);

  // Handlers
  const handleSignIn = () => {
    console.log("Sign In");
  };
  const handleUseSignInCode = () => {
    console.log("Use Sign In Code");
  };
  const handleForgottenPassword = () => {
    console.log("Forgotten Password");
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };

  return (
    <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* Logo */}
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-10 py-5">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </nav>

        {/* Sign In */}
        <div className="bg-black bg-opacity-75 w-1/2 h-3/4 mx-auto flex flex-col justify-start">
          <div className="px-10 py-7">
            <h4 className="text-white text-3xl font-sans">
              <b>Sign In</b>
            </h4>
          </div>

          {/* Email input  */}
          <div className="flex justify-center py-2">
            <input
              type="text"
              placeholder="   Email or mobile number"
              className="rounded-sm h-12 w-4/5 font-sans bg-zinc-900 text-white border-2"
            />
          </div>

          {/* Password input */}
          <div className="flex justify-center py-2">
            <input
              type="text"
              placeholder="   Password"
              className="rounded-sm h-12 w-4/5 font-sans bg-zinc-900 text-white border-2"
            />
          </div>

          {/* Sign In button */}
          <div className="flex justify-center py-2">
            <button
              className="bg-red-600 text-white w-4/5 h-12 rounded-lg font-sans"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-zinc-400">OR</p>
          </div>

          {/* Use Sign In Code button */}
          <div className="flex justify-center py-2">
            <button
              className="bg-zinc-800 text-white w-4/5 h-12 rounded-lg font-sans"
              onClick={handleUseSignInCode}
            >
              Use a Sign-In Code
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-center py-2">
            <p
              className="text-white cursor-pointer"
              onClick={handleForgottenPassword}
            >
              Forgot Password?
            </p>
          </div>

          {/* Remember Me */}
          <div className="flex items-center px-8">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
                onClick={() => {
                  setRememberMe((prevRememberMe) => !prevRememberMe);
                }}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px font-light text-white cursor-pointer select-none"
              htmlFor="check"
            >
              Remember Me
            </label>
          </div>

          {/* Sign Up */}
          <div className="flex justify-start px-11">
            <p className="text-zinc-300">New to Netflix?</p>
            <p
              className="text-white pl-1 cursor-pointer hover:underline"
              onClick={handleSignUp}
            >
              Sign up now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
