"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import app from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const ProductForm = ({ productId = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    quantity: "",
    discount: "",
  });
  const router = useRouter();

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pageLoading, setPageLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [previousImageRef, setPreviousImageRef] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (productId) {
        setPageLoading(true)
        try {
          const response = await axios.get(`/api/products/${productId}`);
          setPageLoading(false);
          setFormData(response.data);
          setPreviewImage(response.data.image);

          if (response.data.image) {
            const storage = getStorage(app);
            const imageRef = ref(storage, response.data.image);
            setPreviousImageRef(imageRef);
          }
        } catch (error) {
          toast.error("Failed to fetch product details");
        } finally {
          setPageLoading(false);
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);

      // Create instant preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const uploadImage = () => {
    return new Promise((resolve, reject) => {
      if (!image) {
        resolve(previewImage);
        return;
      }

      // Delete previous image if exists
      if (previousImageRef) {
        deleteObject(previousImageRef).catch(console.error);
      }

      const storage = getStorage(app);
      const storageRef = ref(
        storage,
        `product/${Date.now()}_${image.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("image upload progress", snapshot)
        },
        (error) => {
          toast.error("Image upload failed");
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Upload image first if a new one is selected
      const imageUrl = await uploadImage();

      const processedData = {
        ...formData,
        image: imageUrl,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        discount: Number(formData.discount),
      };

      if (productId) {
        await axios.put(`/api/products/${productId}`, processedData);
        toast.success("Product updated successfully");
        router.push("/dashboard/products");
      } else {
        await axios.post("/api/products", processedData);
        toast.success("Product created successfully");

        router.push("/dashboard/products");

        // Reset form
        setFormData({
          name: "",
          description: "",
          price: "",
          image: "",
          quantity: "",
          discount: "",
        });
        setPreviewImage(null);
        setImage(null);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-dvh w-full">
        <Loader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return (
    <section className="mt-10 w-full">
      <h2 className="text-2xl font-bold mb-4">
        {productId ? "Update Product" : "Upload Product"}
      </h2>
      <form
        className="w-full grid-cols-1 grid md:grid-cols-2 gap-8 text-2xl mt-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <Card className="py-4 shadow-sm">
            <CardContent className="flex flex-col gap-2">
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
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Enter product description"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="py-4 shadow-sm">
            <CardContent className="flex flex-col gap-2">
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
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <Card className="py-4 shadow-sm">
            <CardContent>
              <div>
                <Label className=" ">Upload Image</Label>
                <Input
                  id="image"
                  name="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={isUploading}
                />
                <Label htmlFor="image">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt="cover image"
                      width={500}
                      height={500}
                      className="w-full min-h-32 max-h-52 p-1 border border-accentGray/30 object-contain rounded-md"
                    />
                  ) : (
                    <div className="flex flex-col mt-2 items-center justify-center w-full h-44 border-2 border-accentNeon dark:border-accentGray border-dashed rounded-lg cursor-pointer bg-rtlLight dark:bg-rtlDark dark:hover:bg-rtlDark/50 hover:bg-gray-100 ">
                      <div className="flex flex-col h-32 items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-accentNeon"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-accentNeon ">
                          <span className="font-semibold">Click to upload</span>{" "}
                          image
                        </p>
                        <p className="text-xs text-accentNeon">
                          PNG, JPG (MAX. 800x400px)
                        </p>
                      </div>
                    </div>
                  )}
                </Label>
              </div>
            </CardContent>
          </Card>
          <Button type="submit" className="w-full">
            {productId ? "Update Product" : "Upload Product"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProductForm;
