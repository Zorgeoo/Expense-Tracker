"use client";
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
import { IconName } from "react-icons/lia";
import { DatePickerDemo } from "@/assets/DatePicker";
import { FaAnchor } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaBiohazard } from "react-icons/fa";
import { FaUssunnah } from "react-icons/fa";

const iconData = [
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
  { img: FaAnchor },
  { img: FaAngellist },
  { img: FaArtstation },
  { img: FaBiohazard },
  { img: FaUssunnah },
];

const colors = [
  { color: "blue" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
  { color: "orange" },
  { color: "pink" },
  { color: "red" },
];
import { DarkBlue } from "../../public/darkBlue";
import { Blue } from "../../public/blue";
import { Green } from "../../public/green";
import { Yellow } from "../../public/yellow";
import { Orange } from "../../public/orange";
import { Purple } from "../../public/purple";
import { Red } from "../../public/red";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export const AddCategory = () => {
  const [bgColor, setBgColor] = useState(null);
  const handleBgColor = (color) => {
    setBgColor(color);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="hover:bg-[#0166FF] hover:text-white w-full rounded-[20px] text-black bg-transparent flex gap-[5px] justify-start items-center px-10">
          <div className="text-[24px] font-thin">+</div>
          <div className="">Add Category</div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="py-5 px-6 border-b text-xl font-semibold">
          Add Category
        </div>
        <div className="p-6 flex flex-col gap-8">
          <div className="flex justify-around gap-3">
            <Select className="w-1/2">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder={<FaAnchor />} />
              </SelectTrigger>
              <SelectContent>
                <div className="grid grid-cols-5 p-6 gap-3 border-b-2">
                  {iconData.map((item, index) => {
                    const Icon = item.img;

                    return (
                      <SelectItem
                        className={`w-fit h-fit flex justify-center items-center`}
                        key={index}
                        value={item}
                      >
                        <div className="self-center p-0">
                          <Icon style={{ color: bgColor }} />
                        </div>
                      </SelectItem>
                    );
                  })}
                </div>
                <div className="flex p-6 gap-2">
                  {/* <div onClick={() => setBgColor("blue")}>
                    <DarkBlue />
                  </div> */}
                  {colors.map((item) => {
                    return (
                      <div
                        onClick={() => setBgColor(item.color)}
                        className="h-10 w-10 rounded-[50%]"
                      ></div>
                    );
                  })}
                </div>
              </SelectContent>
            </Select>
            <Select className="w-1/2">
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Newest first</SelectItem>
                <SelectItem value="old">Oldest first</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="rounded-[20px] w-full bg-[#16A34A]">
            Add Category
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default AddCategory;
