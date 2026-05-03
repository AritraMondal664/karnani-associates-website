import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

const testimonials = [
  "Highly professional and reliable audit services.",
  "Excellent GST support and advisory.",
  "Very responsive and knowledgeable team.",
];

const Testimonials = () => {
  return (
    

    <motion.section
      id="testimonials"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* <h2 className="text-3xl font-bold mb-10"> */}
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-center mb-10">
        What Our Clients Say
      </h2>
      {/* <br></br> */}

      <div className="max-w-4xl mx-auto grid gap-6">
        {testimonials.map((text, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="card p-6 italic text-gray-600"
          >
            "{text}"
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;