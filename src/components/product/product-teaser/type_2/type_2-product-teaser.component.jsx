import dt from "./desktop.styles.module.css";
import mb from "./mobile.styles.module.css";

const Type_2_Teaser = ({ teaser, reversed }) => {
  return (
    <div>
      <Desktop teaser={teaser} reversed={reversed} />
      <Mobile teaser={teaser} />
    </div>
  );
};

const Desktop = ({ teaser, reversed }) => {
  const {
    dtImgSet,
    dtImg,
    text: { firstText, secondText },
  } = teaser;

  return (
    <div className="mb-hide">
      <div
        className={dt["teaser-wrapper"]}
        style={{
          flexDirection: reversed ? "row-reverse" : "row",
        }}
      >
        <div className={dt["teaser-img"]}>
          <picture>
            <source srcSet={dtImgSet} />
            <img src={dtImg} alt="ua" />
          </picture>
        </div>
        <div className={dt["teaser-text"]}>
          <div>
            <span>{firstText}</span>
          </div>
          <div>
            <span>{secondText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mobile = ({ teaser }) => {
  const {
    mbImgSet,
    mbImg,
    text: { firstText, secondText },
  } = teaser;

  return (
    <div className="dt-hide">
      <div className={mb["teaser-wrapper"]}>
        <div className={mb["teaser-img"]}>
          <picture>
            <source srcSet={mbImgSet} />
            <img src={mbImg} alt="ua" />
          </picture>
        </div>
        <div className={mb["teaser-text"]}>
          <div>
            <span>{firstText}</span>
          </div>
          <div>
            <span>{secondText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type_2_Teaser;
