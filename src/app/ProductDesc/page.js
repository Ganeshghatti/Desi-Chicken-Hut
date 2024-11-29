import React from "react";
import ProductDesc from "../components/ProductDesc/ProductDesc";
import Navbar from "../components/Global Component/Navbar/Navbar.js";
import Footer from "../components/Global Component/Footer/Footer.js";

const page = () => {
  return (
    <div>
      <Navbar />
      <ProductDesc />
      <Footer />
    </div>
  );
};

export default page;
