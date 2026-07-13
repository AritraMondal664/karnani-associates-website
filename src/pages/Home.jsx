import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";
import Resources from "../components/Resources";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import WhatsappButton from "../components/WhatsappButton";
import TrustSection from "../components/TrustSection";
const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      {/* <Stats /> */}
      <About />
      {/* <MissionVision /> */}
      <Services />
      <Resources />
      <WhyChooseUs />
      <TrustSection />
      <Team />

      <Testimonials />

      <ContactForm />
      <Location />
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Home;