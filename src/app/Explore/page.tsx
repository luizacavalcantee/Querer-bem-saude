import Footer from "@/components/Footer/index";
import TopBar from "@/components/TopBar/index";
import Newsletter from "@/components/Newsletter";
import ConnectionSection from "@/components/ConnectionSection";
import EventsSection from "@/components/EventsSection";
import CEOSection from "@/components/CEOSection";

export default function Explore() {
  return (
    <div className="bg-background">
      <TopBar />
      <CEOSection />
      <EventsSection />
      <ConnectionSection />
      <div className="bg-background px-4 md:px-12 py-12 md:py-20 flex items-center justify-center">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
