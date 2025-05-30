"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoRosa } from "@/assets/index";
import { Instagram, Mail, MapPin, LinkedinIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
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
    const normalizedPath = pathname.toLowerCase().replace(/^\/+/, "");
    const normalizedLink = linkName.toLowerCase();

    const isActive =
      normalizedPath === normalizedLink ||
      (linkName === "" && normalizedPath === "");

    return `
      ${baseLinkClasses}
      ${isActive ? "text-primary-hover after:w-full" : "text-primary after:w-0"}
    `;
  };

  const getLinkText = (linkName: string) => {
    switch (linkName) {
      case "":
        return "Início";
      case "explore":
        return "Explore";
      case "contato":
        return "Contato";
      case "blog":
        return "Blog";
      default:
        return linkName;
    }
  };

  return (
    <footer className="bg-primary text-white py-6 px-4 md:pt-8 md:px-4 md:py-0">
      <div className="container mx-auto flex font-montserrat flex-col md:flex-row">
        <Image
          src={LogoRosa}
          alt="Logo Querer Bem"
          className="rounded-full hover:scale-110 transition-transform duration-200 hidden md:block"
          width={260}
        />

        <section className="w-full md:px-18 mx-auto gap-6 flex-col flex">
          <div className="md:px-14 h-fit border-b pb-4 hidden md:block">
            <nav className="flex justify-between font-montserrat font-medium gap-8 text-lg">
              {["", "Explore", "Contato", "Blog"].map((link) => (
                <Link
                  key={link}
                  href={`/${link}`}
                  className={getLinkClasses(link)}
                >
                  {getLinkText(link)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col w-fit justify-center gap-2 md:gap-4 md:pl-14">
            <a
              href="https://www.instagram.com/quererbemsaude?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Instagram size={24} />
              <p className="text-sm md:text-base">Instagram</p>
            </a>

            <a
              href="https://www.linkedin.com/company/querer-bem-sa%C3%BAde/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <LinkedinIcon size={24} />
              <p className="text-sm md:text-base pt-1">Linkedin</p>
            </a>

            <a
              href="mailto:polyana@quererbemsaude.com.br"
              className="flex gap-2 items-center"
            >
              <Mail size={24} />
              <p className="text-sm md:text-base">polyana@quererbemsaude.com.br</p>
            </a>

            <div className="flex gap-2 items-center">
              <MapPin size={24} />
              <p className="text-sm md:text-base">Recife, PE</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}