"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Food } from "./Food";
import { Rent } from "./Rent";

import { useState, useContext } from "react";
import * as Icons from "react-icons/fa6";
import { TransactionContext } from "@/components/utils/context";

export const RecordCard = ({ icon, date, amount, time, categ }) => {
  return (
    <div className="w-full m-auto rounded-md py-[12px] px-[24px] flex bg-white justify-between items-center">
      <div className="flex items-center gap-[15px]">
        <Checkbox className="w-[20px] h-[20px]" />
        {/* <IconComponent />  */}
        <div>{icon}</div>
        <div className="flex flex-col">
          <div>{categ}</div>
          <div className="flex text-xs gap-2">
            <div>{date}</div>
            <div>{time}</div>
          </div>
        </div>
      </div>
      <div className={`${amount < 0 ? "text-red-900" : "text-green-900"}`}>
        {amount}$
      </div>
    </div>
  );
};
