import { cn } from "@/lib/utils";
import React from "react";

const Invoice = () => {
  return (
    <div
      className={cn(
        "w-[214px] h-[245px] origin-top-left rotate-[-33.98deg] bg-white rounded-3xl shadow border border-zinc-900/20 absolute transition-all ease-in-out delay-150 duration-1000 opacity-100 top-64 xl:top-[330px] -left-16 xl:left-[15px] hidden lg:block"
      )}
    >
      <div className="left-[23.16px] top-[27.27px] absolute text-zinc-400 text-xl font-extrabold ">
        RFQ Slip
      </div>
      <div className="left-[22.32px] top-[63.94px] absolute text-zinc-400 text-[11px] font-extrabold ">
        Suplier:
      </div>
      <div className="w-[88.34px] h-[9.39px] left-[22.09px] top-[87.80px] absolute bg-zinc-300 rounded-[13.25px]" />
      <div className="w-[59.08px] h-[9.39px] left-[22.09px] top-[104.92px] absolute bg-zinc-300 rounded-[13.25px]" />
      <div className="left-[22.09px] top-[130.80px] absolute flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="text-zinc-400 text-[11px] font-extrabold ">
          Ship To:
        </div>
        <div className="w-[88.34px] h-[9.39px] bg-zinc-300 rounded-[13.25px]" />
        <div className="w-[59.08px] h-[9.39px] bg-zinc-300 rounded-[13.25px]" />
      </div>
      <div className="left-[149.09px] top-[168.80px] absolute flex-col justify-center items-center inline-flex">
        <div className="w-12 h-12 relative" />
        <div className="text-zinc-400 text-[8px] font-extrabold ">
          sign here
        </div>
      </div>
    </div>
  );
};

export default Invoice;
