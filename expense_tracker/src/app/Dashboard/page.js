import { Navbar } from "@/components";
import { Uparrow } from "../../../public/UpArrow";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[1440px] m-auto border">
        <div className="flex">
          <div className="w-1/3 h-[216px] border bg-[#0166FF] rounded-[18px]"></div>
          <div className="w-1/3 h-[216px] border rounded-[18px]">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#84CC16]"></div>
              <div>Your income</div>
            </div>
            <div>
              <div>
                <div>1,200,000₮</div>
                <div>Your Income Amount</div>
              </div>
              <div>
                <Uparrow />
                <div>32% from last month</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-[216px] border rounded-[18px]"></div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
