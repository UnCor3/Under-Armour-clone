import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { ProductContext } from "../../../context/product.context";
import css from "./product-reviews-section.styles.module.css";
import { getStylesForRange } from "../../../helper/helper";
import usePagination from "../../../hooks/usePagination.hook";
import Divider from "../../divider/divider.component";
import { ImSearch } from "react-icons/im";
import { formatDistance } from "date-fns";
import { ReviewImgContext } from "@/context/review-img.context";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const ProductsReviewSection = ({ reviews, qAndA }) => {
  return (
    <ReviewPageContext>
      <ReviewHeader reviews={reviews} qAndA={qAndA} />
      <Reviews />
      <QandA qAndA={qAndA} />
    </ReviewPageContext>
  );
};

export const ReviewPageCtx = createContext();

export const ReviewPageContext = ({ children }) => {
  const {
    item: { reviews },
    productStarRatingInfo: { starCounts, avgStarRatings, totalAvg },
  } = useContext(ProductContext);

  const [page, setPage] = useState(1);
  const [_initialData, _setInitialData] = useState(reviews);

  const {
    _finalData: _editedData,
    prevPageDisabled,
    nextPageDisabled,
    totalShownItemsIndex,
    shownItemsStartIndex,
    initialLength,
  } = usePagination(_initialData || reviews, page);

  const handlePagination = (e) => {
    const direction = e.currentTarget.getAttribute("data-pagination");
    setPage((prev) => {
      if (direction === "prev") return prev - 1;
      if (direction === "next") return prev + 1;
    });
  };

  return (
    <ReviewPageCtx.Provider
      value={{
        page,
        setPage,
        _editedData,
        _initialData,
        prevPageDisabled,
        nextPageDisabled,
        totalShownItemsIndex,
        shownItemsStartIndex,
        initialLength,
        handlePagination,
        _setInitialData,
        starCounts,
        avgStarRatings,
        totalAvg,
      }}
    >
      {children}
    </ReviewPageCtx.Provider>
  );
};

const SortBy = ({ sortBy, setIsSortByOpen, setSortBy }) => {
  const onClickHandler = (e) => {
    setSortBy(e.target.innerText);
  };

  return (
    <div
      className={`${css["sort-by"]}`}
      onMouseLeave={() => setIsSortByOpen(false)}
    >
      <div
        onClick={onClickHandler}
        data-active={JSON.stringify(sortBy === "Most Relevant")}
      >
        Most Relevant
      </div>
      <div
        onClick={onClickHandler}
        data-active={JSON.stringify(sortBy === "Most Helpful")}
      >
        Most Helpful
      </div>
      <div
        onClick={onClickHandler}
        data-active={JSON.stringify(sortBy === "Highest Rated")}
      >
        Highest Rated
      </div>
      <div
        onClick={onClickHandler}
        data-active={JSON.stringify(sortBy === "Lowest Rated")}
      >
        Lowest Rated
      </div>
      <div
        onClick={onClickHandler}
        data-active={JSON.stringify(sortBy === "Newest")}
      >
        Newest
      </div>
    </div>
  );
};

