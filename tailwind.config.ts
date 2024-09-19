import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-red': '0 0 20px 10px rgba(90, 114, 36, 0.5)', // Sobra que rodea la esfera de la foto
      },
      backgroundImage: {
        'hero-pattern': "url('/blob.png')",
      },
    },
  },
  plugins: [],
};
export default config;
