import ContactSession from "@/components/ContactSession";
import Footer from "@/components/Footer/index";
import TopBar from "@/components/TopBar/index";

export default function Contato() {
    return (
      <div className="bg-background">
        <TopBar/>
        <ContactSession/>
        <Footer/>
      </div>
    );
  }