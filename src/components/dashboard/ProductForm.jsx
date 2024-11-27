"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import TextEditor from "../textEditor/textEditor";

const ProductForm = ({ productId = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    quantity: "",
    category: "",
    discount: "",
  });

  useEffect(() => {
    // If productId is provided, fetch the product details for editing
    const fetchProductDetails = async () => {
      if (productId) {
        try {
          const response = await axios.get(`/api/products/${productId}`);
          setFormData(response.data);
        } catch (error) {
          toast.error("Failed to fetch product details");
        }
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert numeric fields to numbers
      const processedData = {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        discount: Number(formData.discount),
      };

      if (productId) {
        // Update existing product
        await axios.put(`/api/products/${productId}`, processedData);
        toast.success("Product updated successfully");
      } else {
        const res = await axios.post("/api/products", processedData);
        toast.success("Product created successfully");

        // Reset form after successful creation
        setFormData({
          name: "",
          description: "",
          price: "",
          image: "",
          quantity: "",
          category: "",
          discount: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const CATEGORIES = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Kitchen",
    "Toys",
    "Sports",
    "Beauty",
  ];

  return (
    <Card className="w-full text-2xl mt-10 mx-auto ">
      <CardHeader>
        <CardTitle>{productId ? "Update Product" : "Create Product"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
            />
          </div>
<Input type="file" name="image" accept="image/*" />
          <div>
            <Label htmlFor="description">Description</Label>
            {/* <TextEditor
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter product description"
              
            /> */}
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter product description"
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="Enter price"
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="0"
              placeholder="Enter quantity"
            />
          </div>

          <div>
            <Label>Category</Label>
            <Select
              value={formData.category}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="discount">Discount (%)</Label>
            <Input
              id="discount"
              name="discount"
              type="number"
              value={formData.discount}
              onChange={handleChange}
              min="0"
              max="100"
              placeholder="Enter discount percentage"
            />
          </div>

          <Button type="submit" className="w-full">
            {productId ? "Update Product" : "Create Product"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProductForm;
