import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Generating = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base",
        className || ""
      )}
    >
      {/* Replaced the missing loading image with a CSS spinner */}
      <div className="w-5 h-5 mr-4 border-2 border-color-1 border-t-transparent rounded-full animate-spin" />
      <span className="font-orbitron text-sm tracking-wider text-white">
        Tesseract is loading...
      </span>
    </div>
  );
};

export default Generating;