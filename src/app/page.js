import Header from "./components/Header";
import OrderSection from "./components/OrderSection";
import Testimonials from "./components/Testimonials";
import Whychoose from "./components/Whychoose";
import Testimonial2 from "./components/Testimonial2";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Values from "./components/Values";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Values />
      <OrderSection />
      <Whychoose />
      <Testimonials />
      <div className="whitespace"></div>
      <Testimonial2 />
      <Menu />
      <Footer />
    </div>
  );
}
