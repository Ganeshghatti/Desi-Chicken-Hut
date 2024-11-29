"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { BsGrid } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";

const DashboardSideBar = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: "/dashboard/products",
      name: "Products",
      icon: HiOutlineDocumentText,
    },
    {
      href: "/dashboard/products/create",
      name: "Upload Product",
      icon: IoCloudUploadOutline,
    }
  ];

  return (
    <div className="flex h-screen w-full border-r bg-background">
      <div className="flex w-full flex-col p-4 gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BsGrid className="w-6 h-6" />
          <span className="text-lg">Admin Dashboard</span>
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.href}
                className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === route.href
                    ? "bg-gray-200 text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <route.icon className="w-5 h-5" />
                <span>{route.name}</span>
              </Link>
            ))}
          </div>
          <Button onClick={() => signOut()} variant="outline"  className="rounded-full border border-red-600 bg-red-600/40  hover:bg-red-600/20 font-bold py-2 ">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
