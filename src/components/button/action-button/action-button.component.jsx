import css from "./action-button.styles.module.css"

export const Variant1 = ({ buttonText,style={},children,onClick}) => {
  return <button onClick={onClick} className={css["variant-1-button"]} style={{...style}}>{buttonText || children}</button>;
};


export const Variant2 = ({ buttonText,style={},children,onClick}) => {
    return <button onClick={onClick} className={css["variant-2-button"]} style={{...style}}>{buttonText || children}</button>;
};