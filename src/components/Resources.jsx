import { motion } from "framer-motion";

const resources = [
  {
    title: "Tax & Regulatory Updates",
    desc: "Stay informed with practical updates on direct tax, GST, and regulatory developments.",
  },
  {
    title: "Business Insights",
    desc: "Strategic perspectives on compliance, governance, restructuring, and growth.",
  },
  {
    title: "Knowledge Resources",
    desc: "Guides, advisories, and practical references for informed financial decisions.",
  },
];

const Resources = () => {
  return (
    <section
      id="resources"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Label */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
          Resources
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0D2B52] mb-6">
          Insights that go beyond compliance.
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          Practical knowledge, strategic thinking, and regulatory clarity —
          designed for businesses that value informed decisions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 text-left"
            >
              <h3 className="text-2xl font-semibold text-[#0D2B52] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resources;