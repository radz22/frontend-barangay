import { useQuery } from "@tanstack/react-query";
import { getAllResidentData } from "../services/resident-service";

export const useResidentData = () => {
  return useQuery({
    queryKey: ["resident"],
    queryFn: getAllResidentData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false, // also helps avoid surprise refetch
  });
};
