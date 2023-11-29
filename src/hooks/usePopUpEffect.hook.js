import { useState } from "react";
import { isClient } from "../helper/helper";

const usePopUpEffect = ({
  style: {
    initialWidth = 50,
    initialScale = 0.75,
    initialHeight = 60,
    initialTop = 27,
    initialLeft = 27,
    lastHeight = 100,
    lastScale = 1,
    lastWidth = 100,
    lastTop = 0,
    lastLeft = 0,
    gap,
  },
  bodyStyle: { notScrollable = true, className },
  scroll: { type },
  extraCss: { stable = {}, initial = {}, last = {} },
}) => {
  const [_state, _setState] = useState({
    state: "closed",
    pic: 0,
    applyAnimation: false,
  });

  const remToPx = isClient
    ? parseFloat(window.getComputedStyle(document.documentElement).fontSize)
    : null;
  const _gap = remToPx * parseFloat(gap || 0);

  const optionalCSS = _state.applyAnimation
    ? {
        height: lastHeight + "%",
        scale: lastScale.toString(),
        width: lastWidth + "%",
        top: lastTop + "%",
        left: lastLeft + "%",
        ...last,
      }
    : {
        height: initialHeight + "vh",
        scale: initialScale.toString(),
        width: initialWidth + "vw",
        top: initialTop + "%",
        left: initialLeft + "%",
        ...initial,
      };

  const combinedCSS = { ...stable, ...optionalCSS };

  function delayStop() {
    setTimeout(() => {
      _setState({
        state: "closed",
        pic: 0,
      });
    }, 100);
    if (notScrollable && className) {
      document.body.removeAttribute("class");
    } else {
      document.body.removeAttribute("style");
    }
    _setState((prev) => ({ ...prev, applyAnimation: false }));
  }

  function onOpen(ref) {
    if (_state.state != "open") return;
    setTimeout(() => {
      _setState((prev) => ({ ...prev, applyAnimation: true }));
    }, 30);

    switch (type) {
      case "horizontal":
        if (_state.pic == 0) break;
        const scaleDif = 1 / initialScale;
        const calculatedTransform = `translateX(calc(-${
          ref.children[_state.pic].getBoundingClientRect().width *
          scaleDif.toFixed(2) *
          _state.pic
        }px - ${_gap}px))`;
        ref.style.transform = calculatedTransform;
        break;
      case "vertical":
        ref.scrollTop = (_state.pic - 1) * (window.innerHeight + _gap);
        break;
    }

    if (notScrollable && className) {
      document.body.classList.add(className);
    } else {
      document.body.style.position = "absolute";
      document.body.style.overflow = "hidden";
      document.body.style.top = 0;
    }
  }

  const isClosed = _state.state == "closed";

  function openImg(pic) {
    _setState((prev) => ({ ...prev, pic, state: "open" }));
  }

  const currentImg = _state.pic;

  return {
    combinedCSS,
    onOpen,
    delayStop,
    isClosed,
    openImg,
    currentImg,
  };
};

export default usePopUpEffect;
