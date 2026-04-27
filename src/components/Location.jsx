// import { motion } from "framer-motion";
// import { revealUp } from "../utils/reveal";
// const Location = () => {
//   return (
//     <motion.section
//       id="location"
//       className="py-20 px-4 bg-white"
//       variants={revealUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-80px" }}
//     >
      
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
//           Visit Us
//         </h2>

//         {/* Underline */}
//         {/* <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded"></div> */}

//         {/* Address */}
//         <p className="mt-4 text-gray-600 text-lg">
//           Karnani & Associates, 4A Pollock Street, Kolkata
//         </p>

//         {/* Timing */}
//         <p className="text-gray-500">
//           Monday – Saturday, 10:00 AM – 6:00 PM
//         </p>

//         {/* Map */}
//         <div className="mt-8 rounded-xl overflow-hidden shadow-xl border border-gray-200">
//           <iframe
//             title="Karnani & Associates Location"
//             src="https://www.google.com/maps?q=4A+Pollock+Street,+Kolkata&output=embed"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             loading="lazy"
//           ></iframe>
//         </div>

//       </div>

//     </motion.section>
//   );
// };

// export default Location;








import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

const Location = () => {
  return (
    <motion.section
      id="location"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Visit Us
          </h2>
          {/* <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded"></div> */}
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Info */}
          <div className="text-left space-y-6 max-w-lg">
            
            <p className="text-xl text-gray-700 leading-relaxed">
              
              Karnani & Associates is conveniently located in the heart of Kolkata,
              making it easily accessible for all your financial and advisory needs.
              
            </p>

            {/* <div>
              <p className="font-semibold text-gray-900 text-lg">Address</p>
              <p className="text-gray-600 text-lg">
                4A Pollock Street, Kolkata
              </p>
            </div> */}

            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Address</h3>
              <p className="text-gray-600 text-lg">
                4A Pollock Street, Kolkata
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Working Hours</p>
              <p className="text-gray-600 text-lg">
                Monday – Saturday, 10:00 AM – 6:00 PM
              </p>
            </div>
           
          </div>

          {/* RIGHT: Map */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Karnani & Associates Location"
              src="https://www.google.com/maps?q=4A+Pollock+Street,+Kolkata&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default Location;