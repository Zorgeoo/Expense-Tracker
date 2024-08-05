"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState, useContext } from "react";
import axios from "axios";
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
import AddCategory from "@/assets/AddCategory";
import { useFormik } from "formik";
import { DialogClose } from "@radix-ui/react-dialog";
import { TransactionContext } from "./utils/context";
import { CiHome } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinksLine } from "react-icons/ri";
import { PiTaxi } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";

export const AddRecord = ({ title, addClick }) => {
  const [buttonColor, setButtonColor] = useState("expense");

  const handleButtonColor = (button) => {
    setButtonColor(button);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      category: "",
    },
    onSubmit: (values) => {
      alert(`hello ${formik.values}`);
      console.log("first message", formik.values);
    },
  });

  const { transInfo, setTransInfo } = useContext(TransactionContext);
  console.log(transInfo);

  const createCategory = async () => {
    const newCategory = { categoryTitle };
    const response = await axios.post(
      "http://localhost:3007/categories",
      newCategory
    );
    setCategories([...categories, response.data]);
  };
  const [accounts, setAccounts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categories, setCategories] = useState([]);

  const categoriesData = [
    { name: "Home", icon: <CiHome /> },
    { name: "Gift", icon: <CiGift /> },
    { name: "Food", icon: <IoFastFoodOutline /> },
    { name: "Drink", icon: <RiDrinksLine /> },
    { name: "Taxi", icon: <PiTaxi /> },
    { name: "Shopping", icon: <CiShoppingCart /> },
  ];

  return (
    <div className="flex">
      <form onSubmit={formik.handleSubmit}>
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
                    <Input
                      type="number"
                      name="amount"
                      value={transInfo.amount}
                      onChange={(event) =>
                        setTransInfo({
                          ...transInfo,
                          amount: event.target.value,
                        })
                      }
                      placeholder="₮ 000.00"
                    />
                  </div>
                  <div>
                    <div>Category</div>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        <AddCategory
                          onclick={createCategory}
                          value={categoryTitle}
                          onchange={(event) => {
                            setCategoryTitle(event.target.value);
                          }}
                        />
                        {categoriesData.map((item, index) => {
                          return (
                            <SelectItem value={item.name}>
                              <div className="flex gap-3 justify-center items-center">
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-3 border items-center">
                    <div className="w-1/2 flex flex-col justify-between">
                      <div>Date</div>
                      <input
                        placeholder="date"
                        type="Date"
                        onChange={(event) =>
                          setTransInfo({
                            ...transInfo,
                            date: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <div>Time</div>
                      <input
                        type="time"
                        onChange={(event) =>
                          setTransInfo({
                            ...transInfo,
                            time: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <DialogClose>
                    <Button
                      type="submit"
                      className={`bg-[#0166FF]"  ${
                        buttonColor === "income"
                          ? "bg-[#16A34A] text-white"
                          : "bg-[#0166FF] text-white"
                      }`}
                      onClick={addClick}
                    >
                      Add Record
                    </Button>
                  </DialogClose>
                </div>
                <div className="w-1/2 py-5 px-6 border">
                  <div>
                    <div>Payee</div>
                    <Input type="text" placeholder="Write here" />
                  </div>
                  <div>
                    <div className="mt-[19px]">Note</div>
                    <Textarea
                      onChange={(event) =>
                        setTransInfo({
                          ...transInfo,
                          note: event.target.value,
                        })
                      }
                      className="h-[246px]"
                      placeholder="Write here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};
export default AddRecord;
