"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";

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
    },
    {
      href: "/dashboard/user",
      name: "Users",
      icon: FiUsers,
    },
    {
      href: "/dashboard/category",
      name: "Categories",
      icon: BsGrid,
    },
    {
      href: "/dashboard/newsletter",
      name: "Subscribed",
      icon: MdOutlineEmail,
    },
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
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <route.icon className="w-5 h-5" />
                <span>{route.name}</span>
              </Link>
            ))}
          </div>
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
