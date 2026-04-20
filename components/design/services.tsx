import React from "react";
import Section from "@/components/layout/section";
import Heading from "@/components/atoms/heading";
import { cn } from "@/lib/utils";

// Tesseract specific data
const tesseractFeatures = [
  "Weekly Esports Tournaments",
  "Skill-based Matchmaking",
  "Custom Private Lobbies",
];

const Services = () => {
  return (
    <Section id="experience">
      <div className="container">
        <Heading
          title="An ecosystem built for the players."
          text="Tesseract brings together the best of gaming, creativity, and community under one roof."
          className="font-orbitron drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        />

        <div className="relative">
          {/* Top Big Card - Esports & Gaming */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-6/50 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] bg-n-8 hover:border-color-4 transition-colors duration-500 group">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                alt="Competitive Gaming"
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1024&auto=format&fit=crop"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto bg-n-8/80 backdrop-blur-md p-6 rounded-2xl border border-n-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <h4 className="font-orbitron text-2xl mb-4 text-white">Competitive Esports</h4>
              <p className="font-poppins body-2 mb-[3rem] text-n-3">
                Prove who rules the lobby. Compete in Valorant, Smash Karts, and more.
              </p>
              <ul className="body-2">
                {tesseractFeatures.map((item, index) => (
                  <li key={index} className="flex items-start py-4 border-t border-n-6">
                    <div className="w-6 h-6 flex items-center justify-center bg-color-4/20 rounded-full mr-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <span className="text-color-4 text-xs">✓</span>
                    </div>
                    <p className="font-code text-sm text-n-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            
            {/* Bottom Left Card - Watch Parties */}
            <div className="relative min-h-[39rem] border border-n-6/50 rounded-3xl overflow-hidden bg-n-8 hover:border-color-5 transition-colors duration-500 group">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1024&auto=format&fit=crop"
                  className="h-full w-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  alt="Movie Nights"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="font-orbitron text-2xl mb-4 text-white">Watch Parties & Chill</h4>
                <p className="font-poppins body-2 mb-[3rem] text-n-3">
                  Grab your popcorn. Stream the latest anime, movies, and live events in HD with friends across the country.
                </p>
              </div>

              {/* Fake Chat Bubble Widget */}
              <div className="absolute top-8 right-8 bg-n-8/90 backdrop-blur-md border border-n-6 px-4 py-3 rounded-t-xl rounded-bl-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <p className="font-code text-xs text-white">"Anyone down for episode 4 tonight?"</p>
              </div>
            </div>

            {/* Bottom Right Card - Voice Lobbies */}
            <div className="p-4 bg-n-8 rounded-3xl overflow-hidden lg:min-h-[39rem] border border-n-6/50 hover:border-color-1 transition-colors duration-500 group">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="font-orbitron text-2xl mb-4 text-white">24/7 Active Lobbies</h4>
                <p className="font-poppins body-2 mb-[2rem] text-n-3">
                  Jump into open voice channels and find your squad instantly. No scheduling required.
                </p>

                {/* Icons row */}
                <div className="flex items-center justify-between mt-8 mb-10">
                  {["🎧", "🎤", "💬", "🔥", "🚀"].map((icon, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center justify-center w-10 h-10 md:w-15 md:h-15 rounded-2xl bg-n-7 border border-n-6 shadow-lg transition-transform hover:scale-110 cursor-pointer",
                        index === 2 && "bg-color-1/20 border-color-1 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                      )}
                    >
                      <span className="text-xl md:text-3xl">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] border border-n-6">
                <img
                  src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1024&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  alt="Gaming Setup"
                />

                {/* Fake Voice Connection Widget */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] flex items-center p-3 pr-6 bg-n-8/90 backdrop-blur-md rounded-full border border-n-6 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                  <div className="w-10 h-10 flex items-center justify-center bg-color-3/20 rounded-full mr-4 border border-color-3 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                    <div className="w-3 h-3 bg-color-3 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-orbitron text-xs text-white">Voice Channel Connected</p>
                    <p className="font-code text-[0.6rem] text-color-3">Ping: 24ms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW Custom Tesseract glowing gradient background */}
          <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30 mix-blend-color-dodge z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-color-4 via-color-1 to-color-5 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;