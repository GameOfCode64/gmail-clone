"use client";
import {
  BookmarkCheck,
  ChevronDown,
  CornerUpLeft,
  EllipsisVertical,
  ExternalLink,
  Paperclip,
  Printer,
  Smile,
  Star,
} from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const DisplayMailBody = () => {
  return (
    <div className="w-full px-8 py-8">
      <div className="">
        <div className="flex items-center justify-between font-medium  dark:text-white">
          <div className="flex items-center justify-normal gap-2">
            <p className="w-[35px] h-[35px] text-emerald-400 bg-emerald-500/20 flex items-center justify-center rounded-full cursor-pointer">
              <BookmarkCheck size={22} />
            </p>
            <p className="">
              SQL Injection Vulnerability Report in
              https://app.internship.codeclause.com
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                    <Printer size={19} />
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Print all</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                    <ExternalLink size={19} />
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>in new window</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-8 px-2">
          <div className="flex items-center justify-normal gap-1 text-[#666] dark:text-[#ecebebeb]">
            <p className="font-[600]">Bhavishya Tripathi</p>
            <p className="text-sm">&lt;gameofcode@gmail.com&gt;</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-normal gap-1">
              <p className="text-[12px]">to</p>
              <p className="text-[12px]">gameofcode64@gmail.com</p>
              <p className="flex items-center justify-center w-[25px] h-[25px] rounded-2xl dark:bg-white/10 bg-black/10">
                <ChevronDown size={14} />
              </p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center justify-center gap-3">
                <p>
                  <Paperclip size={19} />
                </p>
                <p className=" text-[14px] dark:text-[#ccc]">
                  Mar 31, 2024, 11:05 PM
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                  <Star size={19} />
                </p>
                <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                  <Smile size={19} />
                </p>
                <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                  <CornerUpLeft size={19} />
                </p>
                <p className="w-[35px] h-[35px] hover:dark:bg-white/10 flex items-center justify-center rounded-full cursor-pointer">
                  <EllipsisVertical size={19} />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 font-[300] w-full text-wrap">
            <p>
              Dear Codeclause Team, I hope this email finds you well. My name is
              BhavishyaTripathi , and I am writing to report a critical security
              vulnerability that I have identified in the
              https://app.internship.codeclause.com login system. I have
              attached a word report and video demonstrating the exploit and
              successful bypass of the login mechanism for your reference. I
              urge you to address this vulnerability promptly to ensure the
              security and integrity of the Codeclause Internship Programs
              systems and user data. If you require any further information or
              assistance, please feel free to contact me. Thank you for your
              attention to this matter. Best regards Bhavishya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMailBody;
