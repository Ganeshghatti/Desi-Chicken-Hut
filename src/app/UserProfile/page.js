import React from "react";
import UserProfile from "../components/UserProfile/UserProfile.js";
import Navbar from "../components/Global Component/Navbar/Navbar.js";
import Footer from "../components/Global Component/Footer/Footer.js";

const page = () => {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default page;
