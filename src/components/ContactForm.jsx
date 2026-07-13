import { useState } from "react";
import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1. Save appointment to MongoDB
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/appointments`,
      formData
    );

    console.log("EmailJS skipped for testing");

    alert("Consultation request sent successfully!");

    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to submit request.");
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <p className="uppercase tracking-[0.35em] text-sm text-[#0D2B52] font-semibold text-center mb-4">
          Get In Touch
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0D2B52] mb-6">
          Let’s talk.
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
          Whether it’s a one-off opinion or a long-term mandate, the first
          conversation is on us.
        </p>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

          {/* Left Side - Office Details */}
          <div className="bg-gradient-to-br from-[#0D2B52] via-[#163d6b] to-[#0D2B52] rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-8">
              Office
            </h3>

            <div className="space-y-6">
              <div>
                <p className="uppercase text-sm tracking-[0.25em] text-blue-200 mb-2">
                  Address
                </p>

                <p className="text-lg leading-relaxed">
                  4A Pollock Street,
                  <br />
                  Kolkata – 700001
                </p>
              </div>

              <div>
                <p className="uppercase text-sm tracking-[0.25em] text-blue-200 mb-2">
                  Phone
                </p>

                <p className="text-lg">
                  033-2235 0358
                </p>
                {/* <br /> */}
                  +91 9804742176
              </div>

              <div>
                <p className="uppercase text-sm tracking-[0.25em] text-blue-200 mb-2">
                  Email
                </p>

                <p className="text-lg break-all">
                  aadarsh.kabra@dkk.co.in
                </p>
              </div>

              <div>
                <p className="uppercase text-sm tracking-[0.25em] text-blue-200 mb-2">
                  Office Hours
                </p>

                <p className="text-lg">
                  Mon – Sat 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="mt-6 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name + Organization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
                />

                <input
                  type="text"
                  name="organization"
                  placeholder="Organisation"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
                />
              </div>

              {/* Service */}
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
              >
                <option value="">Select Interest Area</option>
                <option>Audit & Assurance</option>
                <option>Accounting & Reporting</option>
                <option>M&A and Restructuring</option>
                <option>Direct Tax</option>
                <option>GST & Indirect Tax</option>
                <option>Corporate Law & Regulatory</option>
                <option>Project Finance & Funding</option>
                <option>Family Office Advisory</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell us about your requirement"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D2B52]"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0D2B52] text-white py-4 rounded-xl font-semibold shadow-md hover:bg-[#163d6b] hover:shadow-lg hover:scale-[1.02] transition duration-300"
              >
                {loading ? "Sending..." : "Request a Consultation"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;