import { useQuery } from "@tanstack/react-query";
import { getAdminAccountData } from "../services/authService";
export const useAdminData = () => {
  return useQuery({
    queryKey: ["adminAccount"],
    queryFn: getAdminAccountData,
  });
};
