import React, { useEffect } from "react";
import { accountDatatype } from "../../type/user/account-data-type";
import {
  signinAndsignupSchema,
  signinAndsignupType,
} from "../../type/user/signin-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authHook from "../../hooks/authHook";
import { resetpasswordtype } from "../../type/user/auth-type";
interface ViewAndUpdateAccountProps {
  data: accountDatatype | null;
  handleClose: () => void;
}
const ViewAndUpdateAccount: React.FC<ViewAndUpdateAccountProps> = ({
  data,
  handleClose,
}) => {
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
    if (data) {
      reset({
        email: data.email,
      });
    }
  }, [data, reset]);
  const onSubmit = (userData: signinAndsignupType) => {
    const resetData: resetpasswordtype = {
      newpassword: userData.password,
      id: data?._id,
    };

    handleResetPassword(resetData);
    handleClose();
  };

  return (
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
          {resetPasswordMutation.isPending ? "Loading..." : " Change Password"}
        </button>
      </div>
    </form>
  );
};

export default ViewAndUpdateAccount;
