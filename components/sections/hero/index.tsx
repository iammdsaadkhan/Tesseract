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
          {/* CHANGED: Made the main TESSERACT text pure white with a clean white glow */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-wider text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            TESSERACT
          </h1>
          
          <h2 className="font-orbitron text-xl md:text-3xl text-n-10 mb-6">
            Where IITM BS Students Come to <span className="text-color-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">Play</span>, <span className="text-color-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">Connect</span> & <span className="text-color-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">Belong</span>
          </h2>
          
          <p className={cn("font-poppins max-w-3xl mx-auto mb-8 text-n-3 text-lg md:text-xl")}>
            A gamified community platform — beyond academics, beyond boundaries.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap items-center">
            <Button 
              href="#join" 
              className="!bg-gradient-to-r from-color-4 to-color-5 !text-white border-none shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300"
            >
              Join the Community
            </Button>
            
            <Button 
              href="#explore" 
              className="border-2 border-color-4 !text-color-4 !bg-transparent hover:!bg-color-4/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              Explore Tesseract
            </Button>
          </div>
        </div>

        {/* CENTRAL GAMING WINDOW */}
        <div className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}>
          <div className={cn("relative z-1 rounded-2xl p-0.5 bg-gradient-to-b from-color-4 via-color-5 to-color-1 shadow-[0_0_30px_rgba(168,85,247,0.3)]")}>
            <div className={cn("relative bg-n-8 rounded-[1rem] overflow-hidden")}>
              
              {/* Fake Window Header bar */}
              <div className={cn("h-[1.5rem] bg-n-6 border-b border-n-5 flex items-center px-4 space-x-2")}>
                <div className="w-3 h-3 rounded-full bg-color-1 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-color-2 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-color-3 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              </div>
              
              {/* Main Window Content */}
              <div
                className={cn(
                  "aspect-[33/40] rounded-b-[0.9rem] bg-n-8 md:aspect-[688/490] lg:aspect-[1024/490] relative overflow-hidden"
                )}
              >
                {/* Hero Image Background */}
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1024&auto=format&fit=crop" 
                  alt="Tesseract Gaming Arena" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />

                {/* Subtle overlay to ensure text/UI elements pop */}
                <div className="absolute inset-0 bg-n-8/30"></div>

                {/* Floating Notification Box */}
                <div className="absolute top-[30%] right-[2rem] hidden w-[16rem] xl:flex flex-col bg-n-8/90 backdrop-blur-md border border-n-6 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1 cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-color-5/20 text-xl">
                      🎮
                    </div>
                    <h6 className="font-orbitron text-sm font-semibold text-white tracking-wide">Live Tournament</h6>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-color-1 border-2 border-n-8"></div>
                      <div className="w-6 h-6 rounded-full bg-color-2 border-2 border-n-8"></div>
                      <div className="w-6 h-6 rounded-full bg-color-3 border-2 border-n-8"></div>
                    </div>
                    <span className="text-xs font-code text-n-3">Just now</span>
                  </div>
                </div>

                {/* Floating Bottom Bar */}
                <div className="absolute bottom-6 left-5 right-5 md:bottom-10 md:left-1/2 md:right-auto md:w-[26rem] md:-translate-x-1/2 flex items-center justify-center gap-4 h-[3.5rem] px-6 bg-n-8/90 backdrop-blur-md border border-n-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-color-4 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-color-5 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-color-1 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                  <p className="font-code text-sm text-white tracking-wider">Matchmaking in Progress...</p>
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