import { useEffect } from "react";

const useNextImageOnHover = (el, img) => {
  const { initialSrc, lastSrc } = img;

  useEffect(() => {
    el.current.addEventListener("mouseover", (e) => {
      if (window.innerWidth <= 1023) return;
      setTimeout(() => {
        e.target.src = lastSrc;
      }, 50);
    });

    function revertBack(e) {
      e.target.src = initialSrc;
    }

    el.current.addEventListener("mouseout", revertBack);
    el.current.addEventListener("mouseleave", revertBack);
  }, []);
};

export default useNextImageOnHover;