const ReviewContent = ({
  starCounts,
  avgStarRatings,
  averageFit,
  averageComfort,
  averagePerformance,
  totalAvg,
}) => {
  return (
    <div className={css["review-content"]}>
      <div className={css["review-content-top"]}>
        <div>
          <span>Product Reviews</span>
        </div>
        <div>
          <button>Write A Review</button>
        </div>
      </div>

      <div className={css["rating-info"]}>
        <div>
          <div>
            <span className={css["rating-title"]}>Rating Summary</span>
          </div>
          <div>
            <div className={css["star-rate"]}>
              <span>5★</span>
              <span>
                <span style={{ width: `${avgStarRatings[4]}%` }}></span>
              </span>
              <span>{starCounts[4]}</span>
            </div>
            <div className={css["star-rate"]}>
              <span>4★</span>
              <span>
                <span style={{ width: `${avgStarRatings[3]}%` }}></span>
              </span>
              <span>{starCounts[3]}</span>
            </div>
            <div className={css["star-rate"]}>
              <span>3★</span>
              <span>
                <span style={{ width: `${avgStarRatings[2]}%` }}></span>
              </span>
              <span>{starCounts[2]}</span>
            </div>
            <div className={css["star-rate"]}>
              <span>2★</span>
              <span>
                <span style={{ width: `${avgStarRatings[1]}%` }}></span>
              </span>
              <span>{starCounts[1]}</span>
            </div>
            <div className={css["star-rate"]}>
              <span>1★</span>
              <span>
                <span style={{ width: `${avgStarRatings[0]}%` }}></span>
              </span>
              <span>{starCounts[0]}</span>
            </div>
          </div>
        </div>
        <div className={css["size-props-wrapper"]}>
          <div className={css["overall-rating"]}>
            <span className={css["rating-title"]}>Average Ratings</span>
            <div className={css["overall-specs"]}>
              <span>Overall</span>
              <div>
                <StarRatings
                  rating={totalAvg}
                  starRatedColor="black"
                  numberOfStars={5}
                  name="rating"
                  starDimension="17px"
                  starSpacing="0px"
                />
                <span>{totalAvg}</span>
              </div>
            </div>
          </div>
          <div className={css["size-props"]}>
            <span>Fit</span>
            <div>
              <div className={css["size-bar"]}>
                <div style={getStylesForRange(averageFit)}></div>
              </div>
              <div className={css["size-range"]}>
                <span>Runs Small</span>
                <span>Runs Large</span>
              </div>
            </div>
          </div>
          <div className={css["size-props"]}>
            <span>Comfort</span>
            <div>
              <div className={`${css["size-bar"]} ${css["show-center"]}`}>
                <div style={getStylesForRange(averageComfort)}></div>
              </div>
              <div className={css["size-range"]}>
                <span>Min.</span>
                <span>Max.</span>
              </div>
            </div>
          </div>
          <div className={css["size-props"]}>
            <span>Performance</span>
            <div>
              <div className={`${css["size-bar"]} ${css["show-center"]}`}>
                <div style={getStylesForRange(averagePerformance)}></div>
              </div>
              <div className={css["size-range"]}>
                <span>Min.</span>
                <span>Max.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewFilter = ({
  isSortByOpen,
  shownItemsStartIndex,
  totalShownItemsIndex,
  initialLength,
  sortBy,
  setIsSortByOpen,
  setSortBy,
}) => {
  return (
    <div className={css["review-filter"]}>
      <dir>
        <span>
          {shownItemsStartIndex} - {totalShownItemsIndex} of {initialLength}{" "}
          Reviews
        </span>
      </dir>
      <div onMouseEnter={() => setIsSortByOpen(true)}>
        <span>Sort by : {sortBy}</span>
        <button>
          <div className={css["ham-bar"]}></div>
          <div className={css["ham-bar"]}></div>
          <div className={css["ham-bar"]}></div>
        </button>
        {isSortByOpen ? (
          <SortBy
            sortBy={sortBy}
            setIsSortByOpen={setIsSortByOpen}
            setSortBy={setSortBy}
          />
        ) : null}
      </div>
    </div>
  );
};

const ReviewTop = ({ totalAvg }) => {
  const { item } = useContext(ProductContext);

  return (
    <div className={css["review-top"]}>
      <div>
        <div>
          <StarRatings
            rating={totalAvg}
            starRatedColor="black"
            numberOfStars={5}
            name="rating"
            starDimension="17px"
            starSpacing="0px"
          />
          <span>{totalAvg}</span>
        </div>
        <div>
          <span>{item.reviews.length} Reviews</span>
        </div>
      </div>
      <span>{`${item.reviews.length} out of ${item.reviews.length} (100%) reviewers recommend this product`}</span>
    </div>
  );
};

const ReviewBottom = ({ setSortBy, qAndA, setKeyword, keyword, reviews }) => {
  return (
    <div className={css["review-bottom"]}>
      <div className={css["search-box-wrapper"]}>
        <div className={css["search-box"]}>
          <input
            type="text"
            placeholder="Search to imgs and reviews"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setSortBy("By Keyword");
            }}
          />
          <div>
            <ImSearch />
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <div>{reviews.length}</div>
          <div>Reviews</div>
        </div>
        <div>
          <div>{qAndA.length}</div>
          <div>Questions</div>
        </div>
        <div>
          <div>{qAndA.length}</div>
          <div>Answers</div>
        </div>
      </div>
    </div>
  );
};

