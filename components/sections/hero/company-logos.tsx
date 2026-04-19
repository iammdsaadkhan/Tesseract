import React from "react";

type Props = {
  className?: string;
};

const CompanyLogos = ({ className }: Props) => {
  return (
    <div className={className}>
      <h5 className="font-orbitron text-[0.65rem] uppercase tracking-[0.2em] mb-6 text-center text-n-1/50">
        Connecting IITM BS students across the globe
      </h5>
    </div>
  );
};

export default CompanyLogos;