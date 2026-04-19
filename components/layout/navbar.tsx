"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/constants";
import Button from "../atoms/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 font-orbitron font-bold text-2xl text-color-4" href="/">
          TESSERACT
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={cn(
                  "block relative font-orbitron text-xs uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold",
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <Button className="hidden lg:flex" href="#join">
          Join Community
        </Button>
      </div>
    </div>
  );
};

export default Navbar;