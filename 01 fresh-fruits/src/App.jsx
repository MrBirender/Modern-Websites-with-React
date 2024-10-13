import Banner from "./component/banner/Banner";
import Banner2 from "./component/banner/Banner2";
import Banner3 from "./component/banner/Banner3";
import Footer from "./component/footer/Footer";
import Hero from "./component/Hero";
import Menus from "./component/menus/Menus";
import Navbar from "./component/Navbar";


export default function App() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner/>
        <Banner2/>
        <Banner3/>
        <Footer/>
      </main>
    </>
  );
}
