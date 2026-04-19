import React from "react";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[79.5625rem] h-[79.5625rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-color-4 to-n-1 filter blur-[150px]"></div>
    </div>
  );
};

export const VideoPlaceholder = () => {
  return (
    <div className="relative aspect-video bg-n-11 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-color-1 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
            </div>
        </div>
    </div>
  );
};