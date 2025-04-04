"use client";
/* eslint-disable @next/next/no-img-element */
import { Darker_Grotesque } from "next/font/google";
import background from "../public/background.svg";
import { Invoice, RfqSlip, Grn } from "./_components/svgs";
import { SapLogo, AmazonLogo, UnfiLogo } from "./_components/amzon-logo";
import { LinkedinSvg, Xsvg } from "./_components/svg";
import { Logo } from "./_components/logo";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className="w-screen h-screen absolute p-4 overflow-hidden"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-6 w-[69%] left-1/2 -translate-x-1/2 rounded-lg flex items-center justify-between bg-black z-50 px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              window.open("https://beta.getinterface.tech/login", "_blank");
            }}
            className="bg-white cursor-pointer hover:bg-neutral-200 text-black px-4 py-2 rounded-lg font-medium transition-colors duration-300"
          >
            Login
          </button>
        </div>
        <Logo />
        <button
          className="bg-[#3EC76A] text-black px-4 py-2 rounded-lg font-medium cursor-pointer"
          onClick={() => {
            window.open(
              "https://cal.com/rebhav-bharadwaj/introductory-chat",
              "_blank"
            );
          }}
        >
          Get in touch
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 items-center z-50">
        <h3
          className={`${darkerGrotesque.className} text-[68px] font-bold whitespace-nowrap`}
        >
          Reimagining Services.
        </h3>
      </div>
      <RfqSlip />
      <Invoice />
      <Grn />

      <AmazonLogo />
      <SapLogo />
      <UnfiLogo />
      <div className="absolute bottom-4 w-full text-center">
        <a
          href="/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 font-semibold hover:text-[#51eb82] text-sm transition-colors duration-300"
        >
          Privacy Policy
        </a>
      </div>

      <div className="absolute bottom-4 right-16 flex gap-2 items-center">
        <a href="https://x.com/getinterface" target="_blank">
          <Xsvg />
        </a>
        <a
          href="https://www.linkedin.com/company/interface-ai-labs/"
          target="_blank"
        >
          <LinkedinSvg />
        </a>
      </div>
    </div>
  );
}
