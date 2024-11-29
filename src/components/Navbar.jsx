import React, { useContext } from 'react';
import banner from '../assets/images/more/logo1.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-bgnav bg-no-repeat bg-cover bg-center py-1'>

            <div className="navbar md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className='btn '>Home</NavLink>
                            <NavLink to='addCoffee' className='btn '>Add Coffee</NavLink>


                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <img className='md:w-16 w-8' src={banner} alt="" />
                        <h3 className='md:text-3xl font-bold text-white'>Espresso Emporium</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to='/' className='btn '>Home</NavLink>
                        <NavLink to='addCoffee' className='btn '>Add Coffee</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user ? <button className='btn'>LogOut</button>
                            : <NavLink to='/signin' className='btn '>Sign in</NavLink>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;