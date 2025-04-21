import { AcessoVascular, Computer, Education, POP } from "@/assets/index";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';


export default function GoalsSession() {
    return (
        <section className="bg-background flex flex-col items-center justify-center gap-8 px-20 pb-30">
        <section className="flex w-full h-79 rounded-2xl border-2 border-light-gray overflow-hidden gap-8">
          <div className="flex flex-col w-1/2 py-10 pl-10">
            <h2 className="text-2xl font-semibold mb-auto">Consultoria em saúde</h2>
            <p className="text-base mb-4">Querer bem saúde oferece consultoria para melhoria contínua nos processos, através de:</p>
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

          <div className="flex-1 relative mr-8">
            <div className="w-121 h-121 bg-[#d0d5dd] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
              <Image src={Computer} alt="Computador" className="w-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </section>

        <section className="flex w-full h-79 rounded-2xl border-2 border-light-gray overflow-hidden gap-8">
          <div className="flex flex-col w-1/2 py-10 pl-10">
            <h2 className="text-2xl font-semibold mb-auto">Gestão do Acesso Vascular para hemodiálise</h2>
            <p className="text-base mb-4">Querer bem saúde oferece consultoria para gestão do acesso vascular, através de:</p>
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

          <div className="flex-1 relative mr-8">
            <Image src={AcessoVascular} alt="Acesso vascular" className="w-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-121 h-121 bg-[#d0d5dd] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
          </div>
        </section>

        <section className="flex w-full h-79 rounded-2xl border-2 border-light-gray overflow-hidden gap-8">
          <div className="flex flex-col w-1/2 py-10 pl-10">
            <h2 className="text-2xl font-semibold mb-auto">Procedimentos Operacionais Padrão - POP</h2>
            <p className="text-base mb-4">Querer bem saúde oferece atualização e construção de POP</p>
            <ul className="flex gap-2 mb-auto">
              <ArrowRight size={18} color="var(--color-black)" strokeWidth={2}/>
              <li className="w-fit">
                Revisão ou construção de Procedimentos Operacionais Padrão (POP) com base em literatura atualizada e baseados em evidências
              </li>
            </ul>
          </div>

          <div className="flex-1 relative mr-8">
            <Image src={POP} alt="Acesso vascular" className="w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-121 h-121 bg-[#d0d5dd] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
          </div>
        </section>

        <section className="flex w-full h-79 rounded-2xl border-2 border-light-gray overflow-hidden gap-8">
          <div className="flex flex-col w-1/2 py-10 pl-10">
            <h2 className="text-2xl font-semibold mb-4">Atualização e educação em saúde</h2>
            <p className="text-base mb-4">Notícias sobre saúde, com últimas publicações relacionadas a:</p>
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

          <div className="flex-1 relative mr-8">
            <Image src={Education} alt="Acesso vascular" className="w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="w-121 h-121 bg-[#d0d5dd] rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
          </div>
        </section>
      </section>
    )
}