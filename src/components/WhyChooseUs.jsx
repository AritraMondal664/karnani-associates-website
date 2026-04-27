import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Full-Service CA Firm",
  "Client-Centric Approach",
  "Timely & Reliable",
  "Data Security",
  "Proactive Advisory",
  "Affordable Pricing",
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <FaCheckCircle className="text-blue-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;