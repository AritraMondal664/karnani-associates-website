import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 text-white py-28 px-4 text-center overflow-hidden"
      
    >
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Trusted Chartered Accountancy Practice in India
        </h1>

        <p className="mt-4 text-lg text-blue-100">
          We provide taxation, audit, and financial advisory services with
          precision and integrity.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact">
            {/* <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"> */}
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
              Contact Us
            </button>
          </a>

          <a href="#services">
            {/* <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"> */}
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transition duration-300">
              Our Services
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;