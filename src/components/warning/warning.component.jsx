import { useState } from "react";
import css from "./warning.styles.module.css";

const Warning = () => {
  const [render, setRender] = useState(true);
  const handleClick = () => setRender(false);
  if (!render) return <></>;

  return (
    <div className={css["warning-container"]}>
      <p className={css["text"]}>
        Please be aware that this website is not the official website of Under
        Armour
      </p>
      <button className={css["close-button"]} onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default Warning;
