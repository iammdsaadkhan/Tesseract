import React from "react";
import Section from "./section";
import { socials } from "@/constants";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-1 border-t border-n-6/50">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        
        {/* TESSERACT COPYRIGHT TEXT */}
        <p className="caption font-poppins text-n-4 lg:block">
          &copy; {new Date().getFullYear()} Tesseract · IITM BS Community. Built for the players.
        </p>
        
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full bg-n-2 border border-n-6/50 transition-all duration-300 hover:bg-n-1 hover:border-color-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] group"
            >
              {/* Note: The Image component uses existing Brainwave SVGs until you replace them in public/assets */}
              <Image 
                src={item.iconUrl} 
                width={16} 
                height={16} 
                alt={item.title} 
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;