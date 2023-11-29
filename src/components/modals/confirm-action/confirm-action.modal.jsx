import ConfirmActionPortal from "../../portals/confirm-action-portal/confirm.action.portal.component";
import BackShadow from "../../back-shadow/back-shadow.component";
import css from "./confirm-action.styles.module.css";
import { useEffect } from "react";
import {
  Variant1,
  Variant2,
} from "../../button/action-button/action-button.component";

const ConfirmActionModal = ({
  backShadow = true,
  actionMsg,
  confirmAction,
  confirmText,
  rejectAction,
  rejectText,
}) => {
  const click_listener = () => {
    rejectAction();
  };

  const customListener = {
    event: "click",
    action: click_listener,
  };

  useEffect(() => {
    const listener = (e) => {
      e.key === "Escape" && rejectAction();
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <ConfirmActionPortal>
      {backShadow ? (
        <>
          <BackShadow
            className={css["back-shadow"]}
            initRender={true}
            doesHaveTrigger={false}
            closeOnBackgroundHover={false}
            customListener={customListener}
            displayOnMobile={true}
          >
            <div className={css["confirm-action-container"]}>
              <div className={css["action-msg"]}>{actionMsg}</div>
              <div className={css["action"]}>
                <Variant1 onClick={rejectAction}>{rejectText}</Variant1>
                <Variant2 onClick={confirmAction}>{confirmText}</Variant2>
              </div>
            </div>
          </BackShadow>
        </>
      ) : null}
    </ConfirmActionPortal>
  );
};

export default ConfirmActionModal;
