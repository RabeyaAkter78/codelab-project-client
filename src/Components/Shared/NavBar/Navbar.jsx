import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'Blog', link: '/blog' },
        { name: 'About Us', link: '/about' }
    ];

    const handleClickedItem = (item) => {
        setActiveLink(item.link);
    }

    return (
        <div className="navbar bg-base-100 font-bold text-2xl z-10 fixed max-w-screen-xl mx-auto">
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
                        {navItems.map(item => <li key={item.name} onClick={() => handleClickedItem(item)}>
                            <a href={item.link} className={activeLink === item.link ? "border-b-2 border-teal-900" : ""}>{item.name}</a>
                        </li>)}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src="/Group 1.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(item => <li key={item.name} onClick={() => handleClickedItem(item.link)}>
                        <a href={item.link} className={activeLink === item.link ? "border-b-2 border-teal-900" : ""}>{item.name}</a>
                    </li>)}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline">Appointment <MdArrowOutward /></a>
            </div>
        </div>
    );
};

export default Navbar;