"use client";

import Image from "next/image";
import { LogoRosa } from "../../assets/index";
import { Instagram, Mail, MapPin, LinkedinIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
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
      after:bg-white 
      after:transition-all 
      after:duration-300 
      after:-translate-x-1/2
      hover:after:w-full
      after:rounded-full
      cursor-pointer
      text-white
    `;

  const getLinkClasses = (linkName: string) => {
    const isActive = pathname === `/${linkName}` || (linkName === "" && pathname === "/");
    return `
        ${baseLinkClasses}
        ${isActive ? "text-primary-hover" : "text-primary"}
        ${isActive ? "after:w-full" : "after:w-0"}
      `;
  };

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };

  return (
    <footer className="bg-primary text-white pt-8 px-4">
      <div className="container mx-auto flex font-montserrat">
        <Image
          src={LogoRosa}
          alt="Logo Querer Bem"
          className="rounded-full hover:scale-110 transition-transform duration-200"
          width={260}
        />

        <section className="w-full px-[5%] mx-auto gap-6 flex-col flex">
          <div className="px-[5%] h-fit border-b pb-4">
            <nav className="flex justify-between font-montserrat font-medium gap-8 text-lg">
              <span
                onClick={() => handleLinkClick("")}
                className={getLinkClasses("")}
              >
                Início
              </span>
              <span
                onClick={() => handleLinkClick("Sobre")}
                className={getLinkClasses("sobre")}
              >
                Sobre
              </span>
              <span
                onClick={() => handleLinkClick("Contato")}
                className={getLinkClasses("contato")}
              >
                Contato
              </span>
              <span
                onClick={() => handleLinkClick("Blog")}
                className={getLinkClasses("blog")}
              >
                Blog
              </span>
            </nav>
          </div>

          <div className="flex flex-col w-fit justify-center gap-4 pl-[5%]">
            <a href="https://www.instagram.com/quererbemsaude?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank" className="flex gap-2 items-center">
              <Instagram size={28} />
              <p>Instagram</p>
            </a>
            
            <a href="https://www.linkedin.com/company/querer-bem-sa%C3%BAde/" target="blank" className="flex gap-2 items-center">
              <LinkedinIcon size={28} />
              <p className="pt-1">Linkedin</p>
            </a>

            <a href="mailto:polyana@quererbemsaude.com.br" target="blank" className="flex gap-2 items-center">
              <Mail size={28} />
              <p>polyana@quererbemsaude.com.br</p>
            </a>

            <div className="flex gap-2 items-center">
              <MapPin size={28} />
              <p>Recife, PE</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}