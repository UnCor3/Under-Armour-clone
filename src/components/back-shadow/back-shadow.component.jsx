import { useEffect, useRef, useState } from "react";

export default function BackShadow({
  children,
  trigger,
  closeOnBackgroundHover = true,
  closeOnClick = false,
  closeOnClickCallback,
  className,
  closeTriggers,
  initRender = false,
  doesHaveTrigger = true,
  customListener,
  displayOnMobile = false,
  test,
  ...rest
}) {
  if (!className)
    throw Error("No className was provided to back-shadow component");

  const [shouldRender, setShouldRender] = useState(initRender);
  const wrapperRef = useRef();

  if (closeTriggers) {
    const _closeTriggers = document.querySelectorAll(
      `[data-function="${closeTriggers}"]`
    );
    if (!_closeTriggers)
      throw Error("Could not found any elm in dom to inject close triggers");
    _closeTriggers.forEach((elm) => {
      elm.addEventListener("mouseover", () => {
        setShouldRender(false);
      });
    });
  }

  if (doesHaveTrigger) {
    const triggerRef = document.querySelector(`[data-function="${trigger}"]`);

    triggerRef &&
      triggerRef.addEventListener("mouseover", () => {
        setShouldRender(true);
      });
  }

  useEffect(() => {
    if (!wrapperRef.current) return;

    //*Close on hover listener
    closeOnBackgroundHover &&
      wrapperRef.current.addEventListener("mouseover", () => {
        setShouldRender(false);
      });

    //*Close on click listener
    closeOnClick &&
      wrapperRef.current.addEventListener("click", () => {
        closeOnClickCallback();
      });

    //*Fire up custom listener(s)
    if (!customListener) return;

    if (Array.isArray(customListener)) {
      customListener.forEach((listener) => {
        wrapperRef.current.addEventListener(listener.event, listener.action);
      });
    }
    if (!Array.isArray(customListener)) {
      wrapperRef.current.addEventListener(
        customListener.event,
        customListener.action
      );
    }
  }, [shouldRender]);

  return (
    <>
      {shouldRender ? (
        <>
          <div
            {...rest}
            className={className}
            ref={wrapperRef}
            type={displayOnMobile ? "dt-mb-modal" : "modal"}
          ></div>
          {children}
        </>
      ) : null}
    </>
  );
}
