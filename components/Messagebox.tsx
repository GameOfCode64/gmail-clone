"use client";
import axios from "axios";
import React, { useState } from "react";
import {
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Baseline,
  EllipsisVertical,
  FileLock2,
  ImageDown,
  Link2,
  Paperclip,
  PenLine,
  Smile,
  Trash,
  Triangle,
  X,
} from "lucide-react";

const Messagebox = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // handleSubmit Function

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const response = await axios.post("http://localhost:5000/mail", {
        email,
        subject,
        message,
        name,
      });
      setisLoading(false);
      window.location.reload();
    } catch (error) {
      console.log("Error in posting data to server:", error);
    }
  };
  return (
    <div className="w-full md:h-[70dvh]">
      <DrawerHeader className="border-b-[1px] flex items-center justify-between">
        <DrawerTitle className="text-gray-400 ">New Message</DrawerTitle>
        <DrawerClose>
          <DrawerTitle className="text-gray-400 w-[45px] h-[45px] cursor-pointer hover:bg-[#fff2] flex items-center justify-center rounded-full">
            <X />
          </DrawerTitle>
        </DrawerClose>
      </DrawerHeader>
      <DrawerDescription>
        <div className="w-full flex items-center justify-center gap-2 border-b-[1px] px-4 py-2">
          <Input
            className="border-none px-10 focus-visible:ring-transparent outline-none focus:outline-none focus:border-none"
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-2 border-b-[1px] px-4 py-2">
          <span>To</span>
          <Input
            className="border-none focus-visible:ring-transparent outline-none focus:outline-none focus:border-none"
            placeholder="Recipients"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex items-center justify-center gap-3 border-b-[1px] px-10 py-2">
          <Input
            className="border-none  focus-visible:ring-transparent outline-none focus:outline-none focus:border-none"
            placeholder="Subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="w-full px-4 py-2 h-full">
          <Textarea
            className="border-none focus-visible:ring-transparent outline-none focus:outline-none focus:border-none"
            placeholder="Meassage"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
      </DrawerDescription>
      <DrawerFooter>
        <div className="flex items-center justify-around mt-32 px-4">
          <div>
            {isLoading ? (
              <>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled
                  className="rounded-3xl px-7 py-3 bg-[#0b57d0] hover:bg-[#0b57d0]/80 text-white"
                >
                  Sent
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-3xl px-7 py-3 bg-[#0b57d0] hover:bg-[#0b57d0]/80 text-white"
                >
                  Sent
                </Button>
              </>
            )}
          </div>
          <div className="flex items-center gap-1">
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <Baseline />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <Paperclip />
            </p>
            <p>
              <Link2 />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <Smile />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <Triangle />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <ImageDown />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <FileLock2 />
            </p>
            <p className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <PenLine />
            </p>
            <p>
              <EllipsisVertical />
            </p>
          </div>
          <div>
            <DrawerClose className="w-[45px] h-[45px] hover:bg-[#fff2] flex items-center justify-center rounded-full">
              <Trash />
            </DrawerClose>
          </div>
        </div>
      </DrawerFooter>
    </div>
  );
};

export default Messagebox;
