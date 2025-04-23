import { useQuery } from "@tanstack/react-query";
import { getStaffAccountData } from "../services/authService";

export const useStaffAccountData = () => {
  return useQuery({
    queryKey: ["userauth"],
    queryFn: getStaffAccountData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false, // also helps avoid surprise refetch
  });
};
