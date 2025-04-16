import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import VerificationCodeHook from "../hooks/verification-code-hook";

interface VerificationCodeProps {
  email: string;
  password: string;
}

const otpSchema = z.object({
  otp: z.string().min(1, "OTP is required"),
});

type OtpType = z.infer<typeof otpSchema>;

const VerificationCode: React.FC<VerificationCodeProps> = ({
  email,
  password,
}) => {
  const { verifyCodeMutation, handleLogin } = VerificationCodeHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpType>({
    resolver: zodResolver(otpSchema),
  });

  const onSubmit = (data: OtpType) => {
    handleLogin({ email, code: data.otp, password });
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-lg text-[#181818] font-semibold">OTP</h1>
      </div>
      <div>
        <input
          placeholder="Enter your OTP here"
          className="w-full border border-[#636364] mt-2 px-2 py-3 rounded-lg max-xl:text-base max-lg:text-sm"
          {...register("otp")}
        />
        {errors.otp && (
          <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
        )}
      </div>
      <div className="w-full mt-8">
        <button
          className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg"
          type="submit"
        >
          {verifyCodeMutation.isPending ? "Loading..." : "Confirm"}
        </button>
      </div>
    </form>
  );
};

export default VerificationCode;
