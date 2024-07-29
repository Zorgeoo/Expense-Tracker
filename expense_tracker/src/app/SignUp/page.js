"use client";

import { Logo } from "@/assets/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full h-full">
        <div className="flex-1 m-auto flex flex-col items-center">
          <div className="flex h-fit items-center">
            <Logo width="40" />
            <div>Geld</div>
          </div>
          <div className="flex flex-col items-center py-10">
            <div className="text-2xl font-semibold pb-2">
              Create Geld account
            </div>
            <div>Sign up below to create your Wallet account</div>
          </div>
          <div className="flex flex-col gap-4 w-2/5">
            <input
              type="text"
              placeholder="Name"
              className="pl-4 border rounded-lg bg-[#F3F4F6] p-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="pl-4 border rounded-lg bg-[#F3F4F6] p-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="pl-4 border rounded-lg bg-[#F3F4F6] p-1"
            />
            <input
              type="password"
              placeholder="Re-password"
              className="pl-4 border rounded-lg bg-[#F3F4F6] p-1"
            />
            <Link href="./SelectCurrency">
              <Button className="rounded-[20px] w-full bg-[#0166FF]">
                Log In
              </Button>
            </Link>
          </div>
          <div className="flex gap-3 pt-10">
            <div>Already have account?</div>
            <Link href="./LogIn">
              <div className="text-[#0166FF] cursor-pointer">Log In</div>
            </Link>
          </div>
        </div>
        <div className="flex-1 bg-[#0166FF] w-full h-full"></div>
      </div>
    </div>
  );
};
export default SignUp;
