import { useState } from "react";
import css from "./product-characteristics.styles.module.css";

const ProductCharacteristics = ({ item }) => {
  const [selectedSpec, setSelectedSpec] = useState("dna");

  let fakeListArray = item["dna"];

  if (item["specs"].length > fakeListArray) fakeListArray = item[selectedSpec];

  if (item["fitAndCare"].length > fakeListArray)
    fakeListArray = item[selectedSpec];

  return (
    <div className={`${css["product-characteristics"]} sm-dt-show`}>
      <div>
        <div
          className={css["separated"]}
          aria-selected={JSON.stringify(selectedSpec === "dna")}
          onClick={() => setSelectedSpec("dna")}
        >
          <span>DNA</span>
        </div>
        <div
          className={css["separated"]}
          aria-selected={JSON.stringify(selectedSpec === "specs")}
          onClick={() => setSelectedSpec("specs")}
        >
          <span>Specs</span>
        </div>
        <div
          aria-selected={JSON.stringify(selectedSpec === "fitAndCare")}
          onClick={() => setSelectedSpec("fitAndCare")}
        >
          <span>Fit & Care</span>
        </div>
      </div>
      <ul style={{ position: "absolute", top: "4rem" }}>
        {item[selectedSpec].map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>
      <ul style={{ visibility: "hidden" }}>
        {fakeListArray.map((spec, i) => (
          <li key={i + 1}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCharacteristics;
