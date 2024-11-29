import React from "react";
import DashboardSideBar from "@/components/dashboard/dashboardSidebar";
import { auth } from "../auth";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-[230px] hidden sm:block fixed  w-full">
        <DashboardSideBar />
      </div>
      <div className="ml-0 md:ml-[230px] p-4 py-2">{children}</div>
    </div>
  );
};

export default layout;
