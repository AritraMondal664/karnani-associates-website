import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  {
    title: "Partner-Led Advisory",
    desc: "Every engagement is guided by experienced professionals with strategic oversight.",
  },
  {
    title: "Legacy + Modern Expertise",
    desc: "Four decades of institutional trust combined with contemporary financial strategy.",
  },
  {
    title: "Integrated Solutions",
    desc: "Audit, tax, corporate law, restructuring, and advisory — under one roof.",
  },
  {
    title: "Confidentiality First",
    desc: "Sensitive financial matters handled with discretion, discipline, and trust.",
  },
  {
    title: "Long-Term Relationships",
    desc: "We build enduring partnerships, not transactional engagements.",
  },
  {
    title: "Business-Focused Thinking",
    desc: "Solutions designed not just for compliance, but for sustainable growth.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold text-center mb-4">
          Why Choose Us
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0D2B52] mb-6">
          Trusted beyond compliance.
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          Built on experience, strengthened by strategic thinking, and shaped around
          long-term client outcomes.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <FaCheckCircle className="text-[#C8A23A] text-lg flex-shrink-0" />

                <h3 className="text-lg font-semibold text-[#0D2B52] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;