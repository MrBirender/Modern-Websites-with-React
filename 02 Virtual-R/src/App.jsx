import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import Testimonilas from "./components/Testimonilas";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:pt-20 pt-10 px-4">
        <Hero />
        <Features/>
        <Workflow/>
        <PriceSection/>
        <Testimonilas/>
        <Footer/>
      </div>
    </>
  );
}
