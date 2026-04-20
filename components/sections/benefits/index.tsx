import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { benefits } from "@/constants";
import Arrow from "@/components/svg/arrow";
import { GradientLight } from "@/components/design/benefits";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-orbitron drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          title="What We Offer"
        />

        <div className="mb-10 flex flex-wrap gap-8 justify-center">
          {benefits.map((item) => (
            <div
              key={item.id}
              // Wrapper with padding (p-[2px]) to act as the border thickness, with rounded corners
              className="relative block p-[2px] md:max-w-sm w-full group hover:-translate-y-2 transition-transform duration-300 rounded-[2rem] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              {/* Glowing Gradient Border Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-color-4/40 via-n-8 to-color-5/40 opacity-70 group-hover:opacity-100 group-hover:from-color-4 group-hover:via-color-1 group-hover:to-color-5 transition-all duration-500"></div>

              {/* Inner Dark Card container */}
              <div className="relative z-2 flex min-h-[22rem] flex-col p-[2.4rem] bg-n-8 rounded-[1.9rem] transition-colors duration-300 group-hover:bg-n-8/90">
                
                {/* Card Title */}
                <h5 className="font-orbitron text-2xl mb-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {item.title}
                </h5>
                
                {/* Card Description */}
                <p className="font-poppins body-2 mb-6 text-n-3 flex-grow">
                  {item.text}
                </p>
                
                <div className="mt-auto flex items-center">
                  {/* Icon */}
                  <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {item.iconUrl}
                  </div>
                  
                  <p className="ml-auto font-orbitron text-xs font-bold uppercase tracking-wider text-color-4 group-hover:text-color-5 transition-colors duration-300">
                    Explore
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* Keeps the subtle background glow behind the text for specific cards */}
              {item.light && <GradientLight />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;