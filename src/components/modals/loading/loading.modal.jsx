import { useLoadingContext } from "@/context/loading.context";
import css from "./loading.styles.module.css";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  const { isLoading } = useLoadingContext();

  return (
    <>
      {isLoading ? (
        <div className={css["loading-container"]}>
          <Oval
            height={50}
            width={50}
            color="#e8ede8"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#060606"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : null}
    </>
  );
};

export default Loading;
