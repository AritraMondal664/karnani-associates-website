import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { revealUp } from "../utils/reveal";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Location = () => {
  return (
    <motion.section
      id="location"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold mb-4">
            Office
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0D2B52]">
            Visit us in Kolkata.
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
            Conveniently located in the commercial heart of Kolkata, our office
            is accessible for strategic consultations, compliance support, and
            long-term advisory engagements.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT: Office Details */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0D2B52] text-white p-3 rounded-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D2B52] text-xl mb-2">
                    Address
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    4A Pollock Street,
                    <br />
                    Kolkata – 700001
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0D2B52] text-white p-3 rounded-xl">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D2B52] text-xl mb-2">
                    Office Hours
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    Monday – Saturday
                    <br />
                    10:00 AM – 7:00 PM
                  </p>
                </div>
                








              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0D2B52] text-white p-3 rounded-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D2B52] text-xl mb-2">
                    Phone
                  </h3>

                  <p className="text-gray-600 text-lg">
                    033-2235 0358
                    <br/>
                    +91 9804742176
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#0D2B52] text-white p-3 rounded-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-[#0D2B52] text-xl mb-2">
                    Email
                  </h3>

                  <p className="text-gray-600 text-lg break-all">
                    aadarsh.kabra@dkk.co.in
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[450px]">
            <iframe
              title="Karnani & Associates Location"
              src="https://www.google.com/maps?q=4A+Pollock+Street,+Kolkata&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Location;