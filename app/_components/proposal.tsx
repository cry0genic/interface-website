import { cn } from "@/lib/utils";
import React from "react";

const Proposal = () => {
  return (
    <div
      className={cn(
        "w-[214px] h-[245px] origin-top-left rotate-[15deg] bg-white rounded-3xl shadow border border-zinc-900/20 transition-all duration-1000 ease-in-out absolute opacity-100 top-[190px] -right-15 xl:right-[15px] hidden lg:block z-1"
      )}
    >
      <div className="left-[23.16px] top-[27.27px] absolute text-zinc-400 text-xl font-extrabold">
        Invoice
      </div>
      <div className="left-[151px] top-[206px] absolute text-zinc-400 text-[8px] font-extrabold">
        sign here
      </div>
      <div className="w-40 h-[17px] left-[23.16px] top-[90.27px] absolute bg-zinc-300 rounded-3xl" />
      <div className="w-[107px] h-[17px] left-[23.15px] top-[124.27px] absolute bg-zinc-300 rounded-3xl" />
      <div className="w-12 h-12 left-[145px] top-[158px] absolute" />
    </div>
  );
};

export default Proposal;
