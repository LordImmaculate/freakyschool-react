import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "FreakySchool",
        author: "LordImmaculate, Babstiaan",
        version: "1.3.0",
        source: "https://github.com/lordimmaculate/freakyschool-react",
        downloadURL:
          "https://raw.githubusercontent.com/lordimmaculate/freakyschool-react/main/dist/freaky-school.user.js",
        updateURL:
          "https://raw.githubusercontent.com/lordimmaculate/freakyschool-react/main/dist/freaky-school.user.js",
        icon: "https://vitejs.dev/logo.svg",
        namespace: "lordimmaculate",
        match: ["https://*.smartschool.be/*"],
        exclude: [
          "https://*.smartschool.be/?module=Messages&file=composeMessage*",
          "https://*.smartschool.be/login*",
          "https://*.smartschool.be/2fa*",
          "https://oauth.smartschool.be/*",
          "https://wopi1.smartschool.be/*"
        ],
        require: [
          "https://update.greasyfork.org/scripts/481384/1565312/Grid%20Smartschool.js"
        ]
      },
      server: {
        // 👇 Enables HMR via auto-update in Tampermonkey
        mountGmApi: true
      }
    })
  ]
});
