import { Metadata } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/design/cursor-effect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"] 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Tesseract | IITM BS Community",
  description: "The premier gamified community for IITM BS Students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${orbitron.variable} ${poppins.variable} bg-n-8 text-n-1 antialiased`}
        style={{ backgroundColor: "#0E0C15" }}
      >
        {/* The neon cursor effect is now active globally! */}
        <CursorEffect />
        
        {children}
      </body>
    </html>
  );
}