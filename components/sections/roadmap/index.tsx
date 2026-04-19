import Button from "@/components/atoms/button";
import Heading from "@/components/atoms/heading";
import TagLine from "@/components/atoms/tag-line";
import { Gradient } from "@/components/design/roadmap";
import Section from "@/components/layout/section";
import { roadmap } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const Events = (props: Props) => {
  return (
    <Section id="events" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading 
          tag="Join the Action" 
          title="Upcoming & Past Events" 
          className="font-orbitron drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
          {roadmap.map((item) => {
            const isActive = item.status === "progress"; 

            return (
              <div
                key={item.id}
                className={cn(
                  "md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] transition-transform duration-300 hover:-translate-y-2 group cursor-pointer",
                  item.colorful ? "bg-gradient-to-br from-color-4 to-color-5 shadow-[0_0_20px_rgba(59,130,246,0.2)]" : "bg-n-6/50 hover:bg-gradient-to-br hover:from-color-1 hover:to-color-2 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                )}
              >
                <div className="relative flex flex-col justify-between w-full overflow-hidden rounded-[2.4375rem] bg-n-1/90 backdrop-blur-xl p-8 xl:p-15 transition-colors group-hover:bg-n-1/70">
                  
                  {/* CSS Tech Grid (Replaced the old Brainwave image) */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative z-1 flex-grow flex flex-col">
                    <div className="mb-12 flex items-center justify-between">
                      <TagLine className="text-color-2 font-orbitron">{item.date}</TagLine>

                      <div className="flex items-center rounded bg-n-2 border border-n-6 px-4 py-1 text-white shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                        <div className={cn(
                            "w-2 h-2 rounded-full mr-2.5 shadow-[0_0_8px_currentColor]",
                            isActive ? "bg-color-3 text-color-3" : "bg-n-4 text-n-4"
                        )}></div>
                        <div className="font-orbitron text-[0.65rem] uppercase tracking-wider">
                            {isActive ? "Live / Upcoming" : "Completed"}
                        </div>
                      </div>
                    </div>

                    <h4 className="font-orbitron text-3xl mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-color-4 group-hover:to-color-5 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="font-poppins body-2 text-n-3">
                        {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
          <Button 
            href="/events" 
            className="!bg-transparent border-2 border-color-4 !text-color-4 hover:!bg-color-4/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            View All Events
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Events;