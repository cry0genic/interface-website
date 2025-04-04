/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import amazon from "../../public/svg/amazon.svg";
import sap from "../../public/svg/sap.svg";
import unf from "../../public/svg/unfi.svg";
export const AmazonLogo = () => {
  return (
    <div className={cn("xl:bottom-44 xl:right-[50%] absolute")}>
      <img src={amazon.src} alt="" />
    </div>
  );
};
export const SapLogo = () => {
  return (
    <div className={cn("xl:bottom-64 xl:left-[14%] absolute")}>
      <img src={sap.src} alt="Sap" />
    </div>
  );
};
export const UnfiLogo = () => {
  return (
    <div className={cn("xl:bottom-64 xl:right-[14%] absolute ")}>
      <img src={unf.src} alt="Unfi" />
    </div>
  );
};
