"use client";
import React from "react";
import logo from "@/public/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Clock, File, Inbox, Pen, Send, Star } from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navlink = [
  {
    icon: Inbox,
    title: "inbox",
    href: "/dashboard",
  },
  {
    icon: Star,
    title: "Starred",
    href: "/starred",
  },
  {
    icon: Clock,
    title: "Snoozed",
    href: "/snoozed",
  },
  {
    icon: Send,
    title: "Sent",
    href: "/sent",
  },
  {
    icon: File,
    title: "Drafts",
    href: "/drafts",
  },
];
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full dark:bg-[#011222] h-screen dark:shadow-md">
      <div className="px-8 py-6">
        <div className="flex items-center justify-center">
          <Link href="/dashboard">
            <Image src={logo} alt="logo" className="w-[120px]" />
          </Link>
        </div>
        <div className="mt-12">
          <Button className="flex w-full font-semibold items-center justify-center gap-3">
            <Pen size={17} />
            Compose
          </Button>
          <div className="mt-12">
            {navlink.map((link, index) => (
              <div className="space-y-3 my-2" key={index}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm group text-gray-500 p-2 flex w-full justify-start font-medium cursor-pointer dark:hover:text-white dark:text-[#ccc] hover:bg-white/10 rounded-md",
                    pathname === link.href
                      ? "text-wrap dark:bg-white/10"
                      : " dark:text-[#ccc]"
                  )}
                >
                  <div className="flex items-center  gap-3 flex-1 ">
                    <link.icon size={19} />
                    {link.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
