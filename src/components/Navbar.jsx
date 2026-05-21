'use client'
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
    const { data: session, error } = authClient.useSession()
    // console.log(session, 'session');
    const user = session?.user
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/tutors?search='}>Tutors</NavLink></li>

        {
            user && <> <li><NavLink href={'/add-tutor'}>Add Tutors</NavLink></li>
                <li><NavLink href={'/my-tutors'}>My Tutors</NavLink></li>
                <li><NavLink href={'/my-booked-session'}>My Booked Sessions</NavLink></li></>
        }

    </>
    const router = useRouter();
    const handleLogOut = async () => {
        await authClient.signOut();
        router.push('/');
        router.refresh();
    }
    return (
        <div className=" shadow-sm">
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
                        <Link href={'/'} className="text-2xl sm:text-3xl text-primary font-bold">MediQueue</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-15 rounded-full">
                                        <Image
                                            alt={user?.name}
                                            src={user?.image}
                                            width={200} height={200} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-purple-200 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link href={'/profile'} className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div> : <div className="">
                                <Link href={'/login'}><button className="btn btn-primary text-white mr-4">Login</button></Link>
                                <Link href={'/signup'}><button className="btn btn-info btn-outline text-info">Register</button></Link>
                            </div>
                        }
                        <div className=""><ThemeSwitch></ThemeSwitch></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;