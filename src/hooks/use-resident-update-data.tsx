import { useQuery } from "@tanstack/react-query";
import { getAllUpdateApproval } from "../services/resident-service";

export const useResidentApprovalData = () => {
  return useQuery({
    queryKey: ["updateresident"],
    queryFn: getAllUpdateApproval,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false, // also helps avoid surprise refetch
  });
};
