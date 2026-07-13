import { motion } from "framer-motion";

const updates = [
  {
    category: "Tax & Regulatory",
    title: "Recent Changes in GST Compliance",
    description:
      "Stay updated with the latest GST filing requirements and compliance expectations for businesses.",
    date: "June 2026",
  },

  {
    category: "Business Insights",
    title: "Financial Planning for Growing Businesses",
    description:
      "Key financial strategies that help businesses improve cash flow and long-term stability.",
    date: "June 2026",
  },

  {
    category: "Knowledge Resource",
    title: "Understanding Corporate Compliance",
    description:
      "A practical guide to statutory compliance, governance obligations, and risk management.",
    date: "June 2026",
  },
];

const Updates = () => {
  return (
    <section className="min-h-screen py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
            Knowledge Center
          </p>

          <h1 className="text-5xl font-bold text-[#0D2B52] mb-6">
            Insights that go beyond compliance.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Articles, updates, and practical guidance from our professionals
            to help businesses stay informed and make better decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {updates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-100 p-8"
            >
              <span className="text-sm font-semibold text-[#C8A23A]">
                {item.category}
              </span>

              <h3 className="text-2xl font-bold text-[#0D2B52] mt-3 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Updates;