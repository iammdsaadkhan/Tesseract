import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    // Forced dark class here for permanent dark mode
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-n-8 text-n-1 antialiased`}
        style={{ backgroundColor: "#0E0C15" }}
      >
        {children}
      </body>
    </html>
  );
}