import { useQuery } from "@tanstack/react-query";
import { getStaffAccountData } from "../services/authService";

export const useStaffAccountData = () => {
  return useQuery({
    queryKey: ["userauth"],
    queryFn: getStaffAccountData,
  });
};
