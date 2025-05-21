import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function nameChanger() {
  const [name] = useLocalStorage("name", null);

  useEffect(() => {
    if (!name) return;

    const nameElement = document.querySelector(
      "div.hlp-vert-box > span:not(.topnav__btn__light)"
    );

    if (nameElement && nameElement.textContent?.trim() !== name) {
      nameElement.textContent = name;
    }
  }, [name]);
}
