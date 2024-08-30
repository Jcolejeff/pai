import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Enterprise from "./pages/enterprise/index";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/enterprise",
    element: <Enterprise />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/waitlist",
    element: <Waitlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
