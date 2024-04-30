"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Clock, File, Inbox, Menu, Pen, Send, Star } from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SmallTheme } from "./themes/SmallBtn";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Messagebox from "./Messagebox";

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

const Mainsidebar = () => {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <Tooltip>
        <div className="w-[90px]  bg-[#011222] h-screen shadow-md md:block hidden">
          <div className="fixed w-[90px]  bg-[#011222] h-screen">
            <div className="flex items-center justify-start ">
              <div className="py-8 px-4">
                <Sheet>
                  <SheetTrigger>
                    <TooltipTrigger>
                      <Button
                        size="icon"
                        className="w-[60px] h-[60px] rounded-full text-wrap bg-white/10 hover:bg-white/20"
                      >
                        <Menu className=" text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Main Menu</p>
                    </TooltipContent>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <Sidebar />
                  </SheetContent>
                </Sheet>
                <div className="mt-8">
                  <TooltipTrigger>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button className="font-semibold dark:bg-white/10 bg-black/10 py-8 px-5 rounded-xl">
                          <Pen className="text-white" />
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent className="w-full md:m-auto md:w-[760px]">
                        <Messagebox />
                      </DrawerContent>
                    </Drawer>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sent Email</p>
                  </TooltipContent>

                  <div className="mt-8">
                    {navlink.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                          "flex relative items-center justify-center ml-1  text-white py-3 hover:bg-white/10 w-[50px] h-[50px] rounded-full",
                          pathname === route.href
                            ? "bg-white/10"
                            : " text-[#ccc]"
                        )}
                      >
                        {pathname === route.href ? (
                          <>
                            <span className="absolute w-[10px] h-[10px] bg-red-500 rounded-full top-2 right-2"></span>
                          </>
                        ) : (
                          <></>
                        )}
                        <route.icon />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-center">
                    <SmallTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Mainsidebar;
