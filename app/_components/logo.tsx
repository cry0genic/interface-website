import React from "react";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

interface LogoProps {
  className?: string;
}
export const Logo = ({ className }: LogoProps) => {
  return (
    <h1
      className={cn(
        manrope.className,
        "font-semibold text-[28px] text-white flex justify-start items-center h-full",
        className
      )}
    >
      interface
    </h1>
  );
};
