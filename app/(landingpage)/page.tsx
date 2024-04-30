import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth/sign-in">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default page;
