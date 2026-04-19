"use client";

import React, { useRef } from "react";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";

type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        
        {/* TEXT CONTENT */}
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-color-4 via-color-5 to-color-1 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            TESSERACT
          </h1>
          
          <h2 className="font-orbitron text-xl md:text-3xl text-n-10 mb-6">
            Where IITM BS Students Come to <span className="text-color-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Play</span>, <span className="text-color-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">Connect</span> & <span className="text-color-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Belong</span>
          </h2>
          
          <p className={cn("font-poppins max-w-3xl mx-auto mb-8 text-n-3 text-lg md:text-xl")}>
            A gamified community platform — beyond academics, beyond boundaries.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap items-center">
            {/* Primary Gradient Button */}
            <Button 
              href="#join" 
              className="!bg-gradient-to-r from-color-4 to-color-5 !text-white border-none shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300"
            >
              Join the Community
            </Button>
            
            {/* Outline Button */}
            <Button 
              href="#explore" 
              className="border-2 border-color-4 !text-color-4 !bg-transparent hover:!bg-color-4/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Explore Tesseract
            </Button>
          </div>
        </div>

        {/* CENTRAL GAMING WINDOW PLACEHOLDER */}
        <div className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}>
          <div className={cn("relative z-1 rounded-2xl p-0.5 bg-gradient-to-b from-color-4 via-color-5 to-color-1 shadow-[0_0_30px_rgba(168,85,247,0.3)]")}>
            <div className={cn("relative bg-n-1 rounded-[1rem] overflow-hidden")}>
              
              {/* Fake Window Header bar */}
              <div className={cn("h-[1.5rem] bg-n-2 border-b border-n-6/50 flex items-center px-4 space-x-2")}>
                <div className="w-3 h-3 rounded-full bg-color-1 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-color-2 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-color-3 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              </div>
              
              {/* Main Window Content */}
              <div
                className={cn(
                  "aspect-[33/40] rounded-b-[0.9rem] flex items-center justify-center bg-n-1 md:aspect-[688/490] lg:aspect-[1024/490] relative overflow-hidden"
                )}
              >
                {/* Subtle grid background inside the window */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Pulsing Placeholder Text */}
                <div className="text-center relative z-10 animate-pulse opacity-50">
                   <h3 className="font-orbitron font-bold text-3xl md:text-6xl text-n-4 tracking-[0.2em] mb-4">SYSTEM READY</h3>
                   <p className="font-code text-color-4 text-sm md:text-base">Awaiting user input...</p>
                </div>
              </div>
            </div>
          </div>
          <Gradient />
        </div>

        {/* Animated Neon Balls Background */}
        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;