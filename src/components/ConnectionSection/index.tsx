import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { Aspas, Conexoes } from "@/assets/index";

export default function ConnectionSection() {
  return (
    <section className="bg-background flex-col items-center justify-center pt-16 md:pt-20 pb-8 md:pb-16">
      <div className="flex flex-col items-center justify-center gap-4 text-gray-800 mb-10">
        <HeartHandshake className="w-8 h-8 md:w-11 md:h-11" />
        <h1 className={`text-3xl md:text-5xl font-medium {inter.className}`}>
          Conexões
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-12">
        <Image
          src={Conexoes}
          alt="Foto com paciente"
          className="w-160 border border-gray-100 shadow rounded-2xl"
          width={640}
          height={480}
        />
        <div className="flex flex-col text-justify gap-8">
          <p>
            E assim aconteceu, eu sedenta por ouvir histórias, o Sr Murilo com
            um coração repleto de tantas palavras. Ele achava que seria um
            incômodo tomar alguns minutos da enfermeira para uma pequena prosa.
            Eu certamente ganhei mais do que ele. Permanece em meu coração,
            memórias e aprendizados. Um grande amigo. Com Murilo aprendi o poder
            da comunicação empática e assim futuramente surgiu a QUERER BEM
            SAÚDE
          </p>
          <div className="p-6 border border-gray-100 shadow rounded-2xl">
            <Image
              src={Aspas}
              alt="Aspas"
              className="w-4 mb-2 fill-secondary-hover"
              width={16}
              height={16}
            />
            <p className="text-gray-800 font-medium text-base mb-2 text-justify">
              Conheça todas as teorias, domine todas as técnicas, mas ao tocar
              uma alma humana, seja apenas outra alma humana."
            </p>
            <p className="text-gray-800 italic font-medium text-sm text-end">
              Carl Jung
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
