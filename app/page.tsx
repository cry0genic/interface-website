"use client";
/* eslint-disable @next/next/no-img-element */
import { Darker_Grotesque } from "next/font/google";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className="w-screen h-screen absolute p-4 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, #E6E6E6 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "center",
      }}
    >
      fsdf
    </div>
  );
}
