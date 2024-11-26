"use client";
import React, { useState } from "react";
import UserRegister from "./UserRegister";

function UserLoginPage({ onClose }) {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegister(true);
  };

  const handleLoginReturn = () => {
    setShowRegister(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
        <div className="bg-[#323232] p-8 rounded-lg w-[400px] max-w-[90%] relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            ×
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to continue</p>
          </div>

          <form className="space-y-6">
            {/* Email input */}
            <div className="flex flex-col space-y-3">
              <label className="text-base font-medium text-white">Email:</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-[#424242] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:border-transparent text-white text-lg"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password input */}
            <div className="flex flex-col space-y-3">
              <label className="text-base font-medium text-white">
                Password:
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-[#424242] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:border-transparent text-white text-lg"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-5 h-5 bg-[#424242] border-gray-600 rounded focus:ring-[#61dafb]"
              />
              <label htmlFor="rememberMe" className="text-base text-white">
                Remember Me
              </label>
            </div>

            {/* Forgot Password link */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-[#61dafb] hover:text-[#4fa8c2] transition-colors text-base"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[#61dafb] text-black py-3 rounded-md hover:bg-[#4fa8c2] transition-colors text-lg font-medium"
            >
              Login
            </button>

            {/* Sign up link */}
            <p className="text-center text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={handleRegisterClick}
                className="text-[#61dafb] hover:text-[#4fa8c2] transition-colors"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Register Modal */}
      {showRegister && (
        <UserRegister onClose={onClose} onLoginClick={handleLoginReturn} />
      )}
    </>
  );
}

export default UserLoginPage;
