// import { motion } from "framer-motion";
// import {
//   FaBalanceScale,
//   FaFileInvoiceDollar,
//   FaCalculator,
//   FaChartLine,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Audit & Assurance",
//     icon: <FaBalanceScale />,
//   },
//   {
//     title: "Income Tax",
//     icon: <FaFileInvoiceDollar />,
//   },
//   {
//     title: "GST",
//     icon: <FaCalculator />,
//   },
//   {
//     title: "Corporate Advisory",
//     icon: <FaChartLine />,
//   },
// ];

// const Services = () => {
//   return (
//     <div id="services" className="relative bg-gray-100 py-20 px-4 overflow-hidden">
      
//       {/* 🔥 Background Glow */}
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

//       <div className="relative max-w-6xl mx-auto">
        
//         {/* Heading */}
//         <motion.h2
//           className="text-3xl font-bold text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Our Services
//         </motion.h2>

//         {/* Divider */}
//         <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-6 rounded animate-pulse"></div>

//         {/* Description */}
//         <motion.p
//           className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           We offer a wide range of professional services designed to help
//           businesses and individuals manage their financial and compliance needs effectively.
//         </motion.p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="group bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-gray-200 text-center"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               whileHover={{ y: -10, scale: 1.05 }}
//               viewport={{ once: true }}
//             >
//               {/* Icon */}
//               <div className="text-3xl text-primary mb-4 transition-transform duration-300 group-hover:scale-125">
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg mb-2">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm">
//                 Professional and reliable solutions tailored to your needs.
//               </p>

//               {/* Glow Line */}
//               <div className="w-10 h-1 bg-primary mx-auto mt-4 opacity-0 group-hover:opacity-100 transition"></div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Services;






import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaCalculator,
  FaChartLine,
} from "react-icons/fa";

const services = [
  { title: "Audit & Assurance", icon: <FaBalanceScale /> },
  { title: "Income Tax", icon: <FaFileInvoiceDollar /> },
  { title: "GST", icon: <FaCalculator /> },
  { title: "Corporate Advisory", icon: <FaChartLine /> },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              // className="card p-6 text-center"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-4xl text-blue-600 mb-4">
                {service.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Professional and reliable solutions tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;