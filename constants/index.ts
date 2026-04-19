// NAVIGATION
export const navigation = [
  { id: "0", title: "Home", url: "/" },
  { id: "1", title: "About", url: "/about" },
  { id: "2", title: "Events", url: "/events" },
  { id: "3", title: "Communities", url: "/community/gaming" },
  { id: "4", title: "Contact", url: "#join", onlyMobile: true },
];

// HERO SECTION (Kept empty so the old Hero component doesn't crash before we edit it)
export const heroIcons = [];
export const notificationImages = [];
export const companyLogos = [];

// WHAT WE OFFER (Replaces Brainwave's "benefits" array)
export const benefits = [
  {
    id: "0",
    title: "Mini Games",
    text: "Jump into riddles, puzzles, and brain teasers. Give your brain a fun workout without the grades.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: "🎮", 
    imageUrl: "",
  },
  {
    id: "1",
    title: "Esports",
    text: "Compete in casual multiplayer tournaments. From Smash Karts to Valorant, prove who rules the lobby.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: "🕹️",
    imageUrl: "",
    light: true,
  },
  {
    id: "2",
    title: "Movie Nights",
    text: "Grab your popcorn. Chill together and watch movies with friends across the country.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: "🎬",
    imageUrl: "",
  },
  {
    id: "3",
    title: "Open Chats",
    text: "No pressure, no syllabus. Just pure, unfiltered conversations and vibing with your peers.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: "💬",
    imageUrl: "",
    light: true,
  },
  {
    id: "4",
    title: "Networking",
    text: "Break out of your study group bubble. Meet incredible people across different batches.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: "🤝",
    imageUrl: "",
  },
  {
    id: "5",
    title: "Peer Support",
    text: "Share knowledge, discuss ideas, and lift each other up. We are all in this together.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: "🧠",
    imageUrl: "",
  },
];

// COMMUNITIES (Replaces Brainwave's "collabContent" array)
export const collabText = "Don't build pages. Build an experience. Tesseract is where you belong.";
export const collabContent = [
  {
    id: "0",
    title: "Gaming & Esports",
    text: "Compete, game, and have fun.",
  },
  {
    id: "1",
    title: "Creative & Cultural",
    text: "Express yourself, make art, and enjoy culture.",
  },
  {
    id: "2",
    title: "Social & Networking",
    text: "Connect, chat, and grow your circle.",
  },
];
export const collabApps = [];

// EVENTS (Replaces Brainwave's "roadmap" array)
export const roadmap = [
  {
    id: "0",
    title: "Friday Night Smash Karts",
    text: "Join the lobby and race against your peers in our weekly tournament.",
    date: "Coming Soon",
    status: "done", // Uses Brainwave's native styling tags
    imageUrl: "",
    colorful: true,
  },
  {
    id: "1",
    title: "Anime Watch Party",
    text: "Grab your snacks, we're streaming the latest episodes together.",
    date: "TBA",
    status: "progress",
    imageUrl: "",
  },
  {
    id: "2",
    title: "Mystery Riddle Hunt",
    text: "Solve clues hidden across the platform to win exclusive digital badges.",
    date: "Live Now",
    status: "progress",
    imageUrl: "",
  },
];

// PRICING (Kept empty to avoid crashing; we will delete this section shortly)
export const pricing = [];

// FOOTER SOCIALS (Replaces Brainwave's "socials" array)
export const socials = [
  { id: "0", title: "Discord", iconUrl: "assets/socials/discord.svg", url: "#" },
  { id: "1", title: "Instagram", iconUrl: "assets/socials/instagram.svg", url: "#" },
  { id: "2", title: "LinkedIn", iconUrl: "assets/socials/telegram.svg", url: "#" }, // Reusing an existing icon until you add yours
];