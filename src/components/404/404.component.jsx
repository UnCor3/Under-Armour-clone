import {
  Variant1,
  Variant2,
} from "../button/action-button/action-button.component";
import css from "./404.styles.module.css";

const _404 = () => {
  return (
    <div className={css["container"]}>
      <div>
        <div className={css["error-info"]}>
          <div className={css["status"]}>404 Error</div>
          <div className={css["error"]}>Hit a wall ?</div>
          <div className={css["explanation"]}>
            Looks like the page you were trying to reach was removed or renamed.
            No Worries. Let's take a breather and get you back on track...
          </div>
          <div className={css["_404-buttons"]}>
            <Variant2
              onClick={() => (document.location.href = "/")}
              buttonText="Start Refresh"
            />
            <Variant1
              onClick={() => (document.location.href = "/")}
              buttonText="See Our Newest Gear"
            />
          </div>
          <div className={css["contact"]}>
            <span>Have questions? Hit Us Up</span>
          </div>
        </div>
      </div>
      <div>
        <img src="imgs/error-404.jpg" alt="404" />
      </div>
    </div>
  );
};

export default _404;
