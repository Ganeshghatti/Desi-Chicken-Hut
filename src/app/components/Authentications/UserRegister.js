import React from "react";

function UserRegister({ onClose, onLoginClick }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    onLoginClick();
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[1000]"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-[#323232] p-8 rounded-lg w-[400px] max-w-[90%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Join as a User</h2>
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

          {/* Mobile Number input */}
          <div className="flex flex-col space-y-3">
            <label className="text-base font-medium text-white">
              Mobile Number:
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-[#424242] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#61dafb] focus:border-transparent text-white text-lg"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Terms checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="agree"
              className="w-5 h-5 bg-[#424242] border-gray-600 rounded focus:ring-[#61dafb]"
              required
            />
            <label htmlFor="agree" className="text-base text-white">
              I agree to{" "}
              <a
                href="#"
                className="text-[#61dafb] hover:text-[#4fa8c2] transition-colors"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-[#61dafb] text-black py-3 rounded-md hover:bg-[#4fa8c2] transition-colors text-lg font-medium"
          >
            Register
          </button>

          {/* Login link */}
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              onClick={handleLoginLinkClick}
              className="text-[#61dafb] hover:text-[#4fa8c2] transition-colors"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
