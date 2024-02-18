import Blog from "@/components/Blog";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import MarketingSeo from "@/components/Marketing-seo";
import Project from "@/components/Project";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <div className="bg-header min-h-screen bg-cover bg-no-repeat bg-center flex flex-col">
        <Header />
        <Hero />
      </div>
      <Marketing />
      <Seo />
      <MarketingSeo />
      <ChooseUs />
      <Blog />
      <Project />
      <Footer />
    </>
  );
}
