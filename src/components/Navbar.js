// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// // import { useState, useEffect } from "react";
// import "../App.css";
// import { AuthContext } from "../context/authContext";
// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Science", href: "/?cat=science" },
//   { name: "Technology", href: "/?cat=technology" },
//   { name: "Design", href: "/?cat=design" },
//   // { name: "Write", href: "/write" },
//   // { name: "Logout", href: "/login" },
// ];

// export default function Navbar() {
//   const { currentUser, logout } = useContext(AuthContext);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const handleClick = () => {
//     alert("Please Login!");
//   };

//   return (
//     <div className="bg-white w-screen">
//       <div className="bg-cover h-full w-auto">
//         <img src="/images/bgimage.jpg" alt="" />
//       </div>
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav
//           className="flex items-center justify-between p-6 lg:px-8"
//           aria-label="Global"
//         >
//           <div className="flex lg:flex-1">
//             <Link to={`/`} className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <Link to={`/`}>
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=slate&shade=600"
//                   alt=""
//                 />
//               </Link>
//             </Link>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 {item.name}
//               </a>
//             ))}
//             {!currentUser ? (
//               <Link
//                 onClick={handleClick}
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Write
//               </Link>
//             ) : (
//               <Link
//                 className="link text-sm font-semibold leading-6 text-gray-900"
//                 to={`/write`}
//               >
//                 Write
//               </Link>
//             )}
//             {currentUser ? (
//               <Link
//                 onClick={logout}
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Logout
//               </Link>
//             ) : (
//               <Link
//                 className="link text-sm font-semibold leading-6 text-gray-900"
//                 to={`/login`}
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <Link
//               to={`#`}
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               {currentUser?.username} <span aria-hidden="true">&rarr;</span>
//             </Link>
//           </div>
//         </nav>
//         <Dialog
//           as="div"
//           className="lg:hidden"
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//         >
//           <div className="fixed inset-0 z-50" />
//           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <Link to={`#`} className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   alt=""
//                 />
//               </Link>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                   {!currentUser ? (
//                     <Link
//                       onClick={handleClick}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       Write
//                     </Link>
//                   ) : (
//                     <Link
//                       className="link -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                       to={`/write`}
//                     >
//                       Write
//                     </Link>
//                   )}
//                   {currentUser ? (
//                     <Link
//                       onClick={logout}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       Logout
//                     </Link>
//                   ) : (
//                     <Link
//                       className="link -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                       to={`/login`}
//                     >
//                       Login
//                     </Link>
//                   )}
//                 </div>
//                 <div className="py-6">
//                   <Link
//                     to={`#`}
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     {currentUser?.username}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Dialog>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

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

const Navbar = () => {
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
      <div className="bg-cover h-full w-auto">
        <img src="/images/bgimage.jpg" alt="" />
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
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
      </header>
    </>
  );
};

export default Navbar;
