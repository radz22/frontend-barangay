import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserData } from "../../services/user/user-service";
import { usertype } from "../../type/user/user-type";
import useCookie from "../cookie-hook";

const userHook = () => {
  const { data } = useCookie();
  const queryClient = useQueryClient();
  const authToken = data?.token;

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery<usertype, Error>({
    queryKey: ["userData", authToken],
    queryFn: () => getUserData(authToken),
    enabled: !!authToken,
  });

  useEffect(() => {
    if (userData) {
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    }
  }, [userData, queryClient]);

  useEffect(() => {
    if (isError) {
      console.error("Failed to fetch user data:", error?.message);
    }
  }, [isError, error]);

  return { userData, isLoading, isError, error };
};

export default userHook;
