"use client";
/* eslint-disable @next/next/no-img-element */
import { Darker_Grotesque } from "next/font/google";
import { RfqSlip } from "./_components/svgs";
import { Invoice } from "./_components/svgs";
import { Grn } from "./_components/svgs";
import { SapLogo, UnfiLogo } from "./_components/amzon-logo";
import { AmazonLogo } from "./_components/amzon-logo";
import CentrePiece from "./_components/centre-piece";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className="w-screen h-screen absolute p-6 pb-20 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, #E6E6E6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "center",
      }}
    >
      <main className="grid grid-cols-[min(100px,8vw)_1fr_min(100px,8vw)] h-full w-full border border-neutral-600/10">
        <div
          className="border-r border-neutral-600/20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 2px,
              transparent 2px,
              transparent 8px
            )`,
            opacity: 0.4,
          }}
        />
        <div className=" flex items-center justify-center">
          <div className="w-[min(480px,90vw)] h-[min(432px,81vw)] border border-neutral-600/10">
            <CentrePiece />
          </div>
        </div>
        <div
          className="border-l border-neutral-600/10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 2px,
              transparent 2px,
              transparent 8px
            )`,
            opacity: 0.4,
          }}
        />
      </main>
    </div>
  );
}
