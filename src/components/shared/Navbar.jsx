"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlineHome } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
    {
      path: "/",
      icon: <MdOutlineHome />,
      text: "Home",
    },
    {
      path: "/timeline",
      icon: <IoTimeOutline />,
      text: "Timeline",
    },
    {
      path: "/stats",
      icon: <ImStatsDots />,
      text: "Stats",
    }
  ];

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            
                            {
                            navItems.map((item, index) => (
                                <Link
                                key={index}
                                href={item.path}
                                className={`p-3 rounded-md flex items-center gap-1 font-semibold text-[16px] transition-all duration-300 
                                ${
                                    pathname === item.path
                                    ? "bg-[#244d3f] text-white"
                                    : "text-[#64748b] hover:bg-[#244d3f] hover:text-white"
                                }`}
                                >
                                {item.icon}
                                {item.text}
                                </Link>
                            ))
                        }
                        </ul>
                    </div>
                    
                    <Link href="/" className="text-3xl text-[#244d3f] font-semibold"><span className='text-[#1f2937] font-bold'>Keen</span>Keeper</Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 gap-4">
                        {
                            navItems.map((item, index) => (
                                <Link
                                key={index}
                                href={item.path}
                                className={`p-3 rounded-md flex items-center gap-1 font-semibold text-[16px] transition-all duration-300 
                                ${
                                    pathname === item.path
                                    ? "bg-[#244d3f] text-white"
                                    : "text-[#64748b] hover:bg-[#244d3f] hover:text-white"
                                }`}
                                >
                                {item.icon}
                                {item.text}
                                </Link>
                            ))
                        }
                    </ul>
                    
                </div>

            </div>
        </div>
    );
};

export default Navbar;