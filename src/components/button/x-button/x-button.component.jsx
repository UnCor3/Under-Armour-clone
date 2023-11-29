import css from "./x-button.styles.module.css";

const XButton = ({
  width = "1px",
  height = "20px",
  onClick = null,
  extra = {},
}) => {
  return (
    <button
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <div
        style={{ width: width, height: height, ...extra }}
        className={css["bar"]}
      ></div>
      <div
        style={{ width: width, height: height, ...extra }}
        className={css["bar"]}
      ></div>
    </button>
  );
};

export default XButton;
