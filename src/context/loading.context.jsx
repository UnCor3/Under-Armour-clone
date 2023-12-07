const { createContext, useContext, useState } = require("react");

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);

export default LoadingContextProvider;
