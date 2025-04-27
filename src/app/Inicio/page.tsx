"use client";

import TopBar from "@/components/TopBar/index";
import { Logo, LogoRosa, PolyanaCircle } from "@/assets/index";
import Footer from "@/components/Footer/index";
import Image from "next/image";
import GoalsSection from "@/components/GoalsSection";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import ParticularitySection from "@/components/ParticularitySection";

export default function Inicio() {
  const router = useRouter();

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };

  return (
    <div className="h-screen w-screen relative overflow-x-hidden font-montserrat">
      <TopBar />

      <HeroSection />

      <section className="bg-background flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32 py-10 md:py-20 px-4 md:px-12">
        <div className="flex flex-col gap-2 md:gap-8 text-md text-justify">
          <p className="font-medium">
            Uma consultoria que busca fortalecer a assistência à saúde através
            de educação contínua e comunicação empática
          </p>
          <p className="font-medium">
            Saiba mais acessando a seção{" "}
            <strong className="font-bold text-primary-hover">EXPLORE</strong> e
            me conta como posso lhe ajudar
          </p>
          <h1 className="text-primary mt-2 md:mt-0 text-xl md:text-3xl font-semibold text-start">
            Como QUERER BEM SAÚDE pode fazer parte da sua história?
          </h1>
        </div>
        <div className="hidden md:block p-10 rounded-2xl border border-gray-200 shadow-md hover:scale-110 transition-transform duration-200">
          <Image src={Logo} alt="Logo Querer Bem" className="w-80" />
        </div>
      </section>

      <GoalsSection />

      <ParticularitySection />

      <section className="bg-background flex flex-col md:flex-row py-12 gap-8 px-4 md:py-20 md:px-12 md:gap-12">
        <div className="flex flex-col w-full md:w-1/3 text-justify gap-4">
          <div className="bg-background relative">
            <Image
              src={LogoRosa}
              alt="Logo"
              className="w-16 h-16 absolute rounded-full outline-5 outline-background left-13 top-0"
            />
            <Image
              src={PolyanaCircle}
              alt="Polyana"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Como posso te ajudar?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
