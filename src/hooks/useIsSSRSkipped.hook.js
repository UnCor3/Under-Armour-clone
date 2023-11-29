import { useState ,useEffect} from "react";

const useIsSSRSkipped = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

export default useIsSSRSkipped;