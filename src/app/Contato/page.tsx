import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/index";
import TopBar from "@/components/TopBar/index";
import { LogoRosa, PolyanaCircle } from "@/assets/index";
import Image from "next/image";

export default function Contato() {
  return (
    <div className="bg-background">
      <TopBar />

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
          <h1 className="text-2xl md:text-3xl font-semibold">Como posso te ajudar?</h1>
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
