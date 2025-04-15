import { useEffect } from "react";
import {
  signinAndsignupSchema,
  signinAndsignupType,
} from "../../type/user/signin-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authHook from "../../hooks/authHook";
import { resetpasswordtype } from "../../type/user/auth-type";
import { useAdminData } from "../../hooks/use-admin-setting-data";

export const Settings = () => {
  const { data: adminAccountData } = useAdminData();
  const { handleResetPassword, resetPasswordMutation } = authHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signinAndsignupType>({
    resolver: zodResolver(signinAndsignupSchema),
  });

  useEffect(() => {
    if (adminAccountData) {
      reset({
        email: adminAccountData?.data[0]?.email,
      });
    }
  }, [adminAccountData, reset]);
  const onSubmit = (userData: signinAndsignupType) => {
    const resetData: resetpasswordtype = {
      newpassword: userData.password,
      id: adminAccountData?.data[0]?._id,
    };

    handleResetPassword(resetData);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[50%]  inset-y-0 left-0  bg-white shadow-lg px-10 py-10">
        <div>
          <h1 className="text-center text-2xl font-semibold">Admin Settings</h1>
        </div>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h1 className="text-lg text-[#181818] font-semibold  ">Email</h1>
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Enter your Email"
                className="w-full  border border-[#636364] mt-2 px-2 py-3 rounded-lg  max-xl:text-base  max-lg:text-sm"
                readOnly
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-[#EA454C]  max-xl:text-base  max-lg:text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h1 className="text-lg text-[#181818] font-semibold  max-xl:text-base">
                New Password
              </h1>
            </div>
            <div>
              <input
                {...register("password")}
                placeholder="Enter your Password"
                type="Password"
                className="w-full  border border-[#636364] mt-2 px-2 py-3 rounded-lg  max-xl:text-base  max-lg:text-sm"
              />
            </div>
            <div>
              {errors.password && (
                <p className="text-[#EA454C]  max-xl:text-base  max-lg:text-sm">
                  {errors.password.message}
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
                : " Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
