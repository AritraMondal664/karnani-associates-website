// import { motion } from "framer-motion";
// import { revealUp } from "../utils/reveal";

// const testimonials = [
//   "Highly professional and reliable audit services.",
//   "Excellent GST support and advisory.",
//   "Very responsive and knowledgeable team.",
// ];

// const Testimonials = () => {
//   return (
    

//     <motion.section
//       id="testimonials"
//       className="py-20 px-4 bg-white"
//       variants={revealUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-80px" }}
//     >
//       {/* <h2 className="text-3xl font-bold mb-10"> */}
//       <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-center mb-10">
//         What Our Clients Say
//       </h2>
//       {/* <br></br> */}

//       <div className="max-w-4xl mx-auto grid gap-6">
//         {testimonials.map((text, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.02 }}
//             className="card p-6 italic text-gray-600"
//           >
//             "{text}"
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Testimonials;
















import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { revealUp } from "../utils/reveal";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/testimonials`
      );

      setTestimonials(data.data);
    } catch (error) {
      console.error(
        "Failed to load testimonials",
        error
      );
    }
  };

  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-center mb-10">
        What Our Clients Say
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6">

        {testimonials.length > 0 ? (

          testimonials.map((item) => (

            <motion.div
              key={item._id}
              whileHover={{ scale: 1.02 }}
              className="card p-6 rounded-xl shadow-md border border-gray-100"
            >

              <div className="flex justify-between items-center mb-3">

                <div>
                  <h3 className="font-semibold text-lg text-[#0D2B52]">
                    {item.name}
                  </h3>

                  {item.company && (
                    <p className="text-sm text-gray-500">
                      {item.company}
                    </p>
                  )}
                </div>

                <div className="text-[#C8A23A] font-semibold">
                  {"⭐".repeat(item.rating || 5)}
                </div>

              </div>

              <p className="italic text-gray-600">
                "{item.content}"
              </p>

            </motion.div>

          ))

        ) : (

          <p className="text-center text-gray-500">
            No testimonials available yet.
          </p>

        )}

      </div>
    </motion.section>
  );
};

export default Testimonials;