import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/team`
      );

      setTeamMembers(data);
    } catch (error) {
      console.error("Failed to load team members", error);
    }
  };

  return (
    <section
      id="team"
      className="py-24 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A23A] font-semibold mb-4">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D2B52] mb-6">
            The professionals behind the practice
          </h2>

          <div className="w-20 h-1 bg-[#C8A23A] mx-auto mb-8"></div>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            A team of experienced professionals bringing together expertise in
            audit, taxation, compliance, corporate law and strategic advisory
            services for businesses and individuals.
          </p>

        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {teamMembers.map((member, index) => (

            <motion.div
              key={member._id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100"
            >

              {/* Top Banner */}
              <div className="bg-[#0D2B52] h-32 relative">

                <div className="absolute left-1/2 transform -translate-x-1/2 top-8">

                  <img
                    src={
                      member.photoUrl ||
                      "https://dummyimage.com/300x300/e5e7eb/374151&text=Team"
                    }
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#C8A23A] bg-white"
                  />

                </div>

              </div>

              {/* Content */}
              <div className="pt-20 p-8">

                <h3 className="text-2xl font-bold text-[#0D2B52] mb-2">
                  {member.name}
                </h3>

                <p className="text-[#C8A23A] font-semibold mb-5">
                  {member.title}
                </p>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">

          <p className="text-lg text-gray-700 mb-6">
            Need expert guidance from our team?
          </p>

          <a href="#contact">
            <button className="bg-[#0D2B52] hover:bg-[#163d6b] text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">
              Schedule a Consultation
            </button>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Team;