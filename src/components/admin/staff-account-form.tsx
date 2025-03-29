import React from "react";
import authHook from "../../hooks/authHook";
import {
  signinAndsignupSchema,
  signinAndsignupType,
} from "../../type/user/signin-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DirectionType } from "../../type/admin/direction-type";
interface StaffAccountFormProps {
  setDirection: (direction: DirectionType) => void;
}

const StaffAccountForm: React.FC<StaffAccountFormProps> = ({
  setDirection,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinAndsignupType>({
    resolver: zodResolver(signinAndsignupSchema),
    defaultValues: {
      role: "staff",
    },
  });
  const { handleUserSignup } = authHook();
  const onSubmit = (data: signinAndsignupType) => {
    handleUserSignup(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[50%]  inset-y-0 left-0  bg-white shadow-lg px-10 py-10">
        <div>
          <h1 className="text-center text-2xl font-semibold">Staff Account</h1>
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
                Password
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
          <div className="mt-5 text-right">
            <p
              className="underline text-[#7F265B]  text-right cursor-pointer"
              onClick={() => setDirection("forgot")}
            >
              Forgot Password
            </p>
          </div>
          <div className="w-full mt-5">
            <button
              className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg "
              type="submit"
            >
              Register Staff Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffAccountForm;
