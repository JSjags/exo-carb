import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/sidebar/home.svg";
import about from "../../assets/sidebar/about.svg";
import contact from "../../assets/sidebar/contact.svg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden z-[100] min-[900px]:flex w-[185px] sticky top-0 left-0 h-screen bg-[#F7FAFF] flex-col justify-start px-6 overflow-y-auto custom-scrollbar transition-all duration-300">
      <Link to={"/"} className="mt-6">
        <h1 className="text-[30px] font-semibold text-lightdark">LOGO</h1>
      </Link>
      <div className="flex justify-center flex-col gap-y-6 flex-1">
        <div className="flex flex-col gap-y-6 -translate-y-20">
          <Link
            to={"/"}
            className={`flex gap-x-3 items-center py-3 transition-all duration-300 ${
              location.pathname === "/"
                ? "bg-[#002399] text-white rounded px-2"
                : "bg-transparent text-[#0035E8]"
            }`}
          >
            <img
              src={home}
              className={`transition-all duration-300 ${
                location.pathname === "/" ? "brightness-0 invert" : ""
              }`}
            />
            <span className="font-medium text-base">Home</span>
          </Link>
          <Link
            to={"/about"}
            className={`flex gap-x-3 items-center py-3 transition-all duration-300 ${
              location.pathname === "/about"
                ? "bg-[#002399] text-white rounded px-2"
                : "bg-transparent text-[#0035E8]"
            }`}
          >
            <img
              src={about}
              className={`transition-all duration-300 ${
                location.pathname === "/about" ? "brightness-0 invert" : ""
              }`}
            />
            <span className="font-medium text-base">About</span>
          </Link>
          <Link
            to={"/contact"}
            className={`flex gap-x-3 items-center py-3 transition-all duration-300 ${
              location.pathname === "/contact"
                ? "bg-[#002399] text-white rounded px-2"
                : "bg-transparent text-[#0035E8]"
            }`}
          >
            <img
              src={contact}
              className={`transition-all duration-300 ${
                location.pathname === "/contact" ? "brightness-0 invert" : ""
              }`}
            />
            <span className="font-medium text-base">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
