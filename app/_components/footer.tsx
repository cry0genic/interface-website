import { cn } from "@/lib/utils";
import React from "react";
import Twitter from "./icons/twitter";
import LinkedIn from "./icons/linkedin";

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={cn("py-6", className)}>
      <div className="container mx-auto text-sm flex justify-between items-center">
        <a href="/privacy-policy.pdf" target="_blank">
          Privacy Policy
        </a>
        <a href="#" target="_blank">
          © 2025 Copyright - Heimer Labs Private Limited
        </a>

        <div className="flex gap-2 items-center">
          <a href="https://x.com/getinterface" target="_blank">
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/interface-ai-labs/"
            target="_blank"
          >
            <LinkedIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
