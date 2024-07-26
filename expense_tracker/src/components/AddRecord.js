"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerDemo } from "@/assets/DatePicker";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TimePicker from "react-time-picker";
import TimePickerComponent from "@/assets/TImePicker";
import CustomTimePicker from "@/assets/TImePicker";

export const AddRecord = ({ title }) => {
  const [buttonColor, setButtonColor] = useState("expense");

  const handleButtonColor = (button) => {
    setButtonColor(button);
  };
  return (
    <div className="flex">
      <Dialog className="">
        <DialogTrigger className="w-full">
          <div className="bg-[#0166FF] px-12 text-white py-1 rounded-[20px] flex gap-[5px] items-center justify-center">
            <div className="font-semibold">{title}</div>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0">
          <div className="">
            <div className="border-b px-6 py-5 font-semibold text-xl">
              Add Record
            </div>
            <div className="flex">
              <div className="w-1/2 py-5 px-6 flex flex-col gap-5 border">
                <div className="flex rounded-[20px] bg-[#F3F4F6] w-full">
                  <Button
                    className={`"px-5 py-2 w-1/2 rounded-[20px] text-black  ${
                      buttonColor === "expense"
                        ? "bg-[#0166FF] text-white"
                        : "bg-transparent"
                    } `}
                    onClick={() => handleButtonColor("expense")}
                  >
                    Expense
                  </Button>
                  <Button
                    className={`"px-5 py-2 w-1/2 rounded-[20px] text-black  ${
                      buttonColor === "income"
                        ? "bg-[#16A34A] text-white"
                        : "bg-transparent"
                    } `}
                    onClick={() => handleButtonColor("income")}
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
                  <Select>
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
                <div className="flex gap-3 ">
                  <div className="flex-1">
                    <div>Date</div>
                    <DatePickerDemo />
                  </div>
                  <div>
                    <CustomTimePicker />
                  </div>
                </div>
                <Button
                  className={`bg-[#0166FF]" type="submit ${
                    buttonColor === "income"
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#0166FF] text-white"
                  }`}
                >
                  Add Record
                </Button>
              </div>
              <div className="w-1/2 py-5 px-6 border">
                <div>
                  <div>Payee</div>
                  <Input type="text" placeholder="Write here" />
                </div>
                <div>
                  <div className="mt-[19px]">Note</div>
                  <Textarea className="h-[246px]" placeholder="Write here" />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddRecord;
