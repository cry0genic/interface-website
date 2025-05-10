import React, { Dispatch, SetStateAction } from "react";
import { manrope } from "@/lib/fonts";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import People from "./icons/people";
const CentrePiece = ({
  centrePieceRef,
  hovered,
  setHovered,
}: {
  centrePieceRef: React.RefObject<HTMLDivElement | null>;
  hovered: boolean;
  setHovered: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="flex items-center justify-center h-full w-full flex-col gap-8 p-8"
      ref={centrePieceRef}
    >
      <p className={`${manrope.className} text-xl font-semibold`}>
        Lorem Ipsum Figure this out
      </p>
      {hovered ? <AiLabour /> : <HumanLabour />}
      <section className="flex items-center justify-center gap-4 w-full">
        <button
          className="w-full border py-2 rounded-md bg-gradient-to-t from-[#1C3AE3] to-[#5870F7] text-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Yes
        </button>
        <button className="w-full border py-2 rounded-md bg-white">No</button>
      </section>
    </div>
  );
};

export default CentrePiece;

const HumanLabour = () => {
  return (
    <div className="relative h-[146px] w-[250px] overflow-hidden rounded-lg bg-background border border-blue-300/10">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#5B71EB"
        maxOpacity={0.2}
        flickerChance={0.1}
        height={800}
        width={800}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2">
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#5B71EB]">
          <People className="text-white" />
        </span>
        <p className="text-lg">Human Labour</p>
      </div>
    </div>
  );
};
const AiLabour = () => {
  return (
    <div className="relative h-[146px] w-[250px] overflow-hidden rounded-lg bg-[#43484C] border border-blue-300/10">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#435DF0"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2">
        <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#5B71EB]">
          <People className="text-white" />
        </span>
        <p className="text-lg text-white">AI Integrated</p>
      </div>
    </div>
  );
};
