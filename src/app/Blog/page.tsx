import BlogSession from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TopBar from "@/components/TopBar";

export default function Blog() {
  return (
    <div className="bg-background">
      <TopBar />

      <BlogSession />

      <Newsletter />

      <Footer />
    </div>
  );
}
