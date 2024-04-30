import DashboardTopNavbar from "@/components/DashboardTopNavbar";
import DisplayMail from "@/components/DisplayMail";
import React from "react";

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div className="w-full">
      <DashboardTopNavbar />
      <div className="flex-none px-8 py-6 relative">
        <DisplayMail />
      </div>
    </div>
  );
};

export default page;
