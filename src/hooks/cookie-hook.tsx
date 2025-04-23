import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../services/cookie-service";

const useCookie = () => {
  return useQuery({
    queryKey: ["cookieData"],
    queryFn: getCookie,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
  });
};

export default useCookie;
