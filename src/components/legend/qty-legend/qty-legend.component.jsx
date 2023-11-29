import css from "./qty-legend.styles.module.css";
import withExtendable from "../../../hocs/withExtendable.hoc.component";
import { forwardRef } from "react";
import { Arrow } from "../../svgs/svgs.component";

export default withExtendable(
  forwardRef(function QtyLegend(
    { selectedQty, setSelectedQty, extendHandler },
    ref
  ) {
    const { isExtended, setIsExtended } = extendHandler;

    return (
      <div
        className={css["product-qty"]}
        onClick={() => setIsExtended((prev) => !prev)}
        data-active={JSON.stringify(isExtended)}
      >
        <span className={css["product-qty-top"]}>Qty</span>
        <span>{selectedQty}</span>
        <div className={css["arrow"]} data-active={JSON.stringify(isExtended)}>
          <Arrow />
        </div>
        <ul
          className={css["product-qty-data"]}
          data-active={JSON.stringify(isExtended)}
          ref={ref}
        >
          <QtyOption
            setSelectedQty={setSelectedQty}
            selectedQty={selectedQty}
          />
        </ul>
      </div>
    );
  }),
  { max: 209 }
);

export const QtyOption = ({ setSelectedQty, selectedQty }) => {
  const QtyOptionCount = 10;

  const ListItems = Array.from({ length: QtyOptionCount }, (_, i) => (
    <li
      key={i}
      onClick={() => setSelectedQty(i + 1)}
      data-active={selectedQty === i + 1}
    >
      {i + 1}
    </li>
  ));
  return <>{ListItems}</>;
};
