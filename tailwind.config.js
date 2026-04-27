// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//   extend: {
//     colors: {
//       primary: "#1E3A8A",   // deep navy
//       secondary: "#3B82F6", // bright blue
//       accent: "#0EA5E9",    // light blue
//       dark: "#0F172A",
//     }
//   },
// },
//   plugins: [],
// };






export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",   // deep navy
        secondary: "#3B82F6", // bright blue
        accent: "#0EA5E9",    // light blue
        dark: "#0F172A",

        // 🔥 Premium grayscale (VERY useful)
        muted: "#6B7280",
        light: "#F9FAFB",
        border: "#E5E7EB",
      },

      // 🔥 Better shadows (premium feel)
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        medium: "0 8px 30px rgba(0,0,0,0.08)",
      },

      // 🔥 Smooth animations
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // 🔥 Slightly tighter typography
      letterSpacing: {
        tightest: "-0.02em",
      },
    },
  },
  plugins: [],
};