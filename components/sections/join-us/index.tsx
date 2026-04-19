import Section from "@/components/layout/section";
import Button from "@/components/atoms/button";

const JoinUs = () => {
  return (
    <Section id="join">
      <div className="container text-center max-w-4xl mx-auto py-10 md:py-20">
        <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          Ready to Join?
        </h2>
        <p className="font-poppins text-lg md:text-xl text-n-3 mb-10">
          Don't build pages. Build an experience. Tesseract is where you belong.
        </p>
        <div className="flex justify-center mt-8">
          <Button 
            href="#discord-link" 
            className="!bg-gradient-to-r from-color-1 via-color-2 to-color-4 !text-white border-none shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)] hover:scale-105 transition-all duration-300"
          >
            Join Tesseract Now
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default JoinUs;