import {
  resetPasswordSchema,
  resetPasswordType,
} from "../type/user/reset-password-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { resetpasswordtype } from "../type/user/auth-type";
import { useParams } from "react-router-dom";
import authHook from "../hooks/authHook";
const ResetPasswordForm = () => {
  const { handleResetPassword, resetPasswordMutation } = authHook();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<resetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: resetPasswordType) => {
    const userData: resetpasswordtype = {
      id: id,
      newpassword: data.newpassword,
    };

    handleResetPassword(userData);
    reset();
  };
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="bg-white w-[70%] h-auto px-5 py-5 rounded-lg shadow-lg shadow-[#e9e9e9]">
        <div className="mt-10 flex items-center justify-center flex-col w-full">
          <div className="w-[50%]">
            <div>
              <h1 className="text-2xl font-semibold text-[#525252] text-center">
                Reset Password
              </h1>
            </div>
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div>
                  <div>
                    <h1 className="text-lg text-[#181818] font-semibold  ">
                      New Password
                    </h1>
                  </div>
                  <div>
                    <input
                      {...register("newpassword")}
                      placeholder="Enter your New Password"
                      type="password"
                      className="w-full  border border-[#636364] mt-2 px-2 py-3 rounded-lg  max-xl:text-base  max-lg:text-sm"
                    />
                  </div>
                  <div>
                    {errors.newpassword && (
                      <p className="text-[#EA454C]  max-xl:text-base  max-lg:text-sm">
                        {errors.newpassword.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg "
                    type="submit"
                    disabled={resetPasswordMutation.isPending}
                  >
                    {resetPasswordMutation.isPending
                      ? "Loading..."
                      : "Reset Password"}
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-5">
              <Link to="/">
                <p className="underline text-[#7F265B] text-center">
                  Back to Sign In
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
