import { Link } from "react-router-dom";
import logo from "../../assets/barangay-logo.png";
import { useState } from "react";
import OptionCard from "./option-card";
import userHook from "../../hooks/user/user-hook";
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { userData } = userHook();

  const getEmailAndFirstLetter = userData?.email[0].toUpperCase();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center justify-around py-5 px-3">
      <div className="flex items-center gap-3">
        <div className="w-auto h-18">
          <img src={logo} className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-[#7F265B]">STA. MONICA</h1>
          <p className="text-xs font-semibold text-[#595959]">QUEZON CITY</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          <Link to="/page/home">
            <li className="text-[#595959] font-semibold hover:text-[#7F265B]">
              Home
            </li>
          </Link>
          <li className="text-[#595959] font-semibold hover:text-[#7F265B]">
            About
          </li>
          <Link to="/page/residentprofilling">
            {" "}
            <li className="text-[#595959] font-semibold hover:text-[#7F265B]">
              Resident Profiling
            </li>
          </Link>

          <li className="text-[#595959] font-semibold hover:text-[#7F265B]">
            Announcement
          </li>
        </ul>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleOpen}
          >
            <div className="w-10 h-10 bg-[#7F265B] rounded-full flex items-center justify-center text-white font-semibold">
              {getEmailAndFirstLetter}
            </div>
            <div className="text-[#595959] font-semibold">
              {userData?.email}
            </div>
          </div>

          <div
            className={`absolute top-16 right-[-40px] z-1 w-[auto] ${
              isOpen
                ? "animate-fadeInUp"
                : "animate-fadeOutDown pointer-events-none"
            }`}
          >
            {isOpen && <OptionCard handleOpen={handleOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};
