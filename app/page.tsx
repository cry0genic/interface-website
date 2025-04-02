/* eslint-disable @next/next/no-img-element */
import { Darker_Grotesque } from "next/font/google";
import background from "../public/background.svg";
import Invoice from "./_components/invoice";
import Proposal from "./_components/proposal";
import GoodsReport from "./_components/goods-report";
import interfaceLogo from "../public/interface.png";
import { SapLogo, AmazonLogo, UnfiLogo } from "./_components/amzon-logo";
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
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
            Login
          </button>
          <button className="text-white px-4 py-2 rounded-lg font-medium">
            Join Us
          </button>
        </div>
        <img src={interfaceLogo.src} alt="interface" />
        <button className="bg-[#3EC76A] text-black px-4 py-2 rounded-lg font-medium">
          Book a call
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 items-center z-50">
        <h3
          className={`${darkerGrotesque.className} text-[68px] font-bold whitespace-nowrap`}
        >
          Reimagining Services.
        </h3>
        <p className="text-[20px] font-bold text-neutral-400">
          Lorem ipsum dolor sit amet
          <small className="text-[#3EC76A] font-bold text-[20px]">
            {" "}
            consectetur
          </small>
        </p>
        <p className="text-[20px] font-bold text-neutral-400">
          Facilisi tellus massa phasellus lorem urna{" "}
        </p>
      </div>
      <Invoice />
      <Proposal />
      <GoodsReport />

      <AmazonLogo />
      <SapLogo />
      <UnfiLogo />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col gap-1 items-center">
        <a className="text-[16px] text-neutral-600">Privacy Policy</a>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col gap-1 items-center">
        <a href=""></a>
      </div>
    </div>
  );
}
