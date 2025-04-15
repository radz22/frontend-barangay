import { useQuery } from "@tanstack/react-query";
import { getAllUpdateApproval } from "../services/resident-service";

export const useResidentApprovalData = () => {
  return useQuery({
    queryKey: ["updateresident"],
    queryFn: getAllUpdateApproval,
  });
};
