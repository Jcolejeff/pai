import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

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
			<Typography
				as="li"
				variant="small"
				className="p-2 font-normal"
			></Typography>
			<Typography as="li" variant="small" className="p-2 font-normal">
				<NavLink
					to="https://powerlabstech.com/articles-and-research"
					className={({ isActive }) =>
						isActive ? "lg:bg-[#1D1E23] lg:rounded-[2.5rem] p-2" : "p-2"
					}
				>
					Blog
				</NavLink>
			</Typography>
			<Typography as="li" variant="small" className="p-2 font-normal">
				<NavLink
					to="https://webinar.powerlabstech.com/"
					className={({ isActive }) =>
						isActive ? "lg:bg-[#1D1E23] lg:rounded-[2.5rem] p-2" : "p-2"
					}
				>
					Webinar
				</NavLink>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="bg-[#0F1015] !backdrop-blur-0 !bg-opacity-100 inset-x-0 max-w-full border-none p-4 lg:px-12 lg:py-6 shadow-none rounded-none fixed z-50 border-b-2 border-b-default">
			<div className="flex lg:grid grid-cols-3 items-center justify-between">
				<NavLink to="/">
					<img src="/pailogo.png" alt="logo" />
				</NavLink>
				<div className="hidden lg:block justify-self-center">{navList}</div>
				<div className="flex justify-self-end gap-2">
					<div>
						<Link to="https://pai.powerlabstech.com/app/login">
							<button className="bg-transparent border  border-[#E6F0FF] rounded-md font-semibold text-[#E6F0FF] mx-auto px-4 py-[0.5rem] text-[0.875rem] flex items-center">
								Sign in
							</button>
						</Link>
					</div>
					<div>
						<Link to="/">
							<button className="bg-custom-blue rounded font-semibold leading-5 text-white px-4 py-[0.6rem] mr-4 lg:mr-0 hidden lg:flex">
								Book a demo
							</button>
						</Link>
						<IconButton
							type="button"
							variant="text"
							className="h-12 w-12 flex items-center justify-center border-2 border-gray-300 rounded-full hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<IoMdClose className="text-white text-[1.5rem]" />
							) : (
								<HiOutlineMenuAlt4 className="text-white text-[1.5rem]" />
							)}
						</IconButton>
					</div>
				</div>
			</div>
			<Collapse open={openNav}>
				<div className="container mx-auto">
					{navList}
					<div className="ml-4">
						<Link to="/waitlist">
							<button className="bg-custom-blue rounded font-semibold leading-5 text-white px-4 py-[0.6rem] mr-4 lg:mr-0">
								Join waitlist
							</button>
						</Link>
					</div>
				</div>
			</Collapse>
		</Navbar>
	);
}
