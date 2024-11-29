"use client";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const UserProfile = () => {
  const [addresses, setAddresses] = useState([1]);

  const basicInfoInputs = [
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Country Code", type: "text", name: "countryCode" },
    { label: "Mobile Number", type: "text", name: "mobileno", required: true },
    { label: "Date of birth", type: "text", name: "dob" },
  ];

  const addressInputs = [
    {
      label: "Address",
      type: "text",
      name: "address",
      required: true,
      colSpan: true,
    },
    { label: "Country", type: "select", name: "country_id", required: true },
    { label: "State", type: "select", name: "state_id", required: true },
    { label: "City", type: "select", name: "city_id", required: true },
    {
      label: "Postal Code",
      type: "text",
      name: "pincode",
      required: true,
      maxLength: "6",
    },
  ];

  const handleAddAddress = () => {
    setAddresses([...addresses, addresses.length + 1]);
  };

  const handleRemoveAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  const renderInput = (input) => {
    const baseInputClasses =
      "w-full px-3 py-2 border border-gray-300 rounded-md";

    if (input.type === "select") {
      return (
        <select
          className={baseInputClasses}
          name={input.name}
          required={input.required}
        >
          <option value="">Select {input.label}</option>
        </select>
      );
    }

    return (
      <input
        type={input.type}
        className={baseInputClasses}
        name={input.name}
        required={input.required}
        maxLength={input.maxLength}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6">
          <div className="mb-6">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Profile Settings
            </h4>

            <form>
              {/* <div className="mb-8">
                <div className="flex items-center space-x-4 justify-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200"></div>
                  <div>
                    <h5 className="text-lg font-medium">Upload Photo</h5>
                    <p className="text-sm text-gray-500">
                      Max file size is 20mb
                    </p>
                    <div className="mt-2">
                      <label className="inline-block px-4 py-2 bg-[#d30000] text-white rounded-md cursor-pointer hover:bg-white hover:text-[#d30000] hover:border hover:border-[#d30000] transition-colors">
                        Browse
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="mb-6">
                <h5 className="text-xl font-medium mb-4">Basic Information</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {basicInfoInputs.map((input, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {input.label}
                      </label>
                      {renderInput(input)}
                    </div>
                  ))}
                </div>
              </div>

              {addresses.map((_, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-medium">Address</h5>
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveAddress(index)}
                        className="text-[#d30000] hover:bg-white hover:border hover:border-[#d30000] p-2 rounded-md transition-colors"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addressInputs.map((input, inputIndex) => (
                      <div
                        key={inputIndex}
                        className={input.colSpan ? "md:col-span-2" : ""}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {input.label}{" "}
                          {input.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        {renderInput(input)}
                      </div>
                    ))}
                  </div>
                  {index === addresses.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddAddress}
                      className="mt-4 flex items-center text-[#d30000] hover:bg-white hover:border hover:border-[#d30000] p-2 rounded-md transition-colors"
                    >
                      <FaPlus className="mr-2" />
                      Add Another Address
                    </button>
                  )}
                </div>
              ))}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#d30000] text-white rounded-md hover:bg-white hover:text-[#d30000] hover:border hover:border-[#d30000] transition-colors"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
