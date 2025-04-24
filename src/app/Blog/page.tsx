import BlogSession from "@/components/BlogSession";
import Footer from "@/components/Footer";
import NewsletterSession from "@/components/NewsletterSession";
import TopBar from "@/components/TopBar";

export default function Blog() {
  return (
    <div className="bg-background">
      <TopBar />
      
      <BlogSession />
      
      <NewsletterSession />
      
      <Footer />
    </div>
  );
}