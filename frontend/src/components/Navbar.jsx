import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdMenu } from 'react-icons/md';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`${isScrolled ? "bg-[#0B051C] " : "bg-transparent"
                } flex transition-all duration-100 fixed justify-between items-center px-[10%] top-0 z-100 w-screen left-0 py-5 mx-w-[1600px]`}
        >
            <div className="text-yellow-400 text-xl">LOGO</div>
            <div className="flex max-tablet:hidden gap-12 text-xl">
                <NavLink
                    className={({ isActive }) => (isActive ? `text-green-300` : "text-white")}
                    to={`/buy`}
                >
                    Buy
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? `text-green-300` : "text-white")}
                    to={`/sell`}
                >
                    Sell
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? `text-green-300` : "text-white")}
                    to={`/rent`}
                >
                    Rent
                </NavLink>
            </div>
            <button onClick={() => navigate('/login')} className="text-black bg-white font-medium px-10 py-2 max-tablet:hidden rounded-3xl text-lg">
                Sign Up / Login
            </button>

            <div className="tablet:hidden">{<MdMenu color = '#ffffff' size={23} />}</div>
        </div>
    );
}

export default Navbar;
