import { useEffect } from "react";

export function useUploadZoneImgDelete() {
  useEffect(() => {
    function removeImages() {
      const imagesCollection =
        document.getElementsByClassName("square_photo_128");
      const imagesArray = Array.from(imagesCollection);
      imagesArray.map((image) => {
        image.remove();
      });
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          removeImages();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }, []);
}


