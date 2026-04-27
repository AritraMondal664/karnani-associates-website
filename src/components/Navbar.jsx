


// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <nav
//     //   className={`sticky top-0 z-40 transition-all duration-300 ${
//     //     scrolled
//     //       ? "bg-white shadow-md border-b border-gray-200"
//     //       : "bg-white"
//     //   }`}

//     <nav
//   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//     scrolled
//       ? "bg-white shadow-md border-b border-gray-200"
//       : "bg-white"
//   }`}
// >
    
//       <div
//         className={`max-w-6xl mx-auto flex justify-between items-center px-4 transition-all duration-300 ${
//           scrolled ? "py-3" : "py-5"
//         }`}
//       >
//         {/* Logo */}
//         <h1 className="text-lg sm:text-xl font-bold text-blue-700">
//           Karnani & Associates
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 font-medium text-gray-700">
          
//           {["home", "about", "services", "contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               className="relative group capitalize"
//             >
//               {item}

//               {/* Underline animation */}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}

//         </div>

//         {/* Desktop Button */}
//         <a href="#contact" className="hidden sm:block">
//           <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 hover:scale-105 transition duration-300">
//             Book Appointment
//           </button>
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-blue-700"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden bg-white px-4 pb-6 space-y-4 shadow-lg text-center">
//           {["home", "about", "services", "contact"].map((item) => (
//             <a
//               key={item}
//               href={`#${item}`}
//               onClick={() => setOpen(false)}
//               className="block py-2 hover:text-blue-600 capitalize"
//             >
//               {item}
//             </a>
//           ))}

//           <a href="#contact" onClick={() => setOpen(false)}>
//             <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
//               Book Appointment
//             </button>
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "about", "services", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

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

  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow border-b border-gray-200">
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-white p-1.5 rounded-lg shadow-sm">
            <img 
              src="/logo.png" 
              alt="Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>

          <span className="font-semibold text-blue-700 text-sm sm:text-lg tracking-tight">
            Karnani & Associates
          </span>
        </a>


        

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize transition ${
                active === item
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Button */}
        <a href="#contact" className="hidden sm:block">
          {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 hover:scale-105 transition"> */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition duration-300">
            Book Appointment
          </button>
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-blue-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {open && (
        <div className="md:hidden bg-white px-4 pb-6 space-y-4 shadow text-center">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block py-2 capitalize ${
                active === item
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )} */}



      {open && (
        <div className="md:hidden bg-white px-4 pb-6 space-y-4 shadow-lg text-center">
          
          <a href="#home" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">
            Home
          </a>

          <a href="#about" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">
            About
          </a>

          <a href="#services" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">
            Services
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 hover:text-blue-600">
            Contact
          </a>

          {/* ✅ ADD THIS BUTTON */}
          <a href="#contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;