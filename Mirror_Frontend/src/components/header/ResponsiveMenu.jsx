import React from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-slate-950 text-white z-[9999] transition-transform duration-500 ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } flex flex-col justify-between p-6`}
    >
      {/* User Info */}
      <div className="mt-12 flex items-center gap-3">
        <FaUserCircle size={50} />
        <div>
          <h1>Mirror Space</h1>
          <h1 className="text-sm text-slate-400">Premium user</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex-1">
        <ul className="space-y-6 text-xl">
          <li className="hover:text-orange-400 transition">
            <a href="/hero">Home</a>
          </li>
          <li className="hover:text-orange-400 transition">
            <a href="/service">Services</a>
          </li>
          <li className="hover:text-orange-400 transition">
            <a href="/">Portfolio</a>
          </li>
          <li className="hover:text-orange-400 transition">
            <a href="/footer">Contact</a>
          </li>
          <li className="hover:text-orange-400 transition">
            <a href="/">Our Interior</a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-sm text-slate-400 text-center">
        © 2025 All Rights Reserved
      </div>
    </div>
  );
};

export default ResponsiveMenu;
