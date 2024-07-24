"use client";
import { Arrow } from "@/assets/Arrow";
import { View } from "@/assets/View";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Rent } from "@/assets/Rent";
import { Food } from "@/assets/Food";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecordCard } from "@/assets/RecordCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const data = [
  { title: "Food & Drinks" },
  { title: "Shopping" },
  { title: "Housing" },
  { title: "Transportation" },
  { title: "Vehicle" },
  { title: "Life & Entertainment" },
  { title: "Communication & PC" },
  { title: "Financial expenses" },
  { title: "Investments" },
  { title: "Income" },
  { title: "Others" },
];

const cardData = [
  { title: "Food & Drinks", time: "14:00", amount: 2000 },
  { title: "Food & Drinks", time: "14:00", amount: 1000 },
  { title: "Food & Drinks", time: "14:00", amount: 2000 },
  { title: "Food & Drinks", time: "14:00", amount: -1000 },
  { title: "Rent", time: "14:00", amount: 1000 },
];
const maxValue = 1000;
const minValue = 0;
export const RecordContainer = () => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);
  return (
    <div className="bg-[#f6f6f6] py-6">
      <div className="w-[1440px] m-auto flex">
        <div className="flex py-[24px] px-[16px] w-[282px] ">
          <div className="flex flex-col gap-[24px] w-full ">
            <div className="flex flex-col gap-[24px]">
              <div className="font-semibold text-[24px]">Record</div>
              <Dialog>
                <DialogTrigger className="">
                  <div className="bg-[#0166FF] px-4 w-full text-white rounded-[20px] flex gap-[5px] items-center">
                    <div className="text-[24px] font-thin">+</div>
                    <div className="font-semibold">Add</div>
                  </div>
                </DialogTrigger>
                <DialogContent></DialogContent>
              </Dialog>
              <input
                placeholder="Search"
                type="search"
                className="block pl-[10px] rounded-sm"
              ></input>
            </div>
            <div>
              <div className="pb-[16px] font-semibold">Types</div>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Income</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Expense</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="font-semibold">Category</div>
                <div className="text-gray-400">Clear</div>
              </div>
              <div>
                {data.map((item) => (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-[8px] items-center ">
                      <View />
                      <div className="py-[8px]">{item.title}</div>
                    </div>
                    <Arrow />
                  </div>
                ))}
              </div>
              <Button className="hover:bg-[#0166FF] hover:text-white w-full rounded-[20px] text-black bg-transparent flex gap-[5px] justify-start items-center">
                <div className="text-[24px] font-thin">+</div>
                <div className="">Add Category</div>
              </Button>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="font-semibold">Amount range</div>
              <div className="flex gap-[16px]">
                <Input className="border" type="number" placeholder="0" />
                <Input className="border" type="number" placeholder="1000" />
              </div>
              <Slider defaultValue={[1000]} max={1000} step={1} />
              <div className="flex justify-between">
                <div>0</div>
                <div>1000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between pt-8">
            <div className="pl-[80px]  w-[180px]">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>Last 10 Days</CarouselItem>
                  <CarouselItem>Last 20 Days</CarouselItem>
                  <CarouselItem>Last 30 Days</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Newest first</SelectItem>
                  <SelectItem value="old">Oldest first</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[full-30px] m-auto rounded-md py-[12px] px-[24px] flex bg-white justify-between items-center mt-[16px] ml-[30px]">
            <div className="flex items-center gap-[15px]">
              <Checkbox className="w-[20px] h-[20px]" />
              <div>Select all</div>
              <div className="flex flex-col">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="text-gray-600">-35,000$</div>
          </div>
          <div className="pl-[30px]">
            <div className="pb-3 pt-6 font-semibold">Today</div>
            <div className="flex flex-col gap-[12px] ">
              {cardData.map((item) => (
                <RecordCard
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  time={item.time}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
          <div className="pl-[30px]">
            <div className="pb-3 pt-6 font-semibold">Yesterday</div>
            <div className="flex flex-col gap-[12px] ">
              {cardData.map((item) => (
                <RecordCard
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  time={item.time}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
