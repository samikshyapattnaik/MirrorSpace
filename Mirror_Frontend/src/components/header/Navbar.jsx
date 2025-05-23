import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo2.png";
import OfferHeader from "./OfferHeader";

const Navbar = ({onLoginClick}) => {
  // const Navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px]  border-s-white">
        <OfferHeader />
        {/* Navbar section */}
        <nav className="flex items-center justify-between px-4 py-2 md:px-8 shadow-md bg-white">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <a href="/ "> <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-gray-800">
             MIRROR <span className="text-amber-700">SPACE</span>
           </span>
           <span className="text-xs text-gray-600 mt-1">INTERIOR DESIGN</span>
           </div></a>
          </div>
          {/* Desktop menu section */}  
          <div className="hidden md:block">
            <ul className="flex items-center gap-10"> 
              <li className="group relative cursor-pointer text-black/80 hover:text-primary">
                <a href="mirrorspace-40ev.onrender.com/home" className="flex items-center gap-[2px] h-[72px]">
                  Home{""}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* dropdown section */}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200"
                    ><a href="/service">Sevice</a></li>
                    <li className="p-2 hover:bg-violet-200">
                      <a href="/about">About Us</a></li>
                    <li className="p-2 hover:bg-violet-200">
                      <a href="/blog">Privacy policy</a></li>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer  text-black/80 hover:text-primary">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Our Gallery{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="overflow-hidden">
                      <img
                        src="/download.jpeg"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600">
                      Step into our home gallery—a visual diary where time stands still. Each frame whispers a memory,
                       each photo pulses with emotion. It’s more than pictures on a wall; it’s a mosaic of laughter, love, and quiet wonder,
                        curated to make your heart pause and your soul smile.
                        
                        <div className="grid grid-cols-3 mt-4">
                          <div>

                            <h1 className="pb-1 text-xl font-semibold">
                              Residential Interiors
                            </h1>
                            <ul className="space-y-2">
                              <a href="/kitchen">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                kitchen Interiors
                              </li>
                              </a> 
                              <a href="/hall">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Hall Interiors
                              </li>
                              </a>
                              <a href="/bathroom">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Bathroom Interiors
                              </li>
                              </a>
                              <a href="/commercial">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Commercial Interiors
                              </li>
                              </a>
                              <a href="/residential">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Office Interiors
                              </li>
                              </a>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              End to End Offering
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Interior Design
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Architecture Design
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Landscape Design
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="/Dropdown_img1.jpeg"
                              alt="not found"
                              className="max-h-[300px] w-full rounded-b-3xl object-fill"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" text-black/80 hover:text-primary">
              <a href="/about">About Us</a>
              </li>
              <li className=" text-black/80 hover:text-primary"
                   onClick={onLoginClick}> Login</li>
              <li className="text-black/80 hover:text-primary">
              <a href="/blogs">Our Blogs</a>
              </li>
              
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="bg-sky-300 text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="bg-black text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile menu Header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="bg-sky-200 text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className=" bg-black text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="bg-black cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="bg-black cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile menu section */}
 {/* Responsive Menu */}
<ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />    
</>
  );
};

export default Navbar;