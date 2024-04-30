import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArchiveRestore,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  Clock,
  EllipsisVertical,
  Inbox,
  MailPlus,
  OctagonAlert,
  Tag,
  Trash2,
} from "lucide-react";
const DisplayMailTop = () => {
  return (
    <div className="w-full bg-black/40 rounded-t-2xl">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-normal gap-5">
            <div className="flex items-center justify-center gap-3 border-r-[1px] border-[#ccc]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <ArrowLeft size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Back</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <ArchiveRestore size={19} />
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
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <OctagonAlert size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Report Spam</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] mr-4 cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <Trash2 size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Delete</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-center gap-3 border-r-[1px] border-[#ccc]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <MailPlus size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark as Read</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <Clock size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Snooze</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] mr-6 cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <CircleCheckBig size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add To Tasks</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <Inbox size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Inbox</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px] cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <Tag size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Labels</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="w-[35px]  cursor-pointer text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                      <EllipsisVertical size={19} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex items-center justify-normal gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="w-[35px] text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                    <ChevronLeft size={19} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Back</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="w-[35px] flex items-center justify-center h-[35px] rounded-full hover:bg-white/10">
                    <ChevronRight size={19} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMailTop;
