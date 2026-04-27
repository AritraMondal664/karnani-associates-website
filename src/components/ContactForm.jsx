import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { revealUp } from "../utils/reveal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8mflq3o",
        "template_vpalhcp",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "Cz0kbzhCdCx0_GgBB"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-white"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-xl border">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Request a Callback
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Fill out the form and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service</option>
              <option>Audit & Assurance</option>
              <option>Income Tax</option>
              <option>GST</option>
              <option>Corporate Advisory</option>
              <option>Accounting</option>
              <option>FP&A</option>
              <option>Valuation</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            // className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;