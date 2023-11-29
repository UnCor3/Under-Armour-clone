import { useEffect, useRef, useState } from "react";
import css from "./product-add-to-bag.styles.module.css";
import AddedToBagModal from "../../modals/added-to-bag/added-to-bag.modal";

const AddToBag = ({ addiClass, addToBag, addToBagItem, price, fullName }) => {
  const [buttonState, setButtonState] = useState({
    isBeingAdded: false,
    isAdded: false,
  });

  const [addedToBagState, setAddedToBagState] = useState({
    render: false,
    item: null,
  });

  const handleAdded = () => {
    setButtonState((prev) => ({ ...prev, isBeingAdded: true }));
    setTimeout(() => {
      setButtonState((prev) => ({ ...prev, isAdded: true }));
      setTimeout(() => {
        setAddedToBagState({
          render: true,
          item: addToBagItem,
        });
        setButtonState((prev) => ({
          ...prev,
          isAdded: false,
          isBeingAdded: false,
        }));
      }, 110);
      addToBag();
    }, 100);

    //1000
    //4500
  };

  const MobileAddToBag = ({ buttonState, handleAdded }) => {
    return (
      <div className={css["mobile-add-to-bag"]}>
        <button disabled={buttonState.isBeingAdded} onClick={handleAdded}>
          {buttonState.isAdded ? (
            " ✔ Added"
          ) : buttonState.isBeingAdded ? (
            <Dots />
          ) : (
            "Add to Bag"
          )}
        </button>
      </div>
    );
  };

  const closeModal = () => setAddedToBagState({ render: false, item: null });

  const desktopBtnRef = useRef();
  const fixedBtnRef = useRef();

  useEffect(() => {
    const obv = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (!el.isIntersecting && window.scrollY > 100) {
            return fixedBtnRef.current.classList.add(css["intercepting"]);
          } else {
            if (fixedBtnRef.current)
              fixedBtnRef.current.classList.remove(css["intercepting"]);
          }
        });
      },
      {
        rootMargin: "-98px 0px 0px 0px",
      }
    );
    obv.observe(desktopBtnRef.current);
  }, []);

  return (
    <>
      <div
        className={
          addiClass ? `${css["add-to-bag"]} ${addiClass}` : css["add-to-bag"]
        }
        ref={desktopBtnRef}
      >
        <button disabled={buttonState.isBeingAdded} onClick={handleAdded}>
          {buttonState.isAdded ? (
            " ✔ Added"
          ) : buttonState.isBeingAdded ? (
            <Dots />
          ) : (
            "Add to Bag"
          )}
        </button>
      </div>

      <div className={css["dt-fixed-btn-container"]} ref={fixedBtnRef}>
        <div className={css["dt-fixed-btn-wrapper"]}>
          <div className={css["info"]}>
            <span>{fullName}</span>
            <span className={css["price"]}>{price}</span>
          </div>
          <button onClick={handleAdded}>Add To Bag</button>
        </div>
      </div>
      <MobileAddToBag buttonState={buttonState} handleAdded={handleAdded} />

      {addedToBagState.render ? (
        <AddedToBagModal item={addedToBagState.item} closeModal={closeModal} />
      ) : null}
    </>
  );
};

const Dots = () => {
  return (
    <div className={css["loading-bars"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AddToBag;
