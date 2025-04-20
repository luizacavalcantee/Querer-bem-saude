"use client";

import { useState } from "react";
import Image from "next/image";
import { LogoRosa } from "../../assets/index";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
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
    const isActive = activeLink === linkName;
    return `
        ${baseLinkClasses}
        ${isActive ? "text-primary-hover" : "text-primary"}
        ${isActive ? "after:w-full" : "after:w-0"}
      `;
  };

  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="container mx-auto flex font-montserrat gap-8">
        <Image
          src={LogoRosa}
          alt="Logo Querer Bem"
          className="w-40 rounded-full"
          width={160} // Ajuste o tamanho conforme necessário
          height={160} // Ajuste o tamanho conforme necessário
        />

        <section className="w-full px-[8%] mx-auto gap-6 flex-col flex">
          <div className="px-[8%] h-fit border-b pb-4">
            <nav className="flex justify-between font-montserrat font-medium gap-8  text-lg">
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

          <div className="flex flex-col w-fit justify-center gap-4 pl-[8%]">
            <a href="#" target="blank" className="flex gap-2">
              <Instagram size={28} />
              <p>Instagram</p>
            </a>

            <a href="#" target="blank" className="flex gap-2">
              <Mail size={28} />
              <p>polyana@quererbemsaude.com.br</p>
            </a>

            <div className="flex gap-2">
              <MapPin size={28} />
              <p>Recife, PE</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}