import Footer from "@/components/Footer/index";
import NewsletterSession from "@/components/NewsletterSession";
import TopBar from "@/components/TopBar/index";

export default function Blog() {
    return (
      <div className="bg-background">
        <TopBar/>

        <NewsletterSession/>
        
        <Footer/>
      </div>
    );
  }