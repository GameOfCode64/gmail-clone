import React from "react";
import DisplayMailTop from "./DisplayMailTop";
import DisplayMailBody from "./DisplayMailBody";

const DisplayMail = () => {
  return (
    <div className="dark:bg-[#ffffff23] bg-[#00000023] dark:text-white relative rounded-2xl w-[100%] h-[100dvh]">
      <DisplayMailTop />
      <DisplayMailBody />
    </div>
  );
};

export default DisplayMail;
