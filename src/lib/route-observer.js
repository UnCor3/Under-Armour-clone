import { useLoadingContext } from "@/context/loading.context";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RouteObserver = () => {
  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  useEffect(() => {
    if (!router.isReady) return;
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  return <></>;
};

export default RouteObserver;
