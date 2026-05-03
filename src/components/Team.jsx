// import { motion } from "framer-motion";

// const team = [
//   {
//     initials: "DK",
//     name: "CA Dilip Kumar Karnani",
//     role: "Founder",
//     exp: "40+ years across Income Tax, Audit, Compliance, Arbitration & Family Settlements.",
//   },
//   {
//     initials: "AK",
//     name: "CA Aadarsh Kabra",
//     role: "Tax Litigation & M&A",
//     exp: "Experience across tax litigation, direct tax advisory, and mergers & restructuring.",
//   },
//   {
//     initials: "RS",
//     name: "CA Rinku Sultania",
//     role: "GST & Concurrent Audits",
//     exp: "5+ years in GST advisory, project finance, concurrent audits & compliance.",
//   },
//   {
//     initials: "MD",
//     name: "CA Mohit Dokania",
//     role: "Statutory & Internal Audits",
//     exp: "5+ years across statutory audits, internal audits, and sectoral assurance.",
//   },
//   {
//     initials: "YA",
//     name: "CS Yashraj Agarwalla",
//     role: "Corporate Law",
//     exp: "8+ years in corporate law, NCLT matters, ROC compliance & governance.",
//   },
// ];

// const Team = () => {
//   return (
//     <section id="team" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Label */}
//         <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
//           Meet The Team
//         </p>

//         {/* Heading */}
//         <h2 className="text-4xl sm:text-5xl font-bold text-[#0D2B52] mb-6">
//           The professionals behind the practice
//         </h2>

//         {/* Subheading */}
//         <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
//           A multidisciplinary team of chartered accountants and corporate professionals,
//           combining legacy experience with modern strategic expertise.
//         </p>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -8 }}
//               className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100"
//             >
//               {/* Initial Badge */}
//               <div className="w-14 h-14 rounded-full bg-[#0D2B52] text-white flex items-center justify-center text-xl font-bold mb-5">
//                 {member.initials}
//               </div>

//               {/* Name */}
//               <h3 className="text-xl font-bold text-[#0D2B52] leading-snug">
//                 {member.name}
//               </h3>

//               {/* Role */}
//               <p className="text-[#C8A23A] font-semibold mt-2">
//                 {member.role}
//               </p>

//               {/* Experience */}
//               <p className="text-gray-600 text-sm mt-4 leading-relaxed">
//                 {member.exp}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16">
//           <p className="text-lg text-gray-700 mb-5">
//             Have a complex matter on your desk?
//           </p>

//           <a href="#contact">
//             <button className="bg-[#0D2B52] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#163d6b] hover:scale-105 transition duration-300">
//               Schedule a Consultation
//             </button>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Team;
























import { useState } from "react";
import { motion } from "framer-motion";

const team = [
  {
    initials: "DK",
    name: "CA Dilip Kumar Karnani",
    role: "Founder",
    exp: "40+ years across Income Tax, Audit, Compliance, Arbitration & Family Settlements.",
  },
  {
    initials: "AK",
    name: "CA Aadarsh Kabra",
    role: "Tax Litigation & M&A",
    exp: "Experience across tax litigation, direct tax advisory, and mergers & restructuring.",
  },
  {
    initials: "RS",
    name: "CA Rinku Sultania",
    role: "GST & Concurrent Audits",
    exp: "5+ years in GST advisory, project finance, concurrent audits & compliance.",
  },
  {
    initials: "MD",
    name: "CA Mohit Dokania",
    role: "Statutory & Internal Audits",
    exp: "5+ years across statutory audits, internal audits, and sectoral assurance.",
  },
  {
    initials: "YA",
    name: "CS Yashraj Agarwalla",
    role: "Corporate Law",
    exp: "8+ years in corporate law, NCLT matters, ROC compliance & governance.",
  },
];

const Team = () => {
  const [showAllTeam, setShowAllTeam] = useState(false);

  return (
    <section
      id="team"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
          Meet The Team
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D2B52] mb-6">
          The professionals behind the practice
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          A multidisciplinary team of chartered accountants and corporate professionals,
          combining legacy experience with modern strategic expertise.
        </p>

        {/* MOBILE VERSION */}
        <div className="grid grid-cols-1 gap-6 sm:hidden">
          {(showAllTeam ? team : team.slice(0, 3)).map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100"
            >
              {/* Initial Badge */}
              <div className="w-14 h-14 rounded-full bg-[#0D2B52] text-white flex items-center justify-center text-xl font-bold mb-5">
                {member.initials}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#0D2B52] leading-snug">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#C8A23A] font-semibold mt-2">
                {member.role}
              </p>

              {/* Experience */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {member.exp}
              </p>
            </motion.div>
          ))}

          {/* Toggle Button */}
          <div className="text-center mt-2">
            <button
              onClick={() => setShowAllTeam(!showAllTeam)}
              className="text-[#C8A23A] font-semibold text-sm"
            >
              {showAllTeam ? "Show Less ←" : "View Full Team →"}
            </button>
          </div>
        </div>

        {/* TABLET + DESKTOP VERSION */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-left border border-gray-100"
            >
              {/* Initial Badge */}
              <div className="w-14 h-14 rounded-full bg-[#0D2B52] text-white flex items-center justify-center text-xl font-bold mb-5">
                {member.initials}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-[#0D2B52] leading-snug">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#C8A23A] font-semibold mt-2">
                {member.role}
              </p>

              {/* Experience */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {member.exp}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-lg text-gray-700 mb-5">
            Have a complex matter on your desk?
          </p>

          <a href="#contact">
            <button className="bg-[#0D2B52] text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#163d6b] hover:scale-105 transition duration-300">
              Request a Consultation
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Team;