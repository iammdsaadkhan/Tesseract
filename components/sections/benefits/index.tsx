import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { benefits } from "@/constants";
import Arrow from "@/components/svg/arrow";
import { GradientLight } from "@/components/design/benefits";
import ClipPath from "@/components/svg/clip-path";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-orbitron drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          title="What We Offer"
        />

        <div className="mb-10 flex flex-wrap gap-10 justify-center">
          {benefits.map((item) => (
            <div
              key={item.id}
              // Removed the inline style background URL to kill the light SVG
              className="relative block p-0.5 md:max-w-sm group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]">
                
                {/* Card Title */}
                <h5 className="font-orbitron text-2xl mb-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {item.title}
                </h5>
                
                {/* Card Description */}
                <p className="font-poppins body-2 mb-6 text-n-3">
                  {item.text}
                </p>
                
                <div className="mt-auto flex items-center">
                  <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {item.iconUrl}
                  </div>
                  
                  <p className="ml-auto font-orbitron text-xs font-bold uppercase tracking-wider text-color-4 group-hover:text-color-5 transition-colors duration-300">
                    Explore
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              {/* Made bg-n-8 solid (removed /80 opacity) to completely block any remaining white */}
              <div 
                className="absolute inset-0.5 bg-n-8 transition-colors duration-300 group-hover:bg-n-7 group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.15)]" 
                style={{ clipPath: `url(#benefits)` }}
              >
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;