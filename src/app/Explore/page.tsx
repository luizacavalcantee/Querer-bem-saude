import Footer from "@/components/Footer/index";
import TopBar from "@/components/TopBar/index";
import Image from "next/image";

import EventCard from "@/components/EventCard/index";
import { HeartHandshake } from "lucide-react";
import { Aspas, Conexoes, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10, Card11, Card12 } from "@/assets/index";

const eventsData = [
  {
    id: 1,
    imageUrl: Card1,
    title: "XXI Congresso Brasileiro de Enfermagem em Nefrologia",
    date: "26 de setembro de 2024",
    location: "Salvador, BA",
    linkUrl: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-5/265/1885265/Kb0vL6n9/fbe54bbb28234c45b1a9084eaf095460?fileName=congresso_2024.pdf"
  },
  {
    id: 2,
    imageUrl: Card2,
    title: "XX Congresso Brasileiro de  Enfermagem em Nefrologia - Trabalhos premiados",
    date: "27 de setembro de 2024",
    location: "Salvador, BA",
    linkUrl: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-5/265/1885265/Kb0vL6n9/fbe54bbb28234c45b1a9084eaf095460?fileName=congresso_2024.pdf"
  },
  {
    id: 3,
    imageUrl: Card3,
    title: "Curso NefrUS - POCUS da SBN",
    date: "25 de setembro de 2024",
    location: "Salvador, BA",
    linkUrl: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-5/265/1885265/Kb0vL6n9/98fe98ff16ac48619e7972ce6b260ae7?fileName=cursonefrus_pocus.pdf"
  },
  {
    id: 4,
    imageUrl: Card4,
    title: "Segurança do Paciente em pauta",
    date: "23 de setembro de 2024",
    location: "Istituto Valquírea Arenas",
    linkUrl: "https://www.youtube.com/watch?feature=shared&v=WNqA1Z5ymeY"
  },
  {
    id: 5,
    imageUrl: Card5,
    title: "Fragilidade na DRC",
    date: "25 de outubro de 2024",
    location: "NESPI, BA",
    linkUrl: ""
  },
  {
    id: 6,
    imageUrl: Card6,
    title: "Cuidados Paliativos na DRC",
    date: "29 de outubro de 2024",
    location: "Recife, PE - SES",
    linkUrl: "https://www.youtube.com/ESPPE"
  },
  {
    id: 7,
    imageUrl: Card7,
    title: "Autocuidado no pós transplante renal",
    date: "8 de junho de 2024",
    location: "Recife, PE - UPE",
    linkUrl: "https://open.spotify.com/episode/6XRIjO2EtEm9143kt30pXw?si=4CnX-5w3SiC263FJ2P8o9g&nd=1&dlsi=ad58160dcdf14c34"
  },
  {
    id: 8,
    imageUrl: Card8,
    title: "SAVE, 2025",
    date: "13 de fevereiro de  2025",
    location: "São Paulo, SP - Renaissance",
    linkUrl: ""
  },
  {
    id: 9,
    imageUrl: Card9,
    title: "Doppler no Acesso Vascular",
    date: "12 de fevereiro de 2025",
    location: "São Paulo, SP - SAVE",
    linkUrl: ""
  },
  {
    id: 10,
    imageUrl: Card10,
    title: "Dia Mundial do Rim",
    date: "13 de março de 2025",
    location: "Youtube",
    linkUrl: "https://www.youtube.com/watch?v=LkldQRr89to"
  },
  {
    id: 11,
    imageUrl: Card11,
    title: "Simpósio de Acesso Vascular - SINNEAV",
    date: "29 de março de 2025",
    location: "Recife, PE",
    linkUrl: ""
  },
  {
    id: 12,
    imageUrl: Card12,
    title: "Curso de US aplicada para enfermeiros",
    date: "17 de agosto de 2025 ",
    location: "Recife/PE",
    linkUrl: ""
  }
];

export default function Explore() {
  return (
    <div className="bg-background">
      <TopBar/>
      <section className="bg-secondary flex flex-col items-center justify-center gap-12 py-20">
        <h1 className="text-5xl font-medium mb-2 font-inter text-white">Momentos para compartilhar e aprender</h1>
        <div className="grid grid-cols-4 gap-8 px-20">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl.src}
              title={event.title}
              date={event.date}
              location={event.location}
              linkUrl={event.linkUrl}
            />
          ))}
        </div>
      </section>

      <section className="bg-background flex-col items-center justify-center pt-20 pb-24">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-800 mb-10">
          <HeartHandshake size={45} />
          <h1 className={`text-5xl font-medium {inter.className}`}>Conexões</h1>
        </div>
        <div className="flex items-center justify-center gap-12 px-20">
          <Image src={Conexoes} alt="Foto com paciente" className="w-160 border border-gray-100 shadow rounded-2xl" width={640} height={480} />
          <div className="flex flex-col text-justify gap-8">
            <p>E assim aconteceu, eu sedenta por ouvir histórias, o Sr Murilo com um coração repleto de tantas palavras. Ele achava que seria um incômodo tomar alguns minutos da enfermeira para uma pequena prosa. Eu certamente ganhei mais do que ele. Permanece em meu coração, memórias e aprendizados. Um grande amigo. Com Murilo aprendi o poder da comunicação empática e assim futuramente surgiu a QUERER BEM SAÚDE</p>
            <div className="p-6 border border-gray-100 shadow rounded-2xl">
              <Image src={Aspas} alt="Aspas" className="w-4 mb-2 fill-secondary-hover" width={16} height={16} />
              <p className="text-gray-800 font-medium text-base mb-2 text-justify">
                Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana."
              </p>
              <p className="text-gray-800 italic font-medium text-sm text-end">Carl Jung</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}