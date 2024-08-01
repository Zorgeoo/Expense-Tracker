// import { Checkbox } from "@/components/ui/checkbox";
// import { Food } from "./Food";
// import { Rent } from "./Rent";

// export const RecordCard = ({ title, time, icon, amount }) => {
//   return (
//     <div className="w-[95%] m-auto rounded-md py-[12px] px-[24px] flex bg-white justify-between items-center">
//       <div className="flex items-center gap-[15px]">
//         <Checkbox className="w-[20px] h-[20px]" />
//         <div>{title === "Rent" ? <Rent /> : <Food />}</div>
//         <div className="flex flex-col">
//           <div>{title}</div>
//           <div>{time}</div>
//         </div>
//       </div>
//       <div>{amount}</div>
//     </div>
//   );
// };
"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Food } from "./Food";
import { Rent } from "./Rent";

export const RecordCard = ({ title, date, amount }) => {
  return (
    <div className="w-full m-auto rounded-md py-[12px] px-[24px] flex bg-white justify-between items-center">
      <div className="flex items-center gap-[15px]">
        <Checkbox className="w-[20px] h-[20px]" />
        {/* <IconComponent />  */}
        <div>{title === "Rent" ? <Rent /> : <Food />}</div>
        <div className="flex flex-col">
          <div>{title}</div>
          <div>{date}</div>
        </div>
      </div>
      <div className={`${amount < 0 ? "text-red-900" : "text-green-900"}`}>
        {amount}$
      </div>
    </div>
  );
};
