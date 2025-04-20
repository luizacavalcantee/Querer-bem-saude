"use client";

import Image from "next/image";
import { Logo } from "@/assets";
import { useState } from "react";

function TopBar() {
  const [activeLink, setActiveLink] = useState("início");

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
    after:bg-primary-hover 
    after:transition-all 
    after:duration-300 
    after:-translate-x-1/2
    hover:after:w-full
    after:rounded-full
    cursor-pointer
  `;

  const getLinkClasses = (linkName: string) => {
    const isActive = activeLink === linkName;
    return `
      ${baseLinkClasses}
      ${isActive ? 'text-primary-hover' : 'text-primary'}
      ${isActive ? 'after:w-full' : 'after:w-0'}
    `;
  };

  return (
    <div className="flex items-center bg-background justify-between py-4 px-12 shadow-xl z-10">
      <Image 
        src={Logo} 
        alt="Logo Querer Bem" 
        className="h-16 w-min hover:scale-110 transition-transform duration-200 cursor-pointer" 
      />
      
      <nav className="flex font-montserrat font-medium gap-8 text-lg">
        <span
          onClick={() => setActiveLink("início")}
          className={getLinkClasses("início")}
        >
          Início
        </span>
        <span
          onClick={() => setActiveLink("sobre")}
          className={getLinkClasses("sobre")}
        >
          Sobre
        </span>
        <span
          onClick={() => setActiveLink("contato")}
          className={getLinkClasses("contato")}
        >
          Contato
        </span>
        <span
          onClick={() => setActiveLink("blog")}
          className={getLinkClasses("blog")}
        >
          Blog
        </span>
      </nav>
    </div>
  );
}

export default TopBar;