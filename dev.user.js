// ==UserScript==
// @name         Freaky School (Dev)
// @namespace    http://localhost:5173/
// @version      0.1
// @description  FreakySchool development script (Use CSP disable extension)
// @author       You
// @match        https://*.smartschool.be/*
// @grant        none
// @run-at       document-end
// @require    https://update.greasyfork.org/scripts/481384/1565312/Grid%20Smartschool.js
// @require    https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// ==/UserScript==

(async function () {
  "use strict";

  const scriptUrl = "http://localhost:5173/dist/freaky-school.user.js";
  const fetchAndEval = async () => {
    const res = await fetch(scriptUrl);
    const code = await res.text();
    eval(code);
  };

  await fetchAndEval();
})();
