import TopBar from "@/components/TopBar/index";
import { Capa, Logo } from "@/assets/index";
import { Megaphone } from 'lucide-react';
import Footer from "@/components/Footer/index";
import Image from "next/image";


export default function Inicio() {
  return (
    <div className="h-screen w-screen relative overflow-x-hidden font-montserrat">
      <TopBar />
      <section className="relative shadow-xl">
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
            <button className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-primary-hover text-white rounded-4xl hover:bg-primary transition duration-200">
              <Megaphone className="color-white" size={30} strokeWidth={2.5} />
              <span className="font-bold text-lg">Me conte como posso te ajudar</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background flex justify-between items-center gap-4 py-20 px-40">
        <div className="flex flex-col gap-8 max-w-1/2 text-md text-center">
          <p className="font-medium">Uma consultoria que busca fortalecer a assistência à saúde através de educação contínua e comunicação empática</p>
          <p className="font-medium">Saiba mais acessando a seção <strong className="font-bold text-primary-hover">EXPLORE</strong> e me conta como posso lhe ajudar</p>
        </div>
        <div className="p-10 rounded-4xl border border-gray-200 shadow-md hover:scale-110 transition-transform duration-200">
          <Image src={Logo} alt="Logo Querer Bem" className="w-80" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
