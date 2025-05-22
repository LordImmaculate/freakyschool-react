import { useEffect } from "react";


export function useModernise() {
  useEffect(() => {
    function applyBorderRadius() {
      const tds = document.querySelectorAll('td[bgcolor="#FFFFFF"]');
      tds.forEach(td => {
        const htmlTd = td as HTMLElement;
        htmlTd.style.borderRadius = '15px';
        htmlTd.style.padding = '10px';
        htmlTd.style.overflow = 'hidden';
        htmlTd.className = 'shadow-sm';
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyBorderRadius);
    } else {
      applyBorderRadius();
    }
    const removeToolbars = () => {
      document.querySelectorAll('.toolbar-bottom, .toolbar-top').forEach(el => el.remove());
    };
    removeToolbars();
    new MutationObserver(removeToolbars).observe(document.body, { childList: true, subtree: true });
    const frames = document.querySelectorAll('td[background*="frame"]');
    frames.forEach(function (frame) {
      const htmlFrame = frame as HTMLElement;
      htmlFrame.style.backgroundImage = 'none';
      htmlFrame.innerHTML = '';
    });

    const spacerImages = document.querySelectorAll('img[src*="spacer.gif"]');
    spacerImages.forEach(function (image) {
      image.remove();
    });

    const frameTitles = document.querySelectorAll('td[background*="frame_r1_c5.gif"]');
    frameTitles.forEach(function (title) {
      title.innerHTML = '';
    });
  }, []);
}
