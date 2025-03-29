import {
  signinAndsignupType,
  signinAndsignupSchema,
} from "../type/user/signin-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../assets/Barangay logo.png";
import authHook from "../hooks/authHook";
import { Link } from "react-router-dom";
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinAndsignupType>({
    resolver: zodResolver(signinAndsignupSchema),
    defaultValues: {
      role: "user",
    },
  });
  const { handleUserSignup } = authHook();
  const onSubmit = (data: signinAndsignupType) => {
    handleUserSignup(data);
  };
  return (
    <div className="px-3 flex items-center justify-center flex-col">
      <div className="w-[70%] ">
        <div>
          <div>
            <img src={logo} />
          </div>
          <div className="mt-2">
            <h1 className="text-3xl text-[#525252] font-semibold">
              Register to your Account
            </h1>
          </div>
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

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <h1 className="text-[#7F265B]  max-lg:text-sm">Remember me</h1>
              </div>
            </div>
            <div>
              <Link to="/page/forgot-password">
                <h1 className="text-[#7F265B] max-lg:text-sm cursor-pointer">
                  Forgot password
                </h1>
              </Link>
            </div>
          </div>
          <div className="w-full mt-8">
            <button
              className="text-[#FFFFFF] bg-[#7F265B] text-center w-full py-3 px-3 text-lg font-semibold rounded-lg "
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="mt-5">
            <Link to="/">
              {" "}
              <p className="text-[#595959] text-center font-semibold max-lg:text-sm">
                Do you have an account?
                <span className="text-[#7F265B]"> Sign in</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
