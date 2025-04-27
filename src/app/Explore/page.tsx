import Footer from "@/components/Footer/index";
import TopBar from "@/components/TopBar/index";
import Image from "next/image";
import { Polyana } from "@/assets/index";
import Newsletter from "@/components/Newsletter";
import ConnectionSection from "@/components/ConnectionSection";
import EventsSection from "@/components/EventsSection";

export default function Explore() {
  return (
    <div className="bg-background">
      <TopBar />

      <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-4 md:px-12 py-12 bg-background">
        <div className="flex flex-col h-full w-full gap-8">
          <h1 className="text-3xl font-semibold text-[#F95784]">
            Quem faz parte da Querer Bem Saúde?
          </h1>
          <p className="text-justify text-lg">
            Enfermeira graduada pela FENSG/UPE, especialista em nefrologia e
            geriatria, Mestre em Cirurgia pela UFPE com desenvolvimento de
            pesquisa focada em acesso vascular no idoso em hemodiálise. Pós
            graduanda em Cuidados Paliativos pela UPE e Doutoranda em
            Enfermagem/UPE
          </p>
          <div className="flex items-center justify-between">
            <small className="text-sm self-end">COREN 168391 - ENF</small>
            <div className="flex flex-col items-end justify-center">
              <h3 className="text-base font-bold">Polyana Mendonça</h3>
              <h4 className="text-base">CEO Querer Bem Saúde</h4>
            </div>
          </div>
        </div>
        <Image
          src={Polyana}
          alt="CEO da Querer Bem"
          className="w-full md:w-1/3 rounded-2xl"
        />
      </section>

      <EventsSection />

      <ConnectionSection />

      <div className="bg-background px-4 md:px-12 py-12 md:py-20 flex items-center justify-center">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
}