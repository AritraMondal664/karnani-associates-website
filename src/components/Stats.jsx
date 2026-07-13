import { useEffect, useState, useRef } from "react";
import { FaUserTie, FaIndustry, FaBriefcase, FaChartLine } from "react-icons/fa";

const statsData = [
  {
    label: "Years of Leadership Experience",
    value: 43,
    icon: <FaChartLine />,
  },
  {
    label: "Qualified Professionals",
    value: 5,
    icon: <FaUserTie />,
  },
  {
    label: "Industries Served",
    value: 7,
    icon: <FaIndustry />,
  },
  {
    label: "Core Service Areas",
    value: 6,
    icon: <FaBriefcase />,
  },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // 👇 Trigger animation only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Counting animation
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          if (count < statsData[i].value) {
            return count + Math.ceil(statsData[i].value / 40);
          }
          return statsData[i].value;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {statsData.map((stat, index) => (
          <div
            key={index}
            // className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition duration-300"
            className="flex flex-col items-center bg-white shadow-lg border border-gray-100 p-6 rounded-xl hover:scale-105 transition duration-300"
          >
            {/* Icon */}
            <div className="text-3xl mb-3">
              {stat.icon}
            </div>

            {/* Number */}
            <h3 className="text-3xl sm:text-4xl font-bold">
              {counts[index]}+
            </h3>

            {/* Label */}
            {/* <p className="mt-2 text-sm sm:text-base text-blue-100"> */}
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;