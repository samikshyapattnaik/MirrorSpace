import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={` ${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[80%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Mirror Space</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li className="hover:text-primary transition-all duration-200">
              <a href="/hero">Home</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="/service">Services</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="/">Portfolio</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="/footer">Contact</a>
            </li>
            <li className="hover:text-primary transition-all duration-200">
              <a href="/">Our Interior</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2025 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
