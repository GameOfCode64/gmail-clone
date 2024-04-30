"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  RotateCw,
  Square,
} from "lucide-react";

const MailBoxHead = () => {
  return (
    <div className="px-6 flex items-center justify-between py-5">
      <div className="flex items-center justify-center gap-4 ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="w-[35px] flex items-center justify-center h-[35px] rounded-full hover:bg-black/10">
                <Square size={19} />
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Select</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="w-[35px] flex items-center justify-center h-[35px] rounded-full hover:bg-black/10">
                <RotateCw size={19} />
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Refesh</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="w-[35px] flex items-center justify-center h-[35px] rounded-full hover:bg-black/10">
                <EllipsisVertical size={19} />
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>More</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <span>1-50 of 519</span>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="w-[35px] text-[#ccc] flex items-center justify-center h-[35px] rounded-full hover:bg-black/10">
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
              <span className="w-[35px] flex items-center justify-center h-[35px] rounded-full hover:bg-black/10">
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
  );
};

export default MailBoxHead;
