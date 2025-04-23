import { useQuery } from "@tanstack/react-query";
import { getAdminAccountData } from "../services/authService";
export const useAdminData = () => {
  return useQuery({
    queryKey: ["adminAccount"],
    queryFn: getAdminAccountData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false, // also helps avoid surprise refetch
  });
};
