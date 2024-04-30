"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox } from "./ui/checkbox";
import { useRouter } from "next/router";
import {
  Clock,
  GripVertical,
  MailPlus,
  PanelTopOpen,
  Star,
  Trash2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Mail {
  id: number;
  email: string;
  name: string;
  subject: string;
  message: string;
}

function MailMessage() {
  const [getMail, setgetMail] = useState<Mail[]>([]);
  const [isLoadding, setisLoadding] = useState(false);

  useEffect(() => {
    const fetchgetmail = async () => {
      setisLoadding(true);
      try {
        const response = await axios.get<Mail[]>(
          "http://localhost:5000/getallmail"
        );
        setgetMail(response.data);
        setisLoadding(false);
      } catch (error) {
        console.log("Error in Getting Mail", error);
      }
    };
    fetchgetmail();
  }, []);

  return (
    <div>
      {getMail.length === 0 ? (
        <>
          <h1 className="flex items-center justify-center dark:text-gray-300 mt-24">
            Your Primary tab is empty.
          </h1>
        </>
      ) : (
        <>
          {getMail.map((mail) => (
            <div
              key={mail.id}
              // onClick={() =>}
              className="w-full relative h-[40px] group-hover:shadow-sm shadow-white cursor-pointer bg-[#0000000f] dark:bg-[#ffffff2d] flex items-center group justify-nomal gap-4"
            >
              <div className="px-6 flex items-center justify-normal gap-3 relative">
                <GripVertical className="absolute left-0 hidden group group-hover:block" />
                <Checkbox className="w-[20px] h-[20px] border-[2px] dark:border-[#ccc] border-gray-400" />
                <Star className="cursor-pointer dark:text-[#ccc] text-gray-400" />
                <p className="font-semibold w-[120px] overflow-x-hidden text-nowrap">
                  {mail.name}
                </p>
              </div>
              <div className="flex items-center justify-normal gap-1">
                <p className="w-[320px] font-semibold overflow-x-hidden text-nowrap">
                  {mail.subject}
                </p>
                <span>-</span>
                <p className="w-[520px] font-[400] dark:text-[#ccc] text-gray-500 text-nowrap overflow-x-hidden">
                  {mail.message}
                </p>
              </div>
              <div className="flex group  group-hover:hidden items-center justify-end">
                <p className=" ml-8 text-nowrap text-sm">3:22 PM</p>
              </div>
              <div className="absolute right-1 group-hover:flex hidden group items-center group justify-normal gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff2f]">
                        <PanelTopOpen />
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Archive</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff2f]">
                        <Trash2 />
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff2f]">
                        <MailPlus />
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Mark as read</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="w-[35px] h-[35px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff2f]">
                        <Clock />
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Snooze</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default MailMessage;
