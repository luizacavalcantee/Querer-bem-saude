"use client";

import { Capa, CapaMobile } from "@/assets/index";
import { Megaphone } from "lucide-react";
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
        <div className="absolute inset-0 flex-col items-center justify-center top-1/2 left-1/26">
          <h1 className="md:text-5xl font-extrabold text-white ">
            Bem-vindo(a) ao <br /> QUERER BEM SAÚDE
          </h1>
          <p className="md:text-2xl text-white mt-3 font-medium">
            Consultoria | Ensino | Cuidado
          </p>
          <button
            onClick={() => handleLinkClick("Contato")}
            className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-primary text-white rounded-4xl hover:bg-primary-hover hover:scale-105 transition duration-200"
          >
            <Megaphone className="color-white" size={30} strokeWidth={2.5} />
            <span className="font-bold text-lg">
              Me conte como posso te ajudar
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
