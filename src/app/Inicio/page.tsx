import TopBar from "@/components/TopBar/index";
import { Capa, Logo } from "@/assets/index";
import { Megaphone } from 'lucide-react';
import Footer from "@/components/Footer/index";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function Inicio() {
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
            <button className="flex items-center justify-center gap-2 mt-4 px-6 py-4 bg-primary text-white rounded-4xl hover:bg-primary-hover hover:scale-105 transition duration-200">
              <Megaphone className="color-white" size={30} strokeWidth={2.5} />
              <span className="font-bold text-lg">Me conte como posso te ajudar</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background flex justify-between items-center gap-4 py-20 px-20">
        <div className="flex flex-col gap-8 max-w-1/2 text-md text-start">
          <p className="font-medium">Uma consultoria que busca fortalecer a assistência à saúde através de educação contínua e comunicação empática</p>
          <p className="font-medium">Saiba mais acessando a seção <strong className="font-bold text-primary-hover">EXPLORE</strong> e me conta como posso lhe ajudar</p>
          <h1 className="text-primary text-3xl font-semibold text-start">Como a QUERER BEM SAÚDE pode fazer parte da sua história?</h1>
        </div>
        <div className="p-10 rounded-2xl border border-gray-200 shadow-md hover:scale-110 transition-transform duration-200">
          <Image src={Logo} alt="Logo Querer Bem" className="w-80" />
        </div>
      </section>

      <section className="bg-background flex flex-col items-center justify-center gap-8 px-20 pb-30">
        <section className="flex w-full rounded-2xl border-2 border-light-gray">
          <div className="flex flex-col p-8">
            <h2 className="text-2xl font-semibold">Consultoria em saúde</h2>
            <p className="text-base">Querer bem saúde oferece consultoria para melhoria contínua nos processos, através de:</p>
            <ul>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Avaliação de riscos
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>Identificação de barreiras</li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>Plano de ação</li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>Avaliação de resultados</li>
            </ul>
          </div>
        </section>

        <section className="flex w-full rounded-2xl border-2 border-light-gray">
          <div className="flex flex-col p-8">
            <h2 className="text-2xl font-semibold">Gestão do Acesso Vascular para hemodiálise</h2>
            <p className="text-base">Querer bem saúde oferece consultoria para gestão do acesso vascular, através de:</p>
            <ul>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Estratificação do acesso vascular para hemodiálise
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Treinamento nas técnicas de punção de fístula arteriovenosa
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Plano de cuidados com o acesso venoso central
              </li>
            </ul>
          </div>
        </section>

        <section className="flex w-full rounded-2xl border-2 border-light-gray">
          <div className="flex flex-col p-8">
            <h2 className="text-2xl font-semibold">Procedimentos Operacionais Padrão - POP</h2>
            <p className="text-base">Querer bem saúde oferece atualização e construção de POP</p>
            <ul>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Revisão ou construção de Procedimentos Operacionais Padrão (POP) com base em literatura atualizada e baseados em evidências
              </li>
            </ul>
          </div>
        </section>

        <section className="flex w-full rounded-2xl border-2 border-light-gray">
          <div className="flex flex-col p-8">
            <h2 className="text-2xl font-semibold">Atualização e educação em saúde</h2>
            <p className="text-base">Compartilhando notícias em relação à saúde, com últimas publicações relacionadas a:</p>
            <ul>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Diálise
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Acesso vascular para hemodiálise
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Geriatria
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Cuidados Paliativos
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Processo de Enfermagem
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
                Segurança do Paciente
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="h-100 bg-gradient-to-r from-primary to-primary-dark">
      </section>

      <section className="h-150 bg-background pt-20">

      </section>

      <Footer />
    </div>
  );
}
