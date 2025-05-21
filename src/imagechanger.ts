import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export function imageChanger() {
  const [oldSrc] = useLocalStorage("oldSrc", null);
  const [newSrc] = useLocalStorage("newSrc", null);

  useEffect(() => {
    if (!oldSrc || !newSrc) return;

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.src === oldSrc) {
        img.src = newSrc;
      }
    });
  }, [oldSrc, newSrc]);
}
