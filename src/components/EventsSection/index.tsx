import { eventsData } from "@/lib/event-data";
import EventCard from "@/components/EventCard/index";

export default function EventsSection() {
  return (
    <section className="bg-secondary flex flex-col items-center justify-center gap-8 md:gap-12 md:py-20 py-12">
      <h1 className="text-2xl text-center md:text-5xl font-medium mb-2 font-inter text-white px-4">
        Momentos para compartilhar e aprender
      </h1>

      <div className="flex gap-4 px-4 md:px-12 overflow-x-auto w-full md:w-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide scroll-smooth md:grid md:grid-cols-4 md:gap-8">
        {eventsData.map((event) => (
          <div key={event.id} className="min-h-full flex-shrink-0 w-64 snap-center md:w-auto md:flex-shrink md:snap-none">
            <EventCard
              imageUrl={event.imageUrl.src}
              title={event.title}
              date={event.date}
              location={event.location}
              linkUrl={event.linkUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
