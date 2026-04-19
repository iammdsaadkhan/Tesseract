import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron" 
});

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Tesseract | IITM BS Community",
  description: "A gamified student community platform for IITM BS students — where you come to relax, play, connect, and belong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} font-poppins bg-n-1 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}