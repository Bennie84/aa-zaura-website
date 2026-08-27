// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1a3a2a", // Dark green/near-black
//         secondary: "#6b9e7a", // Muted/earthy green
//         accent: "#6b9e7a", // Accent green
//         background: "#f9f8f6", // Light warm gray
//         text: "#2d2d2d", // Dark gray
//         "text-light": "#666666",
//         "text-muted": "#999999",
//         border: "#e0dcd7",
//       },
//       fontFamily: {
//         sans: ["Poppins", "sans-serif"],
//         serif: ["Poppins", "sans-serif"],
//       },
//       fontSize: {
//         xs: "0.75rem",
//         sm: "0.875rem",
//         base: "1rem",
//         lg: "1.125rem",
//         xl: "1.25rem",
//         "2xl": "1.5rem",
//         "3xl": "1.875rem",
//         "4xl": "2.25rem",
//         "5xl": "3rem",
//       },
//       lineHeight: {
//         tight: "1.2",
//         snug: "1.3",
//         normal: "1.5",
//         relaxed: "1.8",
//         loose: "2",
//       },
//       spacing: {
//         xs: "0.5rem",
//         sm: "1rem",
//         md: "1.5rem",
//         lg: "2rem",
//         xl: "3rem",
//         "2xl": "4rem",
//         "3xl": "5rem",
//         "4xl": "6rem",
//       },
//       borderRadius: {
//         sm: "8px",
//         md: "12px",
//         lg: "16px",
//         xl: "20px",
//       },
//       maxWidth: {
//         container: "1280px",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        accent: "#d4a574",
        background: "#fafaf8",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
