import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  signinService,
  signupService,
  logoutService,
  resetPasswordService,
  forgotPasswordService,
  deleteAccount,
} from "../services/authService";
import {
  signintype,
  resetpasswordtype,
  forgotpasswordtype,
} from "../type/user/auth-type";
import { signinAndsignupType } from "../type/user/signin-zod";
import { useNavigate } from "react-router-dom";
import {
  handleErrorAlert,
  handleSuccessAlert,
} from "../components/sweet-alert";
import { useState } from "react";
const authHook = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const signinMutation = useMutation({
    mutationFn: signinService,
    onSuccess: async (data) => {
      handleSuccessAlert(data.message);
      setSendSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["userauth"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const signupMutation = useMutation({
    mutationFn: signupService,
    onSuccess: () => {
      handleSuccessAlert("Account Created");
      queryClient.invalidateQueries({ queryKey: ["userauth"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logoutService,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["userauth"] }); // ✅ Clear userauth data
      await queryClient.refetchQueries({ queryKey: ["userauth"] }); // ✅ Ensure data is refreshed
      navigate("/", { replace: true });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordService,
    onSuccess: (data) => {
      handleSuccessAlert(data.message);
      queryClient.invalidateQueries({ queryKey: ["userauth"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: resetPasswordService,
    onSuccess: (data) => {
      handleSuccessAlert(data.message);
      queryClient.invalidateQueries({ queryKey: ["userauth"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      handleSuccessAlert(data.message);
      queryClient.invalidateQueries({ queryKey: ["userauth"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const handleUserSignin = (user: signintype) => {
    signinMutation.mutate(user);
  };

  const handleUserSignup = (user: signinAndsignupType) => {
    signupMutation.mutate(user);
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleForgotPassword = (email: forgotpasswordtype) => {
    forgotPasswordMutation.mutate(email);
  };
  const handleResetPassword = (data: resetpasswordtype) => {
    resetPasswordMutation.mutateAsync(data);
  };

  const handleDelete = (id: string | null) => {
    deleteAccountMutation.mutate(id);
  };
  return {
    handleUserSignin,
    signinMutation,
    handleUserSignup,
    handleLogout,
    handleForgotPassword,
    forgotPasswordMutation,
    handleResetPassword,
    resetPasswordMutation,
    sendSuccess,
    handleDelete,
    deleteAccountMutation,
  };
};

export default authHook;
