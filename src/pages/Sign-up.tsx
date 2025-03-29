import { SignUpForm } from "../components/Sign-Up-Form";
import SignInUndraw from "../assets/Group_4-removebg-preview.png";
export const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen px-3">
      <div className="w-[40%]  ">
        <SignUpForm />
      </div>
      <div className="w-[60%] h-screen py-3">
        <div className="bg-[#FFE6C9] h-full w-full flex justify-center items-center rounded-lg">
          <img src={SignInUndraw} className="w-[70%] h-[70%]" />
        </div>
      </div>
    </div>
  );
};
