import Image from "next/image";
import { Polyana } from "@/assets/index";

export default function CEOSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-4 md:px-12 py-12 bg-background">
      <div className="flex flex-col h-full w-full gap-4 md:gap-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#F95784]">
          Quem faz parte da Querer Bem Saúde?
        </h1>
        <p className="text-justify text-base md:text-lg">
          Enfermeira graduada pela FENSG/UPE, especialista em nefrologia e
          geriatria, Mestre em Cirurgia pela UFPE com desenvolvimento de
          pesquisa focada em acesso vascular no idoso em hemodiálise. Pós
          graduanda em Cuidados Paliativos pela UPE e Doutoranda em
          Enfermagem/UPE
        </p>

        <div className="block md:hidden w-full">
          <Image
            src={Polyana}
            alt="CEO da Querer Bem"
            className="w-full rounded-2xl mx-auto"
          />
        </div>

        <div className="flex items-center justify-between">
          <small className="text-sm self-end">COREN 168391 - ENF</small>
          <div className="flex flex-col items-end justify-center">
            <h3 className="text-base font-bold">Polyana Mendonça</h3>
            <h4 className="text-base">CEO Querer Bem Saúde</h4>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-150">
        <Image src={Polyana} alt="CEO da Querer Bem" className="rounded-2xl" />
      </div>
    </section>
  );
}
