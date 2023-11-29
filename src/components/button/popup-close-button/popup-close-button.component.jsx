import css from "./popup-close-button.styles.module.css";

const PopupCloseButton = ({ onClick, isClosed }) => {
  return (
    <button
      className={css["popup-close"]}
      data-active={JSON.stringify(isClosed)}
      onClick={onClick}
    >
      <div className={css["close-stick"]}></div>
      <div className={css["close-stick"]}></div>
    </button>
  );
};

export default PopupCloseButton;
