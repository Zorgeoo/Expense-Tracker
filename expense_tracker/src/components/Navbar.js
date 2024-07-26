"use client";
import { Logo } from "@/assets/Logo";
import AddRecord from "./AddRecord";
export const Navbar = () => {
  return (
    <div className="w-[1440px] m-auto flex justify-between bg-white py-[16px]">
      <div className="flex items-center gap-[24px]">
        <Logo width="50" />
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex items-center gap-[24px] w-fit">
        <AddRecord title="+Record" />
        <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
          <img src="/admin.jpeg" />
        </div>
      </div>
    </div>
  );
};
