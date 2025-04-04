/* eslint-disable @next/next/no-img-element */
import React from "react";
import RfqSlipSVG from "../../public/svg/rfq.svg";
import InvoiceSVG from "../../public/svg/invoice.svg";
import GrnSVG from "../../public/svg/grn.svg";

export const RfqSlip = () => {
  return (
    <img
      src={RfqSlipSVG.src}
      alt="Rfq Slip"
      className="origin-top-left rotate-[-14.98deg] absolute xl:top-[240px]"
    />
  );
};

export const Invoice = () => {
  return (
    <img
      src={InvoiceSVG.src}
      alt="Invoice"
      className="right-[-20px] rotate-[3.98deg] absolute xl:top-[150px]"
    />
  );
};
export const Grn = () => {
  return (
    <img
      src={GrnSVG.src}
      alt="GRN"
      className="bottom-[-1px] left-[-10px] rotate-[3.98deg] absolute"
    />
  );
};
