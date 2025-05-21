import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export function imageChanger() {
  const [oldSrc] = useLocalStorage("oldSrc", null);
  const [newSrc] = useLocalStorage("newSrc", null);

  useEffect(() => {
    if (!oldSrc || !newSrc) return;

    // Function to replace images
    const replaceImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        if (img.src === oldSrc) {
          img.src = newSrc;
        }
      });
    };

    // Initial replacement
    replaceImages();

    // Set up mutation observer to detect DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldReplace = false;

      // Check if any images were added
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            // Check if the added node is an image or contains images
            if (
              node.nodeName === "IMG" ||
              (node.nodeType === 1 && (node as Element).querySelector("img"))
            ) {
              shouldReplace = true;
            }
          });
        }
      });

      if (shouldReplace) {
        replaceImages();
      }
    });

    // Start observing the entire document
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Clean up observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [oldSrc, newSrc]);
}
