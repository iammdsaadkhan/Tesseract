import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services"; // <-- This imports it
import JoinUs from "@/components/sections/join-us"; 
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem] bg-n-8")}>
        <Navbar />
        <Hero />
        <Benefits />          {/* What We Offer */}
        <Collaboration />     {/* Our Communities */}
        <Roadmap />           {/* Upcoming & Past Events */}
        
        <Services />          {/* <-- THIS IS WHAT MAKES IT SHOW UP ON SCREEN */}
        
        <JoinUs />            {/* Ready to Join? */}
        <Footer />
      </div>
      
      <ButtonGradient />
    </main>
  );
}