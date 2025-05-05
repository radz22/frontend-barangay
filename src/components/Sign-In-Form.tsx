import {
  signinAndsignupType,
  signinAndsignupSchema,
} from "../type/user/signin-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authHook from "../hooks/authHook";
import VerificationCode from "./verification-code";
import { useState } from "react";
import logo from "../assets/barangay-logo.png";
import { useResidentData } from "../hooks/use-resident-data";
export const SignInForm = () => {
  const { data } = useResidentData();

  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinAndsignupType>({
    resolver: zodResolver(signinAndsignupSchema),
  });

  const { handleUserSignin, signinMutation, sendSuccess } = authHook();
  const [authData, setAuthData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const onSubmit = (data: signinAndsignupType) => {
    handleUserSignin(data);
    setAuthData({ email: data.email, password: data.password });
  };

  return (
    <div className="px-3 flex items-center justify-center flex-col">
      <div className="w-[70%]">
        <div>
          <div className="w-[150px] h-[100px] rounded-full flex items-start justify-start">
            <img src={logo} className="w-full h-full" />
          </div>
          <div className="mt-2">
            <h1 className="text-3xl text-[#525252] font-semibold">
              {sendSuccess ? "Verification Code" : "Login to your Account"}
            </h1>
          </div>
        </div>
        {sendSuccess ? (
          <VerificationCode
            email={authData.email}
            password={authData.password}
          />
        ) : (
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <h1 className="text-lg text-[#181818] font-semibold  ">
                  Email
                </h1>
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
                  <p className="text-[#7F265B]  max-xl:text-base  max-lg:text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full mt-8">
              <button
                className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg "
                type="submit"
                disabled={signinMutation.isPending}
              >
                {signinMutation.isPending ? "Looding..." : "Login"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
