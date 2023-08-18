/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        vh: "100vh",
        "6px": "6px",
      },
      colors: {
        // Default Colors

        primaryDefault: "#3DA0A8",
        secondaryDefault: "#46515D",
        tertiaryDefault: "#1F4AA8",
        backgroundDefault: "#F9FAFA",
        blackDefault: "#353D46",
        whiteDefault: "#FFFFFF",
        successDefault: "#5FC13C",
        warningDefault: "#FFC107",
        dangerDefault: "#DA0C0C",

        // Primary Colors

        primary1000: "#20565A",
        primary900: "#2B7578",

        // Secondary Colors

        secondary1000: "#23292F",
        secondary900: "#353D46",

        // Tertiary Colors

        tertiary1000: "#0D1E45",
        tertiary900: "#132E67",

        // Success Colors

        success600: "#458C2B",
        success500: "#54AC35",

        // Warning Colors

        warning600: "#FF9C07",
        warning500: "#FFBA07",

        // Danger Colors

        danger600: "#9B0808",
        danger500: "#C20A0A",

        // White Colors

        white600: "#D3DADA",
        white500: "#DEE3E3",
      },
      fontSize: {
        body: ["0.938rem", "1.375rem"],
        s: ["0.813rem", "1.125rem"],
        "2xs": ["0.688rem", "1rem"],
        "3xs": ["0.625rem", "0.875rem"],
        "4xs": ["0.563rem", "0.875rem"],
      },
      fontFamily: {
        // 'dd': ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        dd: ["MarkPro"],
      },
      borderRadius: {
        "1px": "0.063rem",
        dd: "3em",
        "10px": "0.625rem",
      },
      spacing: {
        0.1: "0.063rem",
        6.5: "6.5rem",
        "18px": "18px",
        86: "21.438rem", //sorulacak
        108: "27rem",
        54: "3.375rem",
      },
      borderWidth: {
        ".5": "0.031rem",
      },
      margin: {
        "2px": "0.125rem",
      },
      lineHeight: {
        "extra-loose": "0.5",
      },
      maxWidth: {
        48: "196px",
        167.5: "167.5px",
        "224px": "224px",
      },
      minWidth: {
        44: "156px",
        "24px": "24px",
        "16px": "16px",
        "14px": "14px",
      },
      rotate: {
        270: "270deg",
      },
      gap: {
        "6px": "6px",

        tab: "10px",
      },
      width: {
        "6px": "6px",
        "98px": "98px",
        171.5: "171.5px",
        167.5: "167.5px",
        375: "375px",
      },
      top: {
        tabs: "2px",
      },
      padding: {
        0.1: "2px",
      },
      boxShadow: {
        dd: "0px 0px 6px 0px rgba(35, 41, 47, 0.10);",
        xs: "0px 0px 2px 0px rgba(35, 41, 47, 0.10)",
      },
      left: {
        375: "375px",
      },
      zIndex: {
        51: 51,
      },
    },
  },
  plugins: [],
};
