import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Scan your React components
    // Add other files if your Tailwind classes are elsewhere
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
