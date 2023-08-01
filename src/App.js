import { Children, useState } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Register from "./pages/Register";
import Home from "./pages/Home";
// import { Single } from "./pages/Single";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// export const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },

  {
    path: "/Register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/Login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Write",
    element: (
      <div>
        <Navbar2 />
        <Write />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Single/:id",
    element: (
      <div>
        <div>
          <Navbar2 />
          <Single />
          <Footer />
        </div>
      </div>
    ),
  },
]);

function App() {
  return (
    <div className=" w-full  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
