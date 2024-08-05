"use client";
import { Arrow } from "@/assets/Arrow";
import { View } from "@/assets/View";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import axios from "axios";
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
import { useState, useEffect, useContext } from "react";
import { FaAnchor } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";
import { FaBiohazard } from "react-icons/fa";
import { FaUssunnah } from "react-icons/fa";
import AddRecord from "./AddRecord";

import AddCategory from "@/assets/AddCategory";
import { TransactionContext } from "./utils/context";

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

const iconData = [
  { img: <FaAnchor /> },
  { img: <FaAngellist /> },
  { img: <FaArtstation /> },
  { img: <FaBiohazard /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaAnchor /> },
  { img: <FaAngellist /> },
  { img: <FaArtstation /> },
  { img: <FaBiohazard /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaAnchor /> },
  { img: <FaAngellist /> },
  { img: <FaArtstation /> },
  { img: <FaBiohazard /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
  { img: <FaAnchor /> },
  { img: <FaAngellist /> },
  { img: <FaArtstation /> },
  { img: <FaBiohazard /> },
  { img: <FaUssunnah /> },
  { img: <FaUssunnah /> },
];
const maxValue = 1000;
const minValue = 0;
export const RecordContainer = () => {
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  const handleNewValues = (index, newValue) => {
    const newValues = [...sliderValue];
    newValues[index] = Number(newValue);
    setSliderValue(newValues);
  };
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  const { transInfo, setTransInfo } = useContext(TransactionContext);
  console.log(transInfo);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3007/accounts");
      setAccounts(response.data);
    };
    getData();
  }, []);
  const createAccount = async () => {
    // const newAccount = { title, amount, date };
    const response = await axios.post(
      "http://localhost:3007/accounts",
      transInfo
    );
    setAccounts([...accounts, response.data]);
  };

  const deleteAccount = async (id) => {
    const response = await axios.delete(`http://localhost:3007/accounts/${id}`);
    setAccounts(accounts.filter((account) => account.id !== id));
  };
  const deleteAllAccount = async () => {
    const response = await axios.delete("http://localhost:3007/accounts/");
    setAccounts([]);
    console.log(response.data);
  };
  //Category
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3007/categories/");
        setCategories(response.data);
      } catch (error) {}
      // setCategories(response.data);
    };
    getData();
  }, []);
  const createCategory = async () => {
    const newCategory = { categoryTitle };
    const response = await axios.post(
      "http://localhost:3007/categories",
      newCategory
    );
    setCategories([...categories, response.data]);
  };
  const deleteCategory = async (id) => {
    const response = await axios.delete(
      `http://localhost:3007/categories/${id}`
    );
    setCategories(categories.filter((category) => category.id !== id));
  };
  // const deleteAllCategory = async () => {
  //   const response = await axios.delete("http://localhost:3007/categories");
  //   setCategories([]);
  //   console.log(response.data);
  // };
  return (
    <div className="bg-[#f6f6f6] py-6">
      <div className="w-[1440px] m-auto flex">
        <div className="flex py-[24px] px-[16px] w-[282px] ">
          <div className="flex flex-col gap-[24px] w-full ">
            <div className="flex flex-col gap-[24px]">
              <div className="font-semibold text-[24px]">Record</div>
              <AddRecord title="+Add" addClick={createAccount} />
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
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex gap-[8px] items-center ">
                        <View />
                        <div className="py-[8px]">{item.title}</div>
                      </div>
                      <Arrow />
                    </div>
                  );
                })}
                {categories.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex gap-[8px] items-center ">
                        <View />
                        <div className="py-[8px]">{item.categoryTitle}</div>
                      </div>
                      <Arrow />
                      <button
                        onClick={() => {
                          deleteCategory(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
              <AddCategory
                onclick={createCategory}
                value={categoryTitle}
                onchange={(event) => {
                  setCategoryTitle(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="font-semibold">Amount range</div>
              <div className="flex gap-[16px]">
                <Input
                  className="border"
                  type="number"
                  placeholder={sliderValue[0]}
                  onChange={(e) => handleNewValues(0, e.target.value)}
                />
                <Input
                  className="border"
                  type="number"
                  placeholder={sliderValue[1]}
                  onChange={(e) => handleNewValues(1, e.target.value)}
                />
              </div>
              <Slider
                defaultValue={[1000]}
                max={maxValue}
                min={minValue}
                onValueChange={(newValues) => setSliderValue(newValues)}
                step={1}
                value={sliderValue}
              />
              <div className="flex justify-between">
                <div>{sliderValue[0]}</div>
                <div>{sliderValue[1]}</div>
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
              {accounts.map((item, index) => {
                return (
                  <div>
                    {" "}
                    <RecordCard
                      key={index}
                      title={item.title}
                      amount={item.amount}
                      date={item.date}
                      time={item.time}
                    />
                    <button
                      onClick={() => {
                        deleteAccount(item.id);
                      }}
                      className="border"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pl-[30px]">
            <div className="pb-3 pt-6 font-semibold">Yesterday</div>
            <div className="flex flex-col gap-[12px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
