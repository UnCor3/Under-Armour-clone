import dt from "./desktop.styles.module.css";
import mb from "./mobile.styles.module.css";

const Type_1_Teaser = ({ teaser }) => {
  return (
    <div>
      <Desktop teaser={teaser} />
      <Mobile teaser={teaser} />
    </div>
  );
};

const Desktop = ({ teaser }) => {
  const {
    dtImgSet,
    dtImg,
    text: { firstText, secondText, thirdText },
  } = teaser;
  return (
    <div className="mb-hide">
      <div className={dt["teaser-wrapper"]}>
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
          <div>
            <span>{thirdText}</span>
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
    text: { firstText, secondText, thirdText },
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
          <div>
            <span>{thirdText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type_1_Teaser;
