import {
  forgotPasswordSchema,
  forgotPasswordType,
} from "../type/user/forgot-password-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authHook from "../hooks/authHook";
import { DirectionType } from "../type/admin/direction-type";

interface ForgotPasswordFormProps {
  setDirection: (direction: DirectionType) => void;
}

const ForgotPasswordContent: React.FC<ForgotPasswordFormProps> = ({
  setDirection,
}) => {
  const { handleForgotPassword, forgotPasswordMutation } = authHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: forgotPasswordType) => {
    handleForgotPassword(data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[50%]  inset-y-0 left-0  bg-white shadow-lg px-10 py-10">
        <div className="mt-10 flex items-center justify-center flex-col w-full">
          <div className="w-full">
            <div>
              <h1 className="text-2xl font-semibold text-[#525252] text-center">
                Did you forget your password?
              </h1>
              <p className="text-center text-[#525252] mt-5">
                Enter your email address you're using for your account below and
                we will send you a password reset link
              </p>
            </div>
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div>
                  <div>
                    <h1 className="text-lg text-[#181818] font-semibold  ">
                      Email Address
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

                <div className="mt-5 ">
                  <p
                    className="underline text-[#7F265B]  text-right cursor-pointer"
                    onClick={() => setDirection("create")}
                  >
                    Create Account Staff
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg "
                    type="submit"
                    disabled={forgotPasswordMutation.isPending}
                  >
                    {forgotPasswordMutation.isPending
                      ? "Loading..."
                      : "Request Reset Link"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordContent;
