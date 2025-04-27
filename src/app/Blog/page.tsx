import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import TopBar from "@/components/TopBar";

export default function Blog() {
  return (
    <div className="bg-background">
      <TopBar />

      <BlogSection />

      <div className="bg-background px-4 md:px-12 pt-6 pb-12 md:pb-20 flex items-center justify-center">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
}
