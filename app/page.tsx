import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import Roadmap from "@/components/sections/roadmap";
import JoinUs from "@/components/sections/join-us"; 
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      {/* Changed bg-n-1 to bg-n-8 to enforce the deep black background */}
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem] bg-n-8")}>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Roadmap />
        <JoinUs />
        <Footer />
      </div>
      
      <ButtonGradient />
    </main>
  );
}