import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function headerColor() {
  const [color] = useLocalStorage("color", "");

  useEffect(() => {
    const header = document.querySelector(".topnav");
    if (header instanceof HTMLElement) {
      header.style.backgroundColor = color ?? "";
    }
  }, []);
}
