import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  title?: string;
};

const Notification = ({ className, title }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5",
        className || ""
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-color-5 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        🔔
      </div>

      <div className="flex-1">
        <h6 className="mb-1 font-orbitron font-semibold text-sm text-white">
          {title || "New Event"}
        </h6>
        <div className="flex items-center justify-between">
          <p className="text-xs font-poppins text-n-3">1m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;