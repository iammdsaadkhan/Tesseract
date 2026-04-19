import React from "react";
import Section from "@/components/layout/section";
import { collabContent, collabText } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Heading from "@/components/atoms/heading"; // Fixed absolute import path!

// We map extra styling and route data to the content from your constants file
const communityDetails = [
  { url: "/community/gaming", gradient: "from-color-1 to-color-2", shadow: "group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]", icon: "🎮" },
  { url: "/community/creative", gradient: "from-color-3 to-color-4", shadow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]", icon: "🎨" },
  { url: "/community/social", gradient: "from-color-4 to-color-5", shadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]", icon: "💬" },
];

const Communities = () => {
  return (
    <Section id="communities" crosses>
      <div className="container relative z-2">
        <div className="text-center max-w-[50rem] mx-auto mb-16 md:mb-20">
          <Heading
            className="font-orbitron drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            title="Our Communities"
          />
          <p className="body-2 text-n-3 font-poppins text-lg mt-4">
            {collabText}
          </p>
        </div>

        {/* 3-Column Grid for Communities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collabContent.map((item, index) => {
            const details = communityDetails[index];

            return (
              <Link 
                key={item.id} 
                href={details.url}
                className="group relative block transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Gradient Border Wrapper */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-70 transition-opacity duration-300 group-hover:opacity-100",
                  details.gradient,
                  details.shadow
                )} />
                
                {/* Inner Card (Glassmorphism) */}
                <div className="relative h-full flex flex-col items-center text-center m-[2px] rounded-2xl bg-n-1/90 backdrop-blur-xl p-8 transition-colors duration-300 group-hover:bg-n-1/70">
                  
                  {/* Glowing Icon Placeholder */}
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-n-2 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] text-4xl">
                    {details.icon}
                  </div>
                  
                  <h4 className="h5 mb-4 font-orbitron text-white">
                    {item.title}
                  </h4>
                  
                  <p className="body-2 text-n-3 font-poppins mb-6 flex-grow">
                    {item.text}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center font-orbitron text-xs font-bold uppercase tracking-wider text-color-4 transition-colors group-hover:text-color-5">
                    Enter Portal 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Communities;