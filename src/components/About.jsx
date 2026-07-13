import { useState } from "react";
import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

const pillars = [
  { letter: "I", title: "Independence", desc: "Objective, unbiased advice — always in the client’s interest." },
  { letter: "N", title: "Nurture", desc: "Long-term relationships built on understanding every client deeply." },
  { letter: "T", title: "Teamwork", desc: "Collaborative thinking across our professionals and clients." },
  { letter: "E", title: "Efforts", desc: "We go the extra mile on every assignment we undertake." },
  { letter: "G", title: "Goals", desc: "Every strategy aligned with your business objectives." },
  { letter: "R", title: "Reliability", desc: "Consistent, dependable, and timely execution." },
  { letter: "I", title: "Intelligence", desc: "Technical depth paired with practical strategic insight." },
  { letter: "T", title: "Trust", desc: "Built through transparency, integrity, and accountability." },
  { letter: "Y", title: "You First", desc: "Every solution is tailored around your needs." },
];

const About = () => {
  const [showAllPillars, setShowAllPillars] = useState(false);

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
            Who We Are
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0D2B52] leading-tight">
            Decades of judgment.
            <br />
            A modern, partner-led approach.
          </h2>

          {/* Main Paragraph */}
          <p className="text-gray-600 leading-relaxed mt-8 text-lg">
            In an increasingly global and technology-driven environment, Karnani & Associates
            goes beyond conventional accounting, taxation, and compliance services to create
            meaningful business value. Our approach is proactive — focused not only on immediate
            requirements but on building sustainable, long-term outcomes for our clients.
          </p>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-100 rounded-3xl p-8 text-center shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl italic text-[#0D2B52] leading-relaxed font-medium">
            “We don’t just file returns or sign reports — we help clients make
            decisions they’re proud of years later.”
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-700 font-semibold">
            — CA Dilip Kumar Karnani, Founder
          </p>
        </motion.div>

        {/* Integrity Section */}
        <div className="mt-20 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
            Our Approach
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold text-[#0D2B52] mb-12">
            INTEGRITY — our nine pillars.
          </h3>

          {/* MOBILE VERSION */}
          <div className="grid grid-cols-1 gap-6 sm:hidden">
            {(showAllPillars
              ? pillars
              : pillars.filter(
                  (pillar) =>
                    pillar.title === "Independence" ||
                    pillar.title === "Trust" ||
                    pillar.title === "You First"
                )
            ).map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
              >
                {/* Letter Badge */}
                <div className="w-12 h-12 rounded-full bg-[#0D2B52] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {pillar.letter}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-[#0D2B52] mb-3">
                  {pillar.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}

            {/* Toggle Button */}
            <div className="text-center mt-2">
              <button
                onClick={() => setShowAllPillars(!showAllPillars)}
                className="text-[#C8A23A] font-semibold text-sm"
              >
                {showAllPillars ? "Show Less ←" : "View Full Framework →"}
              </button>
            </div>
          </div>

          {/* TABLET + DESKTOP VERSION */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
              >
                {/* Letter Badge */}
                <div className="w-12 h-12 rounded-full bg-[#0D2B52] text-white flex items-center justify-center text-xl font-bold mb-4">
                  {pillar.letter}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-[#0D2B52] mb-3">
                  {pillar.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
};

export default About;