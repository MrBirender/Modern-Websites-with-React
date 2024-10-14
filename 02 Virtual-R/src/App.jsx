import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:pt-20 pt-10 px-6">
        <Hero />
      </div>
    </>
  );
}
