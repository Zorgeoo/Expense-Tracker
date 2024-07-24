import { Logo } from "@/assets/Logo";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="w-[1440px] m-auto border flex justify-between bg-white py-[16px]">
      <div className="flex items-center gap-[24px]">
        <Logo />
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex items-center gap-[24px]">
        <div className="flex w-fit h-fit rounded-[20px] px-[10px] text-white">
          <Button className="w-full text-white rounded-[20px] flex gap-[5px]">
            <div className="text-[24px] font-thin">+</div>
            <div className="font-semibold">Record</div>
          </Button>
        </div>
        <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
          <img src="/admin.jpeg" />
        </div>
      </div>
    </div>
  );
};
