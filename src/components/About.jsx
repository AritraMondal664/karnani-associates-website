import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          About Our Firm
          {/* <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2 rounded"></span> */}
        </h2>
        {/* <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded"></div> */}
        <br></br>

        <p className="text-gray-600 leading-relaxed">
          Karnani & Associates is a Chartered Accountancy firm providing audit,
          taxation, and advisory services across India with a strong focus on
          client satisfaction, accuracy, and timely delivery. We aim to build
          long-term relationships by offering reliable and professional financial
          solutions tailored to your needs.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
