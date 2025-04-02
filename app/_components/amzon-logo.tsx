/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";
import AmazonSvg from "./amazon-svg";
import sap from "../../public/sap.png";
import unf from "../../public/unfi.png";
export const AmazonLogo = () => {
  return (
    <div
      className={cn(
        "w-[72px] h-[72px] rotate-[-17.99deg] bottom-24 right-24 xl:bottom-44 xl:right-[50%] absolute bg-white rounded-[6.86px] shadow border border-zinc-90020 justify-center items-center inline-flex transition-all duration-700 delay-200 ease-in-out"
      )}
    >
      <AmazonSvg />
    </div>
  );
};
export const SapLogo = () => {
  return (
    <div
      className={cn(
        "w-[72px] h-[72px] rotate-[-17.99deg] bottom-24 left-24 xl:bottom-64 xl:left-[14%] absolute bg-white rounded-[6.86px] shadow border border-zinc-90020 justify-center items-center inline-flex transition-all duration-700 delay-200 ease-in-out"
      )}
    >
      <img src={sap.src} alt="" />
    </div>
  );
};
export const UnfiLogo = () => {
  return (
    <div
      className={cn(
        "w-[72px] h-[72px] rotate-[27.99deg] bottom-24 right-24 xl:bottom-64 xl:right-[14%] absolute bg-white rounded-[6.86px] shadow border border-zinc-90020 justify-center items-center inline-flex transition-all duration-700 delay-200 ease-in-out"
      )}
    >
      <img src={unf.src} alt="" className="rotate-[-16deg]" />
    </div>
  );
};
