import { eventsData } from "@/lib/event-data";
import EventCard from "@/components/EventCard/index";

export default function MomentsSection() {
  return (
    <section className="bg-secondary flex flex-col items-center justify-center gap-8 md:gap-12 md:py-20 py-12">
      <h1 className="text-3xl text-center md:text-5xl font-medium mb-2 font-inter text-white">
        Momentos para compartilhar e aprender
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-8 px-4 md:px-12">
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
  );
}
