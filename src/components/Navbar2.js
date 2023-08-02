import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import NavLogo1 from "../image/navLogo1.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLogo1 from "../images/astronaut.png";
import "../App.css";

const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [Navimg, setNavimg] = useState();
  const { currentUser, logout } = useContext(AuthContext);

  const navigation = [
    { name: "Science", href: "/?cat=science" },
    { name: "Technology", href: "/?cat=technology" },
    { name: "Design", href: "/?cat=design" },
    // { name: "Write", href: "/write" },
    // { name: "Logout", href: "/login" },
  ];

  const handleClick = () => {
    alert("Please Login!");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        // style={{ backgroundColor: `${navBg}` }}
        className=" sticky sm:flex   w-full   h-20 shadow-2xl z-[100]   ease-in-out duration-300 mb-[100px]"
      >
        <div className="flex justify-between items-center mid:justify-end  w-full h-full px-2 2xl:px-16 ">
          <Link to={"/"} className="hidden md:flex" href="/">
            <img width="90" height="35" src={NavLogo1} alt="logo" />
          </Link>

          <div className="">
            <ul className=" hidden md:flex">
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=art">Art</Link>
              </li>
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=science">Science</Link>
              </li>
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=technology">Technology</Link>
              </li>
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=cinema">Cinema</Link>
              </li>
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=design">Design</Link>
              </li>
              <li className="ml-7 text-sm  hover:border-b text-white font-medium">
                <Link to="/?cat=food">Food</Link>
              </li>
              <span className="ml-7 text-sm   hover:border-b text-blue font-medium cursor-pointer">
                {currentUser?.username}
              </span>

              {currentUser ? (
                <span
                  onClick={logout}
                  className="ml-7 text-sm   hover:border-b  text-blue font-medium cursor-pointer"
                >
                  Logout
                </span>
              ) : (
                <Link to="/Login">
                  <a className="ml-7 text-sm   hover:border-b  text-blue font-medium cursor-pointer">
                    login
                  </a>
                </Link>
              )}

              {!currentUser ? (
                <Link
                  className="ml-7 text-sm   hover:border-b text-white font-medium bg-slate-400 opacity-3 rounded-lg px-3 py-1"
                  onClick={handleClick}
                >
                  Write
                </Link>
              ) : (
                <Link
                  className="ml-7 text-sm   hover:border-b text-white font-medium bg-slate-400 opacity-3 rounded-lg px-3 py-1"
                  to={`/write`}
                >
                  Write
                </Link>
              )}
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="hidden mid:flex "
            >
              <AiOutlineMenu
                onClick={handleNav}
                size={25}
                className="cursor-pointer hover:text-white hidden mid:flex "
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed right-0 top-0 w-[60%] sm:w-[60%]  h-screen bg-[#ecf0f3]   p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <div className="border-b border-gray-300 my-4">
                  {currentUser ? (
                    <p className="w-[85%] sm:w-[90%] py-4">
                      Welcome! {currentUser?.username}
                    </p>
                  ) : (
                    <p className="w-[85%] sm:w-[90%] py-4">
                      Not logged in yet!
                    </p>
                  )}

                  {currentUser ? (
                    <span
                      onClick={logout}
                      className=" py-4 text-sm  border-b text-blue font-normal  cursor-pointer"
                    >
                      Logout
                    </span>
                  ) : (
                    <Link to="/Login">
                      <a className="  py-4 text-sm  border-b text-blue font-normal  cursor-pointer">
                        Login
                      </a>
                    </Link>
                  )}
                </div>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="pb-4 flex flex-col">
              <ul className=" ">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=art">art</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=science">science</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=technology">technology</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=cinema">cinema</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=design">design</Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm  border-b text-white font-medium uppercase"
                >
                  <Link to="/?cat=food">food</Link>
                </li>
                {!currentUser ? (
                  <Link
                    className="text-sm   hover:border-b text-white font-medium bg-slate-400 opacity-3 rounded-lg px-3 py-1"
                    onClick={handleClick}
                  >
                    Write
                  </Link>
                ) : (
                  <Link
                    className=" text-sm   hover:border-b text-white font-medium bg-slate-400 opacity-3 rounded-lg px-3 py-1"
                    to={`/write`}
                  >
                    Write
                  </Link>
                )}
                <li className="py-4">
                  {/* <span className="   text-md  border-b text-blue font-medium  cursor-pointer">
                    {currentUser?.username}
                  </span> */}
                </li>
                <li>
                  {/* {currentUser ? (
                      <span
                        onClick={logout}
                        className=" py-4 text-md  border-b text-blue font-medium  cursor-pointer"
                      >
                        Logout
                      </span>
                    ) : (
                      <Link to="/Login">
                        <a className=" py-4 text-md  border-b text-blue font-medium  cursor-pointer">
                          login
                        </a>
                      </Link>
                    )} */}
                </li>
              </ul>
            </div>
          </div>
          {/* mobile */}
        </div>
      </div>
    </>
  );
};

export default Navbar2;
