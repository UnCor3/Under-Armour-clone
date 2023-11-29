import { forwardRef, useEffect, useRef, useState } from "react";

const withExtendable = (Comp, hocProps) => {
  const ExtendableComponent = (props) => {
    const [isExtended, setIsExtended] = useState(false);
    const divRef = useRef();
    const Arrow = () => (
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        data-caret-icon="true"
        role="graphics-symbol"
        aria-hidden="true"
        width="16"
        height="16"
        color="grey"
        style={{
          rotate: isExtended ? "0deg" : "180deg",
        }}
      >
        <path
          d="M2 11L7.98939 5.01061C7.99525 5.00475 8.00475 5.00475 8.01061 5.01061L14 11"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        ></path>
      </svg>
    );

    useEffect(() => {
      if (!isExtended) {
        divRef.current.style.height = 0;
        return;
      }
      divRef.current.style.height =
        typeof hocProps === "object" && hocProps.max
          ? `${Math.min(divRef.current.scrollHeight, hocProps.max)}px`
          : `${divRef.current.scrollHeight}px`;
    }, [isExtended]);

    return (
      <Comp
        {...props}
        extendHandler={{ isExtended, setIsExtended }}
        ref={divRef}
        Arrow={Arrow}
      />
    );
  };

  return ExtendableComponent;
};

export const ExtendableText = withExtendable(
  forwardRef(function ExtendableText(
    { extendHandler, Arrow, text, iterableText, className },
    ref
  ) {
    const { isExtended, setIsExtended } = extendHandler;

    return (
      <div
        className={className}
        style={{
          cursor: "pointer",
          padding: isExtended ? "0rem 1rem 1rem 1rem" : "0rem 1rem 0rem 1rem",
        }}
        onClick={() => setIsExtended((prev) => !prev)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{text}</span>
          <Arrow />
        </div>
        <ul
          ref={ref}
          style={{
            overflow: "hidden",
            paddingTop: "1.5rem",
            transition: "all ease 200ms",
            listStyle: "inside",
            color: "#5f5f5f",
          }}
        >
          {iterableText.map((text, i) => {
            return (
              <li key={i} style={{ marginBottom: "0.5rem" }}>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  })
);

export default withExtendable;
