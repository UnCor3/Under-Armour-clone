import css from "./divider.styles.module.css";

const Divider = (props) => {
  const { className, key, ...otherProps } = props;
  return className && otherProps ? (
    <hr
      className={`${css["divider"]}  ${className}`}
      key={key}
      style={{ ...otherProps }}
    />
  ) : className ? (
    <hr className={`${css["divider"]}  ${className}`} key={key} />
  ) : otherProps ? (
    <hr className={css["divider"]} style={{ ...otherProps }} key={key} />
  ) : (
    <hr className={css["divider"]} key={key} />
  );
};

export default Divider;
