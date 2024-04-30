import { Inbox, Tag, Users } from "lucide-react";
import React from "react";

const MailTabs = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 px-8 py-3 gap-8 ">
        <div className="px-4 cursor-pointer">
          <div className="flex items-center justify-normal gap-5 text-gray-600 dark:text-white">
            <Inbox />
            Primary
          </div>
          <hr className="w-full h-[3px] rounded-l-[1px] rounded-r-[1px] bg-white mt-3" />
        </div>
        <div className="flex cursor-pointer dark:hover:text-white items-center justify-normal gap-5 text-gray-500 dark:text-[#ccc]">
          <Tag />
          Promotions
        </div>
        <div className="flex cursor-pointer dark:hover:text-white items-center justify-normal gap-5 text-gray-500 dark:text-[#ccc]">
          <Users />
          Social
        </div>
      </div>
    </div>
  );
};

export default MailTabs;
