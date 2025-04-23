"use client";

import Image from "next/image";
import { Logo } from "@/assets/index";
import { usePathname, useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

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
    const isActive = pathname === `/${linkName}` || (linkName === "" && pathname === "/");
    return `
      ${baseLinkClasses}
      ${isActive ? 'text-primary-hover' : 'text-primary'}
      ${isActive ? 'after:w-full' : 'after:w-0'}
    `;
  };

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };

  return (
    <div className="flex items-center bg-background justify-between py-4 px-12 shadow-lg relative z-10">
      <Image 
        src={Logo} 
        alt="Logo Querer Bem" 
        className="h-16 w-min hover:scale-110 transition-transform duration-200 cursor-pointer" 
      />
      
      <nav className="flex font-montserrat font-medium gap-8 text-lg">
        <span
          onClick={() => handleLinkClick("")}
          className={getLinkClasses("")}
        >
          Início
        </span>
        <span
          onClick={() => handleLinkClick("Explore")}
          className={getLinkClasses("Explore")}
        >
          Explore
        </span>
        <span
          onClick={() => handleLinkClick("Contato")}
          className={getLinkClasses("Contato")}
        >
          Contato
        </span>
        <span
          onClick={() => handleLinkClick("Blog")}
          className={getLinkClasses("Blog")}
        >
          Blog
        </span>
      </nav>
    </div>
  );
}