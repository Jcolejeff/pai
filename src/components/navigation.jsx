import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-2 font-normal">
        <NavLink to="/" className="p-2">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-2 font-normal">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "lg:bg-[#1D1E23] lg:rounded-[40px] p-2" : "p-2"
          }
        >
          About Pai
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-2 font-normal">
        <NavLink
          to="/enterprise"
          className={({ isActive }) =>
            isActive ? "lg:bg-[#1D1E23] lg:rounded-[40px] p-2" : "p-2"
          }
        >
          Enterprise
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-[#0F1015] !backdrop-blur-0 !bg-opacity-100 inset-x-0 max-w-full border-none p-4 lg:px-8 lg:py-6 shadow-none rounded-none fixed z-50 border-b-2 border-b-default">
      <div className="flex lg:grid grid-cols-3 items-center justify-between">
        <NavLink to="/">
          <img src="/pwblogo.png" alt="logo" width={48} height={48} />
        </NavLink>
        <div className="hidden lg:block justify-self-center">{navList}</div>
        <div className="justify-self-end">
          <Link to="/waitlist">
            <button className="bg-custom-blue rounded font-semibold leading-5 text-white p-2 px-4 mr-4 lg:mr-0">
              Join waitlist
            </button>
          </Link>
          <IconButton
            type="button"
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
