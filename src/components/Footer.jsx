// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#081F3F] via-[#0D2B52] to-[#081F3F] text-white pt-20 pb-8 px-4">

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">

        {/* Brand Column */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Karnani & Associates
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-sm">
            Trusted advisors in audit, taxation, and advisory — shaped by four
            decades of institutional excellence.
          </p>

          <p className="mt-4 text-[#C8A23A] font-medium text-sm uppercase tracking-[0.25em]">
            Estd. 1983 · Kolkata
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-semibold mb-5 tracking-wide text-white">
            Explore
          </h3>

          <ul className="space-y-3">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Services", "services"],
              ["Resources", "resources"],
              ["Get in Touch", "contact"],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={`#${link}`}
                  className="text-gray-300 hover:text-white transition duration-200 inline-block"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-semibold mb-5 tracking-wide text-white">
            Practice Areas
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Audit & Assurance</li>
            <li>Direct Tax</li>
            <li>GST & Indirect Tax</li>
            <li>Corporate Law</li>
            <li>Family Office Advisory</li>
            <li>Project Finance</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-semibold mb-5 tracking-wide text-white">
            Contact
          </h3>

          <div className="space-y-4">
            <p className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
              <FaPhone className="text-[#C8A23A]" />
              033-2235 0358 | +91 9804742176
            </p>

            {/* <p className="flex items-start justify-center lg:justify-start gap-3 text-gray-300 text-left leading-relaxed">
              <FaPhone className="text-[#C8A23A] mt-1" />
              <span>
                033-2235 0358
                <br />
                +91 9804742176
              </span>
            </p> */}

            <p className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 break-all">
              <FaEnvelope className="text-[#C8A23A]" />
              aadarsh.kabra@dkk.co.in
            </p>

            <p className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-[#C8A23A]" />
              4A Pollock Street, Kolkata
            </p>





            <div className="flex items-center justify-center lg:justify-start gap-4 mt-5">
              <a
                href="https://www.instagram.com/karnaniandassociates?igsh=MWJscHlieWJlejBxcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C8A23A] transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/18UHvBHiLL/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C8A23A] transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.linkedin.com/company/karnani-and-assosciates/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#C8A23A] transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>






          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-14 pt-8 text-center text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Karnani & Associates. All rights reserved.
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-4 text-gray-400">
          <span className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </span>

          <span>|</span>

          <span className="hover:text-white transition cursor-pointer">
            Disclaimer
          </span>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Designed for the digital-first professional services firm.
        </p>

      </div>

    </footer>
  );
};

export default Footer;