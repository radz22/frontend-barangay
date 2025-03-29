import { SignInForm } from "../components/Sign-In-Form";
import SignInUndraw from "../assets/signin.png";
export const Signin = () => {
  return (
    <div className="flex justify-center items-center h-screen px-3">
      <div className="w-[60%] h-screen py-3">
        <div className="bg-[#FFE6C9] h-full w-full flex justify-center items-center rounded-lg">
          <img src={SignInUndraw} className="w-[70%] h-[70%]" />
        </div>
      </div>
      <div className="w-[40%]  ">
        <SignInForm />
      </div>
    </div>
  );
};
