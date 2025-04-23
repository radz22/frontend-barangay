import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../services/staff/cencus-services";
export const useCencusData = () => {
  return useQuery({
    queryKey: ["cencus"],
    queryFn: getAllData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false, // also helps avoid surprise refetch
  });
};
