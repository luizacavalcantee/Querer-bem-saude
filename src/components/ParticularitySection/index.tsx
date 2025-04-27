"use client";

import { BookText, HandHelping, Laptop } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ParticularitySection() {
  const router = useRouter();

  const handleLinkClick = (linkName: string) => {
    router.push(`/${linkName}`);
  };

  return (
    <section className="flex flex-col md:flex-row px-4 md:px-12 py-16 md:py-24 bg-gradient-to-r from-primary-hover to-primary-dark text-white">
      <div className="w-full md:w-1/3 pb-8 md:pb-0 md:pr-10">
        <h1 className="text-4xl mb-8">Por que escolher a Querer Bem?</h1>
        <p className="text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut.
        </p>
        <button
          onClick={() => handleLinkClick("Contato")}
          className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-secondary text-white rounded-xl hover:bg-secondary-hover hover:scale-105 transition duration-200"
        >
          <span className="font-medium text-lg">Entre em contato</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        <div className="flex-1 md:max-w-[300px]">
          <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
            <Laptop
              className="text-primary-light"
              size={30}
              strokeWidth={1.5}
            />
            <h2 className="text-xl font-bold md:mt-4">Consultoria</h2>
          </div>
          <p className="text-sm mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex-1 md:max-w-[300px]">
          <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
            <BookText
              className="text-primary-light"
              size={30}
              strokeWidth={1.5}
            />
            <h2 className="text-xl font-bold md:mt-4">Ensino</h2>
          </div>
          <p className="text-sm mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex-1 md:max-w-[300px]">
          <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0">
            <HandHelping
              className="text-primary-light"
              size={30}
              strokeWidth={1.5}
            />
            <h2 className="text-xl font-bold md:mt-4">Cuidado</h2>
          </div>
          <p className="text-sm mt-4 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
