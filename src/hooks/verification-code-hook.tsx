import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyCode } from "../services/verification-code-service";
import {
  handleSuccessAlert,
  handleErrorAlert,
} from "../components/sweet-alert";
import { useNavigate } from "react-router-dom";

const VerificationCodeHook = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const verifyCodeMutation = useMutation({
    mutationFn: verifyCode,
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["userauth"] });
      await queryClient.refetchQueries({ queryKey: ["userauth"] });
      handleSuccessAlert(data.message);
      const role = data.role;
      if (role === "staff") {
        navigate("/page/staff");
      } else {
        navigate("/admin/dashboard");
      }
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const handleLogin = ({
    email,
    code,
    password,
  }: {
    email: string;
    code: string;
    password: string;
  }) => {
    verifyCodeMutation.mutate({ email, code, password });
  };

  return { verifyCodeMutation, handleLogin };
};

export default VerificationCodeHook;
