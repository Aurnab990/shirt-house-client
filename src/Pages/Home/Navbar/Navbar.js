import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/Authprovider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    

    const items = [
        <div className='navbar-center hidden lg:flex font-semibold text-yellow-400'>
            <Link to={"/"}><li className='hover:text-white'><a>Home</a></li></Link>
            
            {
                user?
                <Link to={"/myitems"}><li className='hover:text-white'><a>My Items</a></li></Link>:
                <p></p>
            }
            <li className='hover:text-white'><a>Blog</a></li>
            <li className='hover:text-white'><a target='blank'>About</a></li>

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
                            <li><a>Products</a></li>
                            <li><a>My Items</a></li>
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
                    {
                        user?<Link to={"/login"}><a className="btn btn-outline btn-warning">Logout</a></Link>:
                        <Link to={"/login"}><a className="btn btn-outline btn-warning">Login</a></Link>
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;