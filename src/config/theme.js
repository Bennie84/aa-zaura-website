// src/config/theme.js
export const theme = {
  colors: {
    primary: "#1a1a1a",
    secondary: "#f5f5f5",
    accent: "#d4a574",
    background: "#fafaf8",
    border: "#e5e5e0",
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
      light: "#999999",
      muted: "#b3b3b3",
    },
  },

  // Typography - refined sizing
  typography: {
    h1: { size: "2.5rem", weight: 700, lineHeight: 1.2 }, // 40px - Page titles
    h2: { size: "2rem", weight: 700, lineHeight: 1.3 }, // 32px - Section headings
    h3: { size: "1.5rem", weight: 700, lineHeight: 1.4 }, // 24px - Card titles
    h4: { size: "1.25rem", weight: 600, lineHeight: 1.4 }, // 20px - Subheadings
    body: { size: "1rem", weight: 400, lineHeight: 1.6 }, // 16px - Body text
    small: { size: "0.875rem", weight: 400, lineHeight: 1.6 }, // 14px - Small text
  },

  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "5rem", // 80px
  },

  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms ease-in-out",
    slow: "500ms ease-in-out",
  },
};

// // src/config/theme.js
// export const theme = {
//   colors: {
//     primary: "#1a1a1a",
//     secondary: "#f5f5f5",
//     accent: "#d4a574",
//     background: "#fafaf8",
//     border: "#e5e5e0",
//     text: {
//       primary: "#1a1a1a",
//       secondary: "#666666",
//       light: "#999999",
//     },
//   },

//   fonts: {
//     serif: "'Playfair Display', serif",
//     sans: "'Inter', sans-serif",
//   },

//   spacing: {
//     xs: "0.5rem",
//     sm: "1rem",
//     md: "1.5rem",
//     lg: "2rem",
//     xl: "3rem",
//     "2xl": "4rem",
//   },

//   transitions: {
//     fast: "150ms ease-in-out",
//     normal: "300ms ease-in-out",
//     slow: "500ms ease-in-out",
//   },
// };
