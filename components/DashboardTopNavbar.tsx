import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/public/logo1.png";
import { CircleHelp, Grip, Search, Settings } from "lucide-react";

const DashboardTopNavbar = () => {
  return (
    <div className="px-6 py-4 w-full flex items-center justify-between">
      <div className="w-[120px]">
        <Link href="/dashboard" className="">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="w-[60%] relative h-[55px]  rounded-[25px] pl-8 border-[1px] border-zinc-900 dark:border-[1px] dark:border-[#ccc]/30">
        <Search className="absolute top-[16px] left-[15px]" size={20} />
        <Input
          placeholder="Search Mail"
          className="w-full h-full   border-none rounded-[25px]  focus-visible:ring-transparent outline-none focus:outline-none focus:border-none"
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <span className="cursor-pointer">
          <CircleHelp size={30} />
        </span>
        <span className="cursor-pointer">
          <Settings size={30} />
        </span>
        <span className="cursor-pointer">
          <Grip size={30} />
        </span>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[40px] w-[40px]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DashboardTopNavbar;
