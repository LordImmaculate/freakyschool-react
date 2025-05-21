import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "FreakySchool",
        author: "LordImmaculate, Babstiaan",
        source: "https://github.com/lordimmaculate/freakyschool-react",
        icon: "https://vitejs.dev/logo.svg",
        namespace: "lordimmaculate",
        match: ["https://*.smartschool.be/*"],
        exclude: [
          "https://*.smartschool.be/?module=Messages&file=composeMessage*",
          "https://oauth.smartschool.be/*"
        ]
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr("React", "umd/react.production.min.js"),
          "react-dom": cdn.jsdelivr(
            "ReactDOM",
            "umd/react-dom.production.min.js"
          )
        }
      }
    })
  ]
});
