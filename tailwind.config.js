/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./features/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#274C5B",
      subtitle: "#7EB693",
      based: "#525C60",
      "button-yellow": "#EFD372",
      gray: "#D4D4D4",
      ash: "#EFF6F1",
      milk: "#F9F8F8",
      "quote-color": "#F1EDEA",
    },
    fontSize: {
      h1: "70px",
      h2: "50px",
      h3: "40px",
      h4: "35px",
      h5: "30px",
      h6: "25px",
      p: "18px",
      xs: "14px",
      quote: "20px",
      sub: "36px",
    },
    lineHeight: {
      global: "150%",
    },
    fontFamily: {
      sans: "var(--font-open-sans)",
      serif: "var(--font-yellow-tail)",
    },
    container: {
      center: true,
    },
    backgroundImage: {
      hero: "url('/landscape/pattern.png')",
      offer1: "url('/square/offer1.webp')",
      offer2: "url('/square/offer2.webp')",
      testimonial: "url('/square/testimonial.jpg')",
      green: "url('/square/green.jpg')",
      tomato: "url('/square/tomato.jpg')",
    },
    screens: {
      xs: "420px",
      // => @media (min-width: 420px) { ... }
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
export const plugins = [];
