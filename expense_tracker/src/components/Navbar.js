"use client";
import { Logo } from "@/assets/Logo";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
export const Navbar = () => {
  const [buttonColor, setButtonColor] = useState("transparent");
  const [incomeButtonColor, setIncomeButtonColor] = useState("transparent");
  return (
    <div className="w-[1440px] m-auto flex justify-between bg-white py-[16px]">
      <div className="flex items-center gap-[24px]">
        <Logo width="50" />
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="flex w-fit h-fit rounded-[20px] px-[10px] text-white">
          <Dialog>
            <DialogTrigger className="">
              <div className="bg-[#0166FF] px-4 w-full text-white rounded-[20px] flex gap-[5px] items-center justify-center">
                <div className="text-[24px] font-thin">+</div>
                <div className="font-semibold">Record</div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0">
              <div className="">
                <div className="border-b px-6 py-5 font-semibold text-xl">
                  Add Record
                </div>
                <div className="flex">
                  <div className="w-1/2 py-5 px-6 flex flex-col gap-5">
                    <div className="flex rounded-[20px] bg-[#F3F4F6] w-full">
                      <Button
                        className={`"px-5 py-2 w-1/2 rounded-[20px] text-black" bg-${buttonColor}`}
                        onClick={() => setButtonColor("[#0166FF]")}
                      >
                        Expense
                      </Button>
                      <Button
                        className={`"px-5 py-2 w-1/2 rounded-[20px] text-black" bg-${incomeButtonColor}`}
                        onClick={() => setIncomeButtonColor("[#16A34A]")}
                      >
                        Income
                      </Button>
                    </div>
                    <div>
                      <div>Amount</div>
                      <Input type="number" placeholder="₮ 000.00" />
                    </div>
                    <div>
                      <div>Category</div>
                      <Select className="w-full">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Choose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Newest first</SelectItem>
                          <SelectItem value="old">Oldest first</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex ">
                      <div className="flex-1">
                        <div>Date</div>
                        {/* <DatePickerDemo /> */}
                      </div>
                      <div className="flex-1">Time</div>
                    </div>
                    <Button className="bg-[#0166FF]" type="submit">
                      Add Record
                    </Button>
                  </div>
                  <div className="w-1/2 pt-11 pb-5 px-6">
                    <div>
                      <div>Payee</div>
                      <Input type="text" placeholder="Write here" />
                    </div>
                    <div>
                      <div className="mt-[19px]">Note</div>
                      <Textarea
                        className="h-[140px]"
                        placeholder="Write here"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
          <img src="/admin.jpeg" />
        </div>
        
      </div>
    </div>
  );
};
