// import { motion } from "framer-motion";
// import { revealUp } from "../utils/reveal";

// import {
//   FaBalanceScale,
//   FaFileInvoiceDollar,
//   FaCalculator,
//   FaChartLine,
// } from "react-icons/fa";

// const services = [
//   { title: "Audit & Assurance", icon: <FaBalanceScale /> },
//   { title: "Income Tax", icon: <FaFileInvoiceDollar /> },
//   { title: "GST", icon: <FaCalculator /> },
//   { title: "Corporate Advisory", icon: <FaChartLine /> },
// ];

// const Services = () => {
//   return (
//     <motion.section
//       id="services"
//       className="py-20 px-4 bg-white"
//       variants={revealUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-80px" }}
//     >
//       <div className="max-w-6xl mx-auto text-center">

//         <h2 className="text-3xl font-bold mb-10">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               // className="card p-6 text-center"
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
//             >
//               <div className="text-4xl text-blue-600 mb-4">
//                 {service.icon}
//               </div>

//               <h3 className="font-semibold text-lg">
//                 {service.title}
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Professional and reliable solutions tailored to your needs.
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </motion.section>
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
  FaBuilding,
  FaHandshake,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    title: "Audit & Assurance",
    icon: <FaBalanceScale />,
    desc: "Independent, risk-based assurance for transparency, compliance, and governance.",
  },
  {
    title: "Accounting & Reporting",
    icon: <FaBuilding />,
    desc: "IND-AS, IFRS, MIS frameworks, financial reporting, and robust accounting systems.",
  },
  {
    title: "M&A and Restructuring",
    icon: <FaHandshake />,
    desc: "Strategic mergers, demergers, restructuring, and transaction advisory.",
  },
  {
    title: "Direct Tax",
    icon: <FaFileInvoiceDollar />,
    desc: "Compliance, planning, litigation, and representation across tax matters.",
  },
  {
    title: "GST & Indirect Tax",
    icon: <FaCalculator />,
    desc: "Registration, filings, advisory, notices, refunds, and GST litigation.",
  },
  {
    title: "Corporate Law & Regulatory",
    icon: <FaChartLine />,
    desc: "ROC, NCLT, governance, company law, and regulatory compliance support.",
  },
  {
    title: "Project Finance & Funding",
    icon: <FaUniversity />,
    desc: "CMA data, project reports, lender liaison, and funding readiness.",
  },
  {
    title: "Family Office Advisory",
    icon: <FaUsers />,
    desc: "Succession, estate, trust, governance, and legacy advisory for families.",
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-24 px-4 bg-gradient-to-b from-white to-blue-50"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
          What We Do
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0D2B52] mb-6">
          Comprehensive, integrated solutions.
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          Eight integrated practice areas — designed to support your business
          through compliance, growth, governance, and long-term financial confidence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100 group"
            >
              {/* Icon */}
              <div className="text-4xl text-[#0D2B52] mb-5 group-hover:text-[#C8A23A] transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-[#0D2B52] mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Learn More */}
              <a
                href="#contact"
                className="text-sm font-semibold text-[#C8A23A] group-hover:translate-x-1 inline-block transition duration-300"
              >
                Discuss this service →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;