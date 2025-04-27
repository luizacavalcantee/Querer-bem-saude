"use client";

import Image from "next/image";
import { Logo } from "@/assets/index";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Home, Compass, Mail, Newspaper, Menu, X } from "lucide-react";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseLinkClasses = `
    relative 
    transition-all 
    duration-200 
    pb-1
    after:content-[''] 
    after:absolute 
    after:bottom-0 
    after:left-1/2 
    after:h-[2px]
    after:bg-transparent 
    md:after:bg-primary-hover
    after:transition-all 
    after:duration-300 
    after:-translate-x-1/2
    hover:after:w-full
    after:rounded-full
    cursor-pointer
    flex
    items-center
    gap-2
    md:hover:after:w-full
  `;

  const getLinkClasses = (linkName: string) => {
    const isActive = pathname === `/${linkName}` || (linkName === "" && pathname === "/");
    return `
      ${baseLinkClasses}
      ${isActive ? 'text-primary-hover' : 'text-primary'}
      ${isActive ? 'after:w-full' : 'after:w-0'}
      ${isActive ? 'md:after:w-full' : 'md:after:w-0'}
      ${isActive ? 'bg-primary/15 rounded-lg md:bg-transparent' : ''}
      p-2 md:p-0
    `;
  };

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center bg-background justify-between py-3 md:py-4 px-6 md:px-12 shadow-lg relative z-10">
      <Image 
        src={Logo} 
        alt="Logo Querer Bem" 
        className="h-12 w-min md:hover:scale-110 transition-transform duration-200 cursor-pointer md:h-16" 
      />
      
      <button
        className="md:hidden text-primary focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-8 h-8" strokeWidth={2} />
        ) : (
          <Menu className="w-8 h-8" strokeWidth={2} />
        )}
      </button>

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row font-montserrat font-medium gap-4 md:gap-8 text-lg absolute md:static top-full left-0 w-full md:w-auto bg-background md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <span
          onClick={() => handleLinkClick("")}
          className={getLinkClasses("")}
        >
          <Home className="w-5 h-5 md:hidden" />
          Início
        </span>
        <span
          onClick={() => handleLinkClick("Explore")}
          className={getLinkClasses("Explore")}
        >
          <Compass className="w-5 h-5 md:hidden" />
          Explore
        </span>
        <span
          onClick={() => handleLinkClick("Contato")}
          className={getLinkClasses("Contato")}
        >
          <Mail className="w-5 h-5 md:hidden" />
          Contato
        </span>
        <span
          onClick={() => handleLinkClick("Blog")}
          className={getLinkClasses("Blog")}
        >
          <Newspaper className="w-5 h-5 md:hidden" />
          Blog
        </span>
      </nav>
    </div>
  );
}