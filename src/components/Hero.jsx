
import { motion } from "framer-motion";

const sectors = [
  "Manufacturing",
  "BFSI",
  "Real Estate",
  "Hospitality",
  "Trading",
  "Tech & Services",
];

const Hero = () => {
  return (
    <section
      id="home"
      // className="relative md:pt-40 pt-36 pb-20 bg-gradient-to-br from-[#0D2B52] via-[#174A84] to-[#2D6CDF] text-white px-4 text-center overflow-hidden"
      className="relative md:pt-44 pt-36 pb-20 bg-gradient-to-br from-[#081F3F] via-[#0D2B52] to-[#163d6b] text-white px-4 text-center overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto">
          Beyond compliance —
          <br />
          we build lasting
          <br />
          financial confidence.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          A trusted chartered accountancy practice delivering audit, taxation,
          and strategic advisory solutions shaped by four decades of professional excellence.
        </p>
        <p className="mt-4 text-sm sm:text-base text-blue-200 font-medium tracking-wide">
          Serving businesses, promoters, and institutions since 1983.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact">
            <button className="bg-white text-[#0D2B52] px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Get in Touch
            </button>
          </a>

          <a href="#services">
            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0D2B52] hover:scale-105 transition duration-300">
              Explore Services
            </button>
          </a>
        </div>

        {/* Trust Metrics */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <h3 className="text-3xl font-bold text-white">40+</h3>
            <p className="text-sm text-blue-100 mt-1">Years of Practice</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <h3 className="text-3xl font-bold text-white">20+</h3>
            <p className="text-sm text-blue-100 mt-1">Team Strength</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <h3 className="text-3xl font-bold text-white">8</h3>
            <p className="text-sm text-blue-100 mt-1">Practice Areas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <h3 className="text-3xl font-bold text-white">India</h3>
            <p className="text-sm text-blue-100 mt-1">Business Reach</p>
          </div>
        </div>

        {/* Sector Trust Strip */}
        <div className="mt-14">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-blue-100 mb-5">
            Trusted by growing businesses across sectors
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-blue-50 backdrop-blur-sm"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;