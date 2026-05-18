import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/tutors'}>Tutors</NavLink></li>
        <li><NavLink href={'/add-tutor'}>Add Tutors</NavLink></li>
        <li><NavLink href={'/my-tutors'}>My Tutors</NavLink></li>
        <li><NavLink href={'/my-booked-session'}>My Booked Sessions</NavLink></li>
    </>
    return (
        <div className="  bg-base-100 shadow-sm">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link href={'/'} className="text-3xl text-primary font-bold">MediQueue</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <div className="">
                            <Link href={'/login'}><button className="btn btn-primary text-white">Login</button></Link>
                            <Link href={'/signup'}><button className="btn btn-info text-white">Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;