const Reviews = ({ reviews: _reviews }) => {
  const isInitialRender = useRef(true);
  const {
    page,
    _editedData: reviews,
    prevPageDisabled,
    nextPageDisabled,
    totalShownItemsIndex,
    shownItemsStartIndex,
    initialLength,
    handlePagination,
  } = useContext(ReviewPageCtx);
  const headerRef = useRef();

  const { item } = useContext(ProductContext);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    headerRef.current.scrollIntoView();
  }, [page]);

  const { setReviewCtx, reviewCtx } = useContext(ReviewImgContext);

  const openReviewImg = (reviewIndex, imgIndex) => {
    setReviewCtx({
      ...reviewCtx,
      open: true,
      selectedReview: reviewIndex,
      selectedReviewImg: imgIndex,
    });
  };

  const currentDate = new Date();
  return (
    <>
      {1 ? (
        <div className={css["review-wrapper"]} ref={headerRef}>
          {reviews.map(({ customer, review }, reviewIndex) => {
            const reviewDate = new Date(review.date);
            const date = formatDistance(currentDate, reviewDate);
            return (
              <div className={css["review"]} key={reviewIndex}>
                <div className={css["personal-info"]}>
                  <div>
                    <div className="xs-mb-hide" style={{ display: "flex" }}>
                      <StarRatings
                        rating={item.reviews[reviewIndex].review.starRating}
                        starRatedColor="black"
                        numberOfStars={5}
                        name="rating"
                        starDimension="17px"
                        starSpacing="0px"
                      />
                    </div>
                  </div>
                  <div className={`${css["name"]} xs-mb-hide`}>
                    {customer.name}

                    <span style={{ marginLeft: "0.3rem", color: "grey" }}>
                      ·
                    </span>

                    <span
                      style={{
                        marginLeft: "0.4rem",
                        fontSize: "0.7rem",
                        fontWeight: "400",
                      }}
                    >
                      {date} ago
                    </span>
                  </div>
                  <div className={`${css["user-info"]} xs-mb-show`}>
                    <div
                      className={css["name"]}
                      style={{ marginBottom: "0.4rem" }}
                    >
                      {customer.name}
                    </div>
                    <div>
                      <div>
                        Review <span>{customer.reviewCount}</span>
                      </div>
                      <div>
                        Votes <span>{customer.voteCount}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        Gender: <span>{customer.gender}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        Athlete Type: <span>{customer.athType}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        Height: <span>{customer.height}</span>
                      </div>
                    </div>
                    <div>
                      <div>
                        Size Purchased: <span>{customer.sizePurchased}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css["review-middle"]}>
                  <div className="xs-mb-show">
                    <div>
                      <div style={{ display: "flex" }}>
                        <StarRatings
                          rating={item.reviews[reviewIndex].review.starRating}
                          starRatedColor="black"
                          numberOfStars={5}
                          name="rating"
                          starDimension="17px"
                          starSpacing="0px"
                        />
                        <div>
                          ·
                          <span
                            style={{
                              marginLeft: "0.4rem",
                              fontSize: "0.7rem",
                              fontWeight: "400",
                            }}
                          >
                            {date} ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={css["review-content-title"]}>
                      {review.title}
                    </div>
                  </div>
                  <div className={`${css["review-content-title"]} xs-mb-hide`}>
                    {review.title}
                  </div>
                  <div>{review.comment}</div>
                  <div>
                    <span
                      style={{
                        color: "rgb(95,95,95)",
                        fontWeight: "500",
                        marginRight: "0.4rem",
                      }}
                    >
                      Recommends this product
                    </span>{" "}
                    {review.recommends ? "✔ Yes" : "✘ No"}
                  </div>
                  {review.imgs ? (
                    <div className={css["cs-pics"]}>
                      {review.imgs.map((pic, i) => (
                        <div className={css["cs-pic-wrapper"]} key={i}>
                          <div
                            className={css["cs-pic"]}
                            onClick={() => {
                              openReviewImg(reviewIndex, i);
                            }}
                          >
                            <img src={`/${pic}`} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="xs-mb-show" style={{ color: "grey" }}>
                    Helpful ?
                    <button className={css["answer-action"]}>
                      {" "}
                      Yes · {review.foundHelpfulTimes}
                    </button>
                    <button className={css["answer-action"]}>
                      No ·{review.foundNotHelpfulTimes}
                    </button>
                    <button className={css["answer-action"]}>Report</button>
                  </div>
                </div>
                <div className={css["size-props-wrapper"]}>
                  <div className={css["size-props-container"]}>
                    <div
                      className={css["size-props"]}
                      style={{ flexDirection: "column" }}
                    >
                      <span>Fit</span>
                      <div>
                        <div className={css["size-bar"]}>
                          <div
                            style={getStylesForRange(review.productFit.fit)}
                          ></div>
                        </div>
                        <div className={css["size-range"]}>
                          <span>Runs Small</span>
                          <span>Runs Large</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={css["size-props"]}
                      style={{ flexDirection: "column" }}
                    >
                      <span>Comfort</span>
                      <div>
                        <div className={`${css["size-bar"]}`}>
                          <div
                            style={getStylesForRange(review.productFit.comfort)}
                          ></div>
                        </div>
                        <div className={css["size-range"]}>
                          <span>Min.</span>
                          <span>Max.</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={css["size-props"]}
                      style={{ flexDirection: "column" }}
                    >
                      <span>Performance</span>
                      <div>
                        <div className={`${css["size-bar"]}`}>
                          <div
                            style={getStylesForRange(
                              review.productFit.performance
                            )}
                          ></div>
                        </div>
                        <div className={css["size-range"]}>
                          <span>Min.</span>
                          <span>Max.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "0.4rem",
                    fontSize: "0.8rem",
                    color: "grey",
                  }}
                  className="xs-mb-hide"
                >
                  Helpful?
                  <button className={css["answer-action"]}>
                    {" "}
                    Yes · {review.foundHelpfulTimes}
                  </button>
                  <button className={css["answer-action"]}>
                    No ·{review.foundNotHelpfulTimes}
                  </button>
                  <button className={css["answer-action"]}>Report</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        "No comments yet"
      )}
      {initialLength <= 8 ? null : (
        <div
          className={css["review-filter"]}
          style={{ marginTop: "1rem", padding: "0.5rem" }}
        >
          <div>
            <span>
              {shownItemsStartIndex} - {totalShownItemsIndex} of {initialLength}{" "}
              Reviews
            </span>
          </div>
          <div style={{ display: "flex" }} className={css["pagination-action"]}>
            <button
              disabled={prevPageDisabled}
              onClick={handlePagination}
              data-pagination="prev"
            >
              <BiSolidLeftArrow />
            </button>
            <button
              disabled={nextPageDisabled}
              onClick={handlePagination}
              data-pagination="next"
            >
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const QandA = ({ qAndA }) => {
  const [page, setPage] = useState(1);
  const [editedQandA, setEditedQandA] = useState(qAndA);

  const [sortBy, setSortBy] = useState("Newest questions");
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const divRef = useRef();
  const isInitialRender = useRef(true);
  const SortBy = () => {
    const onClickHandler = (e) => {
      setIsSortByOpen(true);
      setSortBy(e.target.innerText);
    };

    return (
      <div
        className={`${css["sort-by"]}`}
        onMouseLeave={() => setIsSortByOpen(false)}
      >
        <div
          onClick={onClickHandler}
          data-active={JSON.stringify(sortBy === "Newest questions")}
        >
          Newest questions
        </div>
      </div>
    );
  };

  useEffect(() => {
    let sortedArray;
    switch (sortBy) {
      case "Newest questions":
        sortedArray = editedQandA.sort((a, b) => {
          return b.date - a.date;
        });
        return setEditedQandA(sortedArray);
      default:
        break;
    }
    setIsSortByOpen(false);
  }, [sortBy]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    headerRef.current.scrollIntoView();
  }, [page]);

  const {
    shownItemsStartIndex,
    totalShownItemsIndex,
    initialLength,
    prevPageDisabled,
    nextPageDisabled,
  } = usePagination(qAndA, page);

  const handlePagination = (e) => {
    const direction = e.currentTarget.getAttribute("data-pagination");
    setPage((prev) => {
      if (direction === "prev") return prev - 1;
      if (direction === "next") return prev + 1;
    });
  };

  return (
    <div className={css["questions-answers-content"]}>
      <div className={css["review-content-top"]} style={{ padding: "1rem" }}>
        <div>
          <span>Q & A</span>
        </div>
        <div>
          <button>Ask A Question</button>
        </div>
      </div>
      <div></div>

      <div className={css["review-filter"]} style={{ position: "relative" }}>
        <dir>
          <span>
            {shownItemsStartIndex} - {totalShownItemsIndex} of {initialLength}{" "}
            Questions
          </span>
        </dir>
        <div onMouseOver={() => setIsSortByOpen(true)}>
          <span>Short by : {sortBy} </span>
          <button>
            <div className={css["ham-bar"]}></div>
            <div className={css["ham-bar"]}></div>
            <div className={css["ham-bar"]}></div>
          </button>
          {isSortByOpen ? <SortBy /> : null}
        </div>
      </div>

      <div className={css["questions-container"]}>
        {editedQandA.map(({ question, answer }, i) => (
          <div className={css["question"]} key={i}>
            <div className={css["question-top"]}>
              <div className={css["asker"]}>
                <span>{question.asker}</span>
              </div>
              <div className={css["question-text"]}>
                <span>{question.content}</span>
              </div>
              <button className={css["answer-action"]}>
                Answer this Question
              </button>
            </div>
            <div className="question-bottom">
              <div className={css["answer-content"]}>
                <div>
                  <div className={css["asker"]}>
                    <span>{answer.answerer}</span>
                  </div>
                  <div className={css["answer"]}>{answer.content}</div>
                </div>
                <dir className={css["answer-helpful"]}>
                  Helpful ?{" "}
                  <button className={css["answer-action"]}>
                    {" "}
                    Yes · {answer.foundHelpful.yesCount}
                  </button>{" "}
                  <button className={css["answer-action"]}>
                    {" "}
                    No · {answer.foundHelpful.noCount}
                  </button>{" "}
                  <button className={css["answer-action"]}>Report</button>
                </dir>
              </div>
            </div>
          </div>
        ))}
      </div>

      {initialLength <= 8 ? null : (
        <div
          className={css["review-filter"]}
          style={{ marginTop: "1rem", padding: "0.5rem" }}
        >
          <div>
            <span>
              {shownItemsStartIndex} - {totalShownItemsIndex} of {initialLength}{" "}
              Reviews
            </span>
          </div>
          <div style={{ display: "flex" }} className={css["pagination-action"]}>
            <button
              disabled={prevPageDisabled}
              onClick={handlePagination}
              data-pagination="prev"
            >
              <BiSolidLeftArrow />
            </button>
            <button
              disabled={nextPageDisabled}
              onClick={handlePagination}
              data-pagination="next"
            >
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      )}

      <div className={css["answer-count"]}></div>
    </div>
  );
};

const ReviewHeader = ({ qAndA }) => {
  const {
    _editedData: reviews,
    totalShownItemsIndex,
    shownItemsStartIndex,
    initialLength,
    _initialData,
    _setInitialData: setReviews,
    starCounts,
    avgStarRatings,
    totalAvg,
  } = useContext(ReviewPageCtx);

  const initialValue = { fit: 0, comfort: 0, performance: 0 };
  const totalValues = _initialData.reduce((accumulator, product) => {
    return {
      fit: accumulator.fit + product.review.productFit.fit,
      comfort: accumulator.comfort + product.review.productFit.comfort,
      performance:
        accumulator.performance + product.review.productFit.performance,
    };
  }, initialValue);

  const totalCount = _initialData.length;
  const averageFit = totalValues.fit / totalCount;
  const averageComfort = totalValues.comfort / totalCount;
  const averagePerformance = totalValues.performance / totalCount;

  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Highest Rated");
  const [keyword, setKeyword] = useState("");
  const initialStateCopy = useRef(_initialData);

  const { current: calculateRelevanceScore } = useRef((review) => {
    const foundHelpfulScore =
      review.review.foundHelpfulTimes - review.review.foundNotHelpfulTimes;
    const starRatingScore = review.review.starRating;
    const picsScore = review.review.imgs.length;

    // Calculate the relevance score by combining the factors
    return foundHelpfulScore + starRatingScore + picsScore;
  });

  useEffect(() => {
    const sortedArray = () => {
      let sortedArray;
      switch (sortBy) {
        case "Most Relevant":
          sortedArray = _initialData.slice().sort((a, b) => {
            // Calculate a relevance score for each review based on factors like found helpful times, star rating, etc.
            const relevanceA = calculateRelevanceScore(a);
            const relevanceB = calculateRelevanceScore(b);

            // Compare the relevance scores in descending order
            return relevanceB - relevanceA;
          });
          return sortedArray;
        case "Most Helpful":
          sortedArray = _initialData.slice().sort((a, b) => {
            return b.review.foundHelpfulTimes - a.review.foundHelpfulTimes;
          });
          return sortedArray;
        case "Highest Rated":
          sortedArray = _initialData.slice().sort((a, b) => {
            if (b.starRating !== a.starRating) {
              return b.starRating - a.starRating;
            }

            if (b.review.imgs.length !== a.review.imgs.length) {
              return b.review.imgs.length - a.review.imgs.length;
            }

            return b.review.foundHelpfulTimes - a.review.foundHelpfulTimes;
          });
          return sortedArray;
        case "Lowest Rated":
          sortedArray = _initialData.slice().sort((a, b) => {
            // First, compare by starRating in ascending order
            if (a.starRating !== b.starRating) {
              return a.starRating - b.starRating;
            }

            // If starRating is the same, compare by the number of review imgs in ascending order
            if (a.review.imgs.length !== b.review.imgs.length) {
              return a.review.imgs.length - b.review.imgs.length;
            }

            // If both starRating and imgs count are the same, compare by foundHelpfulTimes in ascending order
            return a.review.foundHelpfulTimes - b.review.foundHelpfulTimes;
          });
          return sortedArray;
        case "Newest":
          sortedArray = _initialData.slice().sort((a, b) => {
            return b.review.date - a.review.date;
          });
          return sortedArray;
        case "By Keyword":
          sortedArray = initialStateCopy.current.filter((_review) =>
            _review.review.comment
              .toLowerCase()
              .includes(keyword.toLocaleLowerCase())
          );
          return sortedArray;
        default:
          return _initialData;
      }
    };
    const value = sortedArray();
    setReviews(value);
    setIsSortByOpen(false);
  }, [sortBy, keyword]);

  return (
    <div className={css["review-container"]} id="reviews">
      <ReviewTop totalAvg={totalAvg} />
      <Divider />
      <ReviewBottom
        qAndA={qAndA}
        setKeyword={setKeyword}
        setSortBy={setSortBy}
        keyword={keyword}
        reviews={reviews}
      />
      <ReviewContent
        averagePerformance={averagePerformance}
        avgStarRatings={avgStarRatings}
        averageComfort={averageComfort}
        averageFit={averageFit}
        starCounts={starCounts}
        totalAvg={totalAvg}
      />
      <ReviewFilter
        shownItemsStartIndex={shownItemsStartIndex}
        totalShownItemsIndex={totalShownItemsIndex}
        setIsSortByOpen={setIsSortByOpen}
        initialLength={initialLength}
        isSortByOpen={isSortByOpen}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default ProductsReviewSection;
