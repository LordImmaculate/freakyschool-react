import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div");
    document.body.append(app);
    return app;
  })()
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(
  (() => {
    const settingsDiv = document.createElement("div");
    return settingsDiv;
  })()
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
