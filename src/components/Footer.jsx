import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-16 pb-8 px-4">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 tracking-wide">
            Karnani & Associates
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Trusted Chartered Accountancy firm providing audit, taxation, and advisory services with professionalism and integrity.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Contact
          </h3>

          <p className="flex items-center gap-3 text-gray-300 mb-3 hover:text-white transition">
            <FaPhone className="text-blue-400" />
            033-2235 0358
          </p>

          <p className="flex items-center gap-3 text-gray-300 mb-3 hover:text-white transition">
            <FaEnvelope className="text-blue-400" />
            karnanidk12@gmail.com
          </p>

          <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
            <FaMapMarkerAlt className="text-blue-400" />
            4A Pollock Street, Kolkata
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-200 inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Karnani & Associates. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;