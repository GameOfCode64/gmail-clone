import React from "react";
import MailBoxHead from "@/components/MailBoxHead";
import MailTabs from "@/components/MailTabs";
import MailMessage from "./MailMessage";
const MailBox = () => {
  return (
    <div className="dark:bg-[#ffffff23] bg-[#00000023] dark:text-white relative rounded-2xl w-[100%] h-[100dvh]">
      <div className="w-full h-full overflow-y-auto">
        <MailBoxHead />
        <MailTabs />
        <MailMessage />
      </div>
    </div>
  );
};

export default MailBox;
