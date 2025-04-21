"use client";

import TopBar from "@/components/TopBar/index";
import { Capa, Logo } from "@/assets/index";
import { BookText, HandHelping, Laptop, Megaphone } from 'lucide-react';
import Footer from "@/components/Footer/index";
import Image from "next/image";
import GoalsSession from "@/components/GoalsSession";
import { usePathname, useRouter } from "next/navigation";

export default function Inicio() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };
  
  return (
    <div className="h-screen w-screen relative overflow-x-hidden font-montserrat">
      <TopBar />
      <section className="relative shadow-lg">
        <div>
          <div>
            <Image src={Capa} alt="" className="w-full" layout="responsive" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
          </div>
          <div className="absolute inset-0 flex-col items-center justify-center top-1/2 left-1/20">
            <h1 className="text-5xl font-extrabold text-white ">
              Bem-vindo(a) ao <br /> QUERER BEM SAÚDE
            </h1>
            <p className="text-2xl text-white mt-3 font-medium">Consultoria | Ensino | Cuidado</p>
            <button 
              onClick={() => handleLinkClick("Contato")}
              className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-primary text-white rounded-4xl hover:bg-primary-hover hover:scale-105 transition duration-200"
            >
              <Megaphone className="color-white" size={30} strokeWidth={2.5} />
              <span className="font-bold text-lg">Me conte como posso te ajudar</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background flex justify-between items-center gap-32 py-20 px-20">
        <div className="flex flex-col gap-8 text-md text-justify">
          <p className="font-medium">Uma consultoria que busca fortalecer a assistência à saúde através de educação contínua e comunicação empática</p>
          <p className="font-medium">Saiba mais acessando a seção <strong className="font-bold text-primary-hover">EXPLORE</strong> e me conta como posso lhe ajudar</p>
          <h1 className="text-primary text-3xl font-semibold text-start">Como a QUERER BEM SAÚDE pode fazer parte da sua história?</h1>
        </div>
        <div className="p-10 rounded-2xl border border-gray-200 shadow-md hover:scale-110 transition-transform duration-200">
          <Image src={Logo} alt="Logo Querer Bem" className="w-80" />
        </div>
      </section>

      <GoalsSession />

      <section className="flex px-10 py-24 bg-gradient-to-r from-primary-hover to-primary-dark text-white">
  <div className="w-1/3 pr-10">
    <h1 className="text-4xl mb-8">Por que escolher a Querer Bem?</h1>
    <p className="text-sm mb-8">Porque somos apaixonados pelo que fazemos e acreditamos que a saúde é um direito de todos</p>
    <button 
      onClick={() => handleLinkClick("Contato")}
      className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-secondary text-white rounded-xl hover:bg-primary-hover hover:scale-105 transition duration-200">
      <span className="font-medium text-lg">Entre em contato</span>
    </button>
  </div>

  <div className="flex-1 flex justify-between gap-20">
    <div className="flex-1 max-w-[300px]">
      <Laptop className="text-primary-light" size={30} strokeWidth={1.5} />
      <h2 className="text-xl font-bold mt-4">Consultoria</h2>
      <p className="text-sm mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="flex-1 max-w-[300px]">
      <BookText className="text-primary-light" size={30} strokeWidth={1.5} />
      <h2 className="text-xl font-bold mt-4">Ensino</h2>
      <p className="text-sm mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div className="flex-1 max-w-[300px]">
      <HandHelping className="text-primary-light" size={30} strokeWidth={1.5} />
      <h2 className="text-xl font-bold mt-4">Cuidado</h2>
      <p className="text-sm mt-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  </div>
</section>

      <section className="h-150 bg-background pt-20">

      </section>

      <Footer />
    </div>
  );
}