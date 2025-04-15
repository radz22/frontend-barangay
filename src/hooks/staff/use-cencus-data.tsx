import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../../services/staff/cencus-services";
export const useCencusData = () => {
  return useQuery({
    queryKey: ["cencus"],
    queryFn: getAllData,
  });
};
