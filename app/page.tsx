"use client";
/* eslint-disable @next/next/no-img-element */
import CentrePiece from "./_components/centre-piece";
import { useRef, useState } from "react";
import { useConnectionPath } from "./_hooks/useConnectionPath";
import PurchaseOrder from "./_components/icons/purchase-order";
import Invoice from "./_components/icons/invoice";
import { SvgPath } from "./_components/svg-path";
import Deductions from "./_components/icons/deductions";
import Footer from "./_components/footer";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  const centrePieceRef = useRef<HTMLDivElement>(null);
  const purchaseOrderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const sapRef = useRef<HTMLDivElement>(null);
  const deductionsRef = useRef<HTMLDivElement>(null);
  const promotionsRef = useRef<HTMLDivElement>(null);
  const accentureRef = useRef<HTMLDivElement>(null);
  const deolliteRef = useRef<HTMLDivElement>(null);
  const pathPurchaseOrder = useConnectionPath(
    containerRef,
    centrePieceRef,
    purchaseOrderRef,
    "top",
    "right",
    -40,
    30
  );
  const pathInvoice = useConnectionPath(
    containerRef,
    centrePieceRef,
    invoiceRef,
    "right",
    "bottom"
  );
  const pathSap = useConnectionPath(
    containerRef,
    centrePieceRef,
    sapRef,
    "top",
    "right",
    -20
  );
  const pathDeductions = useConnectionPath(
    containerRef,
    centrePieceRef,
    deductionsRef,
    "top",
    "right"
  );
  const pathPromotions = useConnectionPath(
    containerRef,
    centrePieceRef,
    promotionsRef,
    "bottom",
    "left",
    20,
    20
  );
  const pathAccenture = useConnectionPath(
    containerRef,
    centrePieceRef,
    accentureRef,
    "left",
    "right"
  );
  const pathDeollite = useConnectionPath(
    containerRef,
    centrePieceRef,
    deolliteRef,
    "bottom",
    "bottom",
    0
  );
  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex flex-col px-6 pt-6 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle, #FBFCFC 2px, #F4F6F7 2px)`,
        backgroundRepeat: "repeat",
        backgroundSize: "20px 20px",
      }}
    >
      <main className="flex-grow grid grid-cols-[min(80px,4vw)_1fr_min(80px,4vw)] h-full w-full border border-neutral-600/10">
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
        <div className="flex items-center justify-center w-full h-full relative">
          <div className="w-[min(480px,90vw)] h-[min(432px,81vw)] border border-neutral-600/10">
            <CentrePiece
              centrePieceRef={centrePieceRef}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>

          <div className="absolute top-4 left-4 z-10" ref={purchaseOrderRef}>
            <PurchaseOrder />
          </div>
          <div className="absolute bottom-4 right-4 z-10" ref={invoiceRef}>
            <Invoice />
          </div>
          <div className="absolute top-4 right-0 z-10" ref={deductionsRef}>
            <Deductions />
          </div>
          <div className="absolute bottom-0 left-0 z-10" ref={promotionsRef}>
            <img src="/svg/cal.svg" alt="" />
          </div>
          <div className="absolute top-4 right-[30%] z-10" ref={sapRef}>
            <img src={"/svg/sp.svg"} alt="" className="w-[80px] h-auto" />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 left-[10%] z-10"
            ref={accentureRef}
          >
            <img
              src={"/svg/accenture.svg"}
              alt=""
              className="w-[80px] h-auto"
            />
          </div>
          <div
            className="absolute bottom-4 right-1/2 translate-x-1/2 z-10"
            ref={deolliteRef}
          >
            <img src={"/svg/deolite.svg"} alt="" className="w-[80px] h-auto" />
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
      <Footer className="flex-none" />
      {/* Path */}
      <SvgPath path={pathPurchaseOrder} hovered={hovered} />
      <SvgPath path={pathInvoice} hovered={hovered} />
      <SvgPath path={pathSap} hovered={hovered} />
      <SvgPath path={pathDeductions} hovered={hovered} />
      <SvgPath path={pathPromotions} hovered={hovered} />
      <SvgPath path={pathAccenture} hovered={hovered} />
      <SvgPath path={pathDeollite} hovered={hovered} />
    </div>
  );
}
