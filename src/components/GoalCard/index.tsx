import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { goalsData } from "@/lib/goals-data";

export default function GoalCard({
  title,
  description,
  items,
  image,
}: (typeof goalsData)[0]) {
  return (
    <section className="flex flex-col md:flex-row w-full md:h-80 rounded-2xl border-2 border-light-gray overflow-hidden gap-8">
      <div className="flex flex-col md:w-1/2 md:py-7 md:pl-10 px-4 py-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>

        <div className="block md:hidden mb-4">
          <Image src={image} alt={title} height={150} className="mx-auto" />
        </div>

        <p className="text-sm md:text-base mb-4">{description}</p>

        <ul className="flex flex-col gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-justify">
              <div className="min-w-5 h-5 flex items-center justify-center">
                <ArrowRight
                  size={18}
                  color="var(--color-black)"
                  strokeWidth={2}
                />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 relative mr-8 hidden md:block">
        <div className="w-121 h-121 md:bg-[#d0d5dd] bg-transparent rounded-full opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <Image
          src={image}
          alt={title}
          className="h-72 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
