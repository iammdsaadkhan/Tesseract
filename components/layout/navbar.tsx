"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation } from "@/constants";
import Button from "../atoms/button";
import MenuSvg from "../svg/menu-svg";
import { HamburgerMenu } from "../design/navbar";

type Props = {};

const Navbar = (props: Props) => {
  const [hash, setHash] = useState<string>("");
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  // Keeps the scroll-spy logic for one-page sections, but modified slightly 
  // so it doesn't break when you navigate to actual separate pages later.
  useEffect(() => {
    const dynamicNavbarHighlight = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        if (current === null) return;

        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0 && hash !== sectionId) {
          setHash(`#${sectionId as string}`);
        }
      });
    };

    window.addEventListener("scroll", dynamicNavbarHighlight);
    return () => window.removeEventListener("scroll", dynamicNavbarHighlight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div
      className={cn(
        `fixed top-0 left-0 w-full z-50 border-b border-n-6/50 transition-colors duration-300`,
        openNavigation ? "bg-n-8/90" : "bg-n-8/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      )}
    >
      <div className={cn(`flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10`)}>
        
        {/* TESSERACT TEXT LOGO (Replaces the Brainwave Image) */}
        <Link href="/" className={cn(`block w-48 xl:mr-8`)}>
          <span className="font-orbitron font-black text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-color-4 via-color-5 to-color-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
            TESSERACT
          </span>
        </Link>

        <nav
          className={cn(
            `fixed inset-x-0 bottom-0 top-20 hidden bg-n-8/90 lg:static lg:mx-auto lg:flex lg:bg-transparent`,
            openNavigation ? "flex" : "hidden"
          )}
        >
          <div
            className={cn(
              "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
            )}
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  `block relative font-orbitron text-2xl uppercase text-n-3 transition-colors hover:text-color-4 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]`,
                  "px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold",
                  item.onlyMobile && "lg:hidden",
                  item.url === hash ? "z-2 lg:text-color-4" : "lg:text-n-3",
                  "lg:leading-5 xl:px-12"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* JOIN US CTA (Replaces "New Account" and "Sign In") */}
        <Button 
          className="hidden lg:flex font-orbitron tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all" 
          href="#join"
        >
          Join Us
        </Button>

        {/* Mobile Menu Toggle */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;