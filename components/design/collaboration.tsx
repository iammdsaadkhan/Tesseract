import React from "react";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <svg width="162" height="76" viewBox="0 0 162 76" fill="none">
        <path
          d="M0 0C40 0 76 36 76 76"
          stroke="#26242C"
          strokeWidth="1"
        />
        <path
          d="M162 76C162 36 126 0 86 0"
          stroke="#26242C"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[10.125rem] -mt-1 mr-10 pointer-events-none xl:block">
      <svg width="162" height="76" viewBox="0 0 162 76" fill="none">
        <path
          d="M162 0C122 0 86 36 86 76"
          stroke="#26242C"
          strokeWidth="1"
        />
        <path
          d="M0 76C0 36 36 0 76 0"
          stroke="#26242C"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};