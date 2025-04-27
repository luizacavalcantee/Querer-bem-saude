"use client";

import { Capa, CapaMobile } from "@/assets/index";
import { MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };

  return (
    <section className="relative shadow-lg">
      <div>
        <div>
          <Image src={Capa} alt="" className="hidden md:block w-full" />
          <Image src={CapaMobile} alt="" className="block md:hidden w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex-col items-center justify-center top-11/20 left-1/26">
          <h1 className="text-xl md:text-5xl font-extrabold text-white ">
            Bem-vindo(a) ao <br /> QUERER BEM SAÚDE
          </h1>
          <p className="text-sm md:text-2xl text-white mt-1 md:mt-3 font-medium">
            Consultoria | Ensino | Cuidado
          </p>
            <button
            onClick={() => handleLinkClick("Contato")}
            className="flex items-center justify-center px-3 py-2 gap-2 mt-1 md:mt-4 md:px-6 md:py-4 bg-primary text-white rounded-4xl hover:bg-primary-hover hover:scale-105 transition duration-200"
            >
            <MessageCircleMore
              className="color-white"
              size={window.innerWidth >= 768 ? 30 : 20}
              strokeWidth={2.5}
            />
            <span className="text-sm font-bold md:text-lg">
              Como posso te ajudar?
            </span>
            </button>
        </div>
      </div>
    </section>
  );
}
