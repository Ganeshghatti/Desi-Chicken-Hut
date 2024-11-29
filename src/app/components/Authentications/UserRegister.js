import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function UserRegister({ onClose, onLoginClick }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
    agreeTerms: false,
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.agreeTerms) {
      toast.info("You must agree to the Terms and Conditions");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.mobileNumber,
      });

      if (response.status == 201) {
        toast.success("Registration successful");
        onLoginClick();
      }
    } catch (err) {
      // Handle registration error
      const errorMessage = err.response?.data?.error || "Registration failed";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email input */}
          <div className="flex flex-col space-y-3">
            <label className="text-base font-medium text-white">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
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
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
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
            disabled={isLoading}
            className={`w-full text-black py-3 rounded-md transition-colors text-lg font-medium 
              ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#61dafb] hover:bg-[#4fa8c2]"
              }`}
          >
            {isLoading ? "Registering..." : "Register"}
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
