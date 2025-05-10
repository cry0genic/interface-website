"use client";
/* eslint-disable @next/next/no-img-element */
import CentrePiece from "./_components/centre-piece";
import { useRef, useState } from "react";
import { useConnectionPath } from "./_hooks/useConnectionPath";
import PurchaseOrder from "./_components/icons/purchase-order";
import Invoice from "./_components/icons/invoice";
import { SvgPath } from "./_components/svg-path";
export default function Home() {
  const centrePieceRef = useRef<HTMLDivElement>(null);
  const purchaseOrderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const sapRef = useRef<HTMLDivElement>(null);
  const pathPurchaseOrder = useConnectionPath(
    containerRef,
    centrePieceRef,
    purchaseOrderRef
  );
  const pathInvoice = useConnectionPath(
    containerRef,
    centrePieceRef,
    invoiceRef
  );
  const pathSap = useConnectionPath(containerRef, centrePieceRef, sapRef);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={containerRef}
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
        <div className="flex items-center justify-center w-full h-full relative">
          <div className="w-[min(480px,90vw)] h-[min(432px,81vw)] border border-neutral-600/10">
            <CentrePiece
              centrePieceRef={centrePieceRef}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>

          <div className="absolute top-4 left-4" ref={purchaseOrderRef}>
            <PurchaseOrder />
          </div>
          <div className="absolute bottom-4 right-4" ref={invoiceRef}>
            <Invoice />
          </div>
          <div
            className="absolute bottom-4 right-1/2 translate-x-1/2"
            ref={sapRef}
          >
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/910px-SAP_2011_logo.svg.png"
              }
              alt=""
              className="w-[min(100px,10vw)]"
            />
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
      {/* Path */}
      <SvgPath path={pathPurchaseOrder} />
      <SvgPath path={pathInvoice} />
      <SvgPath path={pathSap} />
    </div>
  );
}
