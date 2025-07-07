import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import Swal from 'sweetalert2';
import { useAuth } from '../contexts/AuthContext';
import ToggleButton from './common/ToggleButton';
import { useDarkMode } from '../contexts/ThemeContext';


const Navbar = () => {

    const { user, logout } = useAuth();
    // console.log(user);

    const { darkMode, setDarkMode } = useDarkMode();

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, LogOut!",
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire({
                            title: "LogOut Successful...",
                            icon: "success"
                        })
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "LogOut Unsuccessful...",
                            icon: "error"
                        })
                    })
            }
        });
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkStyle = 'font-medium tracking-wide text-gray-700 dark:text-[#ffffff99] transition-colors duration-200 hover:text-deep-purple-accent-400';
    const links = <>
        <li>
            <NavLink className={navLinkStyle} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className={navLinkStyle} to='/find-tutors'>Find Tutors</NavLink>
        </li>
        <li>
            <NavLink className={navLinkStyle} to='/add-tutorials'>Add Tutorials</NavLink>
        </li>
        <li>
            <NavLink className={navLinkStyle} to='/my-tutorials'>My Tutorials</NavLink>
        </li>
        <li>
            <NavLink className={navLinkStyle} to='/my-booked-tutors'>My Booked Tutors</NavLink>
        </li>
    </>

    return (
        <div className="mb-10 w-full px-[4.166666667%]  py-5 bg-base-200 border-b border-base-300">
            <div className="relative flex items-center justify-between">
                <div>
                    <span className='flex items-center'>
                        <img className='w-12' src="/logo.png" alt="Website Logo" />
                        <h2 className='text-4xl'>
                            <span className='text-cyan-700 font-medium'>Earn</span>
                            <span className='text-gray-400 font-bold'>Lang</span>
                        </h2>
                    </span>
                </div>
                <ul className="items-center hidden space-x-6 lg:flex">
                    {links}
                    <ul className="items-end hidden ml-auto lg:flex lg:gap-2">
                        <li className='mr-2'>
                            <ToggleButton data={{ darkMode, setDarkMode }} />
                        </li>
                        <li>
                            {
                                user ?
                                    <button onClick={handleLogOut} className='btn bg-gray-400'>LogOut</button> :
                                    <Link to='/login'>
                                        <button className='btn bg-gray-400'>Login</button>
                                    </Link>
                            }

                        </li>
                        <li>
                            {
                                user &&
                                <div id='profileInfo' className='flex flex-col relative cursor-pointer'>
                                    <img className='w-10 h-10 border rounded-full' src={user?.photoURL} alt="User Image" />
                                    <div id='profileName' className='absolute top-10 right-0 w-48 text-end'>
                                        <p>{user.displayName}</p>
                                    </div>
                                </div>
                            }

                        </li>
                    </ul>
                </ul>

                <div className="lg:hidden flex">

                    <div className='mr-2'>
                        <ToggleButton data={{ darkMode, setDarkMode }} />
                    </div>

                    <div className='flex items-center gap-2'>


                        {
                            user &&
                            <div id='profileInfo' className='flex flex-col relative cursor-pointer'>
                                <img className='w-10 h-10 border rounded-full' src={user?.photoURL} alt="User Image" />
                                <div id='profileName' className='absolute top-10 right-0 w-48 text-end'>
                                    <p>{user.displayName}</p>
                                </div>
                            </div>
                        }
                    </div>

                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 cursor-pointer transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute z-50 top-0 left-0 w-full">
                            <div className="p-5 bg-base-200 rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className='flex items-end'>
                                            <img className='w-12' src="logo.png" alt="Website Logo" />
                                            <h2 className='text-4xl'>
                                                <span className='text-cyan-700 font-medium'>Room</span>
                                                <span className='text-gray-400 font-bold'>Zip</span>
                                            </h2>
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        {links}
                                        <ul className='flex gap-2'>
                                            <li>
                                                {
                                                    user ?
                                                        <button onClick={handleLogOut} className='btn bg-gray-400'>LogOut</button> :
                                                        <Link to='/login'>
                                                            <button className='btn bg-gray-400'>Login</button>
                                                        </Link>
                                                }

                                            </li>
                                        </ul>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar
