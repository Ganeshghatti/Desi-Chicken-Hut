import Header from "./components/HomePage/Hero";
import OrderSection from "./components/HomePage/OrderSection";
import Testimonials from "./components/HomePage/Testimonials";
import Whychoose from "./components/HomePage/Whychoose";
import Testimonial2 from "./components/HomePage/Testimonial2";
import Menu from "./components/HomePage/Menu";
import Footer from "./components/Global Component/Footer/Footer";
import Navbar from "./components/Global Component/Navbar/Navbar";
import Values from "./components/HomePage/Values";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Values />
      <OrderSection />
      <Whychoose />
      <Testimonials />
      <Testimonial2 />
      <Menu />
      <Footer />
    </div>
  );
}
