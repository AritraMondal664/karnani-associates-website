
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const sections = ["home", "about", "services", "resources"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="md:fixed relative md:top-0 md:left-0 w-full z-50 backdrop-blur-lg bg-white/95 md:bg-white/80 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        
        {/* Logo */}
        {/* <a href="#home" className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg shadow-sm">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>

          <span className="font-semibold text-[#0D2B52] text-sm sm:text-lg tracking-tight">
            Karnani & Associates
          </span>
        </a> */}

        <a
  href="#home"
  className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-2"
>
  {/* Left Side - Firm Branding */}
  <div className="flex flex-col pr-4 border-r border-gray-300">
    <span className="text-lg sm:text-xl font-semibold text-[#0D2B52] leading-tight">
      Karnani & Associates
    </span>

    <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-600 uppercase mt-1">
      Chartered Accountants
    </span>

    <span className="text-[10px] sm:text-xs text-gray-500 mt-1">
      Serving clients since 1983
    </span>
  </div>

  {/* Right Side - CA India */}
 
<div className="pl-4 flex items-center justify-center">
  <img
    src="/ca-india.png"
    alt="CA India Logo"
    className="h-16 sm:h-20 w-auto object-contain"
  />
</div>
</a>






        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-medium">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize transition ${
                active === item
                  ? "text-[#0D2B52] font-semibold"
                  : "text-gray-700 hover:text-[#0D2B52]"
              }`}
            >
              {item === "contact"
                ? "Get in Touch"
                : item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#C8A23A] transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link
  to="/admin/login"
  className="hidden sm:block"
>
  <button className="bg-[#0D2B52] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#163d6b] hover:shadow-lg hover:scale-105 transition duration-300">
    Admin Login
  </button>
</Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#0D2B52]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden relative overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[32rem] bg-white px-4 pb-6 pt-2 space-y-4 shadow-lg border-t border-gray-200"
            : "max-h-0"
        }`}
      >
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setOpen(false)}
            className={`block py-2 capitalize transition ${
              active === item
                ? "text-[#0D2B52] font-semibold"
                : "text-gray-700 hover:text-[#0D2B52]"
            }`}
          >
            {item === "contact"
              ? "Get in Touch"
              : item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}

        {/* Mobile CTA Button */}
        <Link
  to="/admin/login"
  onClick={() => setOpen(false)}
>
  <button className="w-full bg-[#0D2B52] text-white px-4 py-3 rounded-lg font-semibold shadow hover:bg-[#163d6b] transition">
    Admin Login
  </button>
</Link>
      </div>
    </nav>
  );
};

export default Navbar;