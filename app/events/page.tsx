import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Section from "@/components/layout/section";
import Heading from "@/components/atoms/heading";
import Button from "@/components/atoms/button";
import { cn } from "@/lib/utils";

// Extended event data specifically for the Events page
const allEvents = [
  {
    id: "1",
    title: "Friday Night Smash Karts",
    category: "Gaming",
    date: "Friday, 8:00 PM IST",
    description: "Join the lobby and race against your peers. Voice chat required for maximum chaos.",
    status: "Upcoming",
    gradient: "from-color-1 to-color-2",
  },
  {
    id: "2",
    title: "Mystery Riddle Hunt",
    category: "Challenge",
    date: "Live Now",
    description: "Solve clues hidden across the platform to win exclusive digital badges.",
    status: "Live",
    gradient: "from-color-3 to-color-4",
  },
  {
    id: "3",
    title: "Anime Watch Party",
    category: "Social",
    date: "Saturday, 9:00 PM IST",
    description: "Grab your snacks. We're streaming the latest episodes together in the main theater.",
    status: "Upcoming",
    gradient: "from-color-4 to-color-5",
  },
  {
    id: "4",
    title: "Valorant Custom 5v5",
    category: "Esports",
    date: "Sunday, 4:00 PM IST",
    description: "Drafting teams of all skill levels. Come to sweat or just to hang out in the lobby.",
    status: "Upcoming",
    gradient: "from-color-1 to-color-5",
  },
  {
    id: "5",
    title: "Study Beats & Chill",
    category: "Chill",
    date: "24/7 Room",
    description: "A persistent audio room with lofi beats and muted mics. Body doubling for assignments.",
    status: "Live",
    gradient: "from-color-2 to-color-3",
  },
  {
    id: "6",
    title: "Code Golf Tournament",
    category: "Challenge",
    date: "Completed",
    description: "Who can write the shortest Python script? Check the leaderboard for last week's winners.",
    status: "Completed",
    gradient: "from-n-4 to-n-5",
  }
];

export default function EventsPage() {
  return (
    <main className="bg-n-1 min-h-screen flex flex-col">
      {/* We import the Navbar so the user can navigate back */}
      <Navbar />
      
      {/* Added top padding to push content below the fixed Navbar */}
      <div className="flex-grow pt-[8rem] lg:pt-[10rem] pb-20">
        <Section crosses customPaddings className="py-10">
          <div className="container">
            
            {/* Header Area */}
            <div className="max-w-[50rem] mx-auto text-center mb-16">
              <Heading 
                title="The Arena Awaits" 
                className="font-orbitron drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] mb-4"
              />
              <p className="font-poppins text-n-3 text-lg">
                From sweaty esports tournaments to chill late-night watch parties. Find your squad and jump in.
              </p>
            </div>

            {/* 3-Column Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event) => (
                <div 
                  key={event.id}
                  className="group relative block p-0.5 rounded-3xl transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Glowing Gradient Border */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-50 group-hover:opacity-100 transition-opacity duration-300 shadow-lg",
                    event.gradient
                  )} />
                  
                  {/* Inner Glassmorphism Card */}
                  <div className="relative h-full flex flex-col bg-n-1/90 backdrop-blur-xl rounded-[1.4rem] p-6 lg:p-8">
                    
                    {/* Top Row: Category Tag & Status Dot */}
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-orbitron text-xs font-bold uppercase tracking-wider text-white bg-white/10 px-3 py-1 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
                        {event.category}
                      </span>
                      
                      <div className="flex items-center">
                        <div className={cn(
                          "w-2 h-2 rounded-full mr-2 shadow-[0_0_8px_currentColor]",
                          event.status === "Live" ? "bg-color-3 text-color-3 animate-pulse" : 
                          event.status === "Completed" ? "bg-n-4 text-n-4" : "bg-color-2 text-color-2"
                        )} />
                        <span className="font-code text-xs text-n-3">{event.status}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-orbitron text-2xl mb-3 text-white">
                      {event.title}
                    </h3>
                    
                    <p className="font-code text-color-2 text-sm mb-4">
                      {event.date}
                    </p>
                    
                    <p className="font-poppins text-n-3 text-sm flex-grow mb-8">
                      {event.description}
                    </p>

                    {/* Bottom CTA Button */}
                    <div className="mt-auto">
                      <Button 
                        className={cn(
                          "w-full font-orbitron tracking-wider",
                          event.status === "Completed" ? "opacity-50 pointer-events-none" : "shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        )}
                        href={event.status === "Completed" ? "#" : "#join-event"}
                      >
                        {event.status === "Completed" ? "View Results" : "Enter Lobby"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}