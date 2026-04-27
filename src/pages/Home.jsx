import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <MissionVision />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <ContactForm />
      <Location />
      <Footer />
    </>
  );
};

export default Home;