import { useQuery } from "@tanstack/react-query";
import { getAllResidentData } from "../services/resident-service";

export const useResidentData = () => {
  return useQuery({
    queryKey: ["resident"],
    queryFn: getAllResidentData,
  });
};
