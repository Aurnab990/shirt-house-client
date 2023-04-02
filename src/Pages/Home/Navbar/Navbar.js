import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const items = [
        <div className='navbar-center hidden lg:flex font-semibold text-yellow-400'>
            <li className='hover:text-white'><a>Home</a></li>
            <li className='hover:text-white'><a>Shop</a></li>
            <li className='hover:text-white'><a>Contact</a></li>
            <li className='hover:text-white'><a>Blog</a></li>
            <li className='hover:text-white'><a>Pages</a></li>

        </div>
    ]
    return (
        <div data-theme="" className='bg-red-950'>
            <div className="navbar bg-red-950">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Pages</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">DesiVibes</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"login"}><a className="btn btn-outline btn-warning">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;