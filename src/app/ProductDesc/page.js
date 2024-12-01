"use client";
import React from "react";
import ProductDesc from "../components/ProductDesc/ProductDesc";
import Navbar from "../components/Global Component/Navbar/Navbar.js";
import Footer from "../components/Global Component/Footer/Footer.js";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/api/products");
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log("Error in Product desc fetch");
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <ProductDesc product={product} />
      <Footer />
    </div>
  );
};

export default page;
