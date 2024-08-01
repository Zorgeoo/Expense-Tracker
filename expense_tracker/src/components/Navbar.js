"use client";
import { Logo } from "@/assets/Logo";
import AddRecord from "./AddRecord";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  return (
    <div className="w-[1440px] m-auto flex justify-between bg-white py-[16px]">
      <div className="flex items-center gap-[24px]">
        <Logo width="50" />
        <Link
          href={"/Dashboard"}
          style={{
            color: usePathname() === "/Dashboard" ? "blue" : "",
            fontWeight: usePathname() === "/Dashboard" ? "bold" : "",
          }}
        >
          <div>Dashboard</div>
        </Link>
        <Link
          href={"/"}
          style={{
            color: usePathname() === "/" ? "blue" : "",
            fontWeight: usePathname() === "/" ? "bold" : "",
          }}
        >
          <div>Records</div>
        </Link>
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
