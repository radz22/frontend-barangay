import { useEffect, useState } from "react";
import { getCookie } from "../services/cookie-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const GetCookie = () => {
  const [cookieEmail, setCookieEmail] = useState<string>();
  const queryClient = useQueryClient();

  const getCookieMutation = useMutation({
    mutationFn: getCookie,
    onSuccess: async (data) => {
      setCookieEmail(data.email);
      queryClient.invalidateQueries({ queryKey: ["cookie"] });
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  const handleGetCookie = () => {
    getCookieMutation.mutate();
  };

  useEffect(() => {
    handleGetCookie();
  }, []);

  return { cookieEmail };
};

export default GetCookie;
