import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from '../context/LoginContext.jsx';
import { icons } from '../assets/app.js';
import { MdMenu } from 'react-icons/md';
import axios from 'axios'


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State for dropdown visibility
    const navigate = useNavigate();
    const { isLoggedIn, setisLoggedIn,profileImg} = useContext(LoginContext);

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

    //logout user
    async function logout(){
        await axios.get('http://localhost:3000/api/v1/users/logout', {withCredentials: true})
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        setisLoggedIn(false)
    }
    function myProperties(){
        navigate('/my-properties')
    }
    function myProfile(){
        navigate('/my-profile')
    }

    return (
        <div
            className={`${isScrolled ? "bg-[#0B051C]" : "transparent"
                } flex transition-all duration-100 fixed justify-between items-center px-[10%] top-0 z-10 w-screen left-0 py-5 mx-w-[1600px]`}
        >
            <div onClick={() => navigate('/')} className="text-yellow-400 text-xl cursor-pointer">LOGO</div>
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
            {
                isLoggedIn ? (
                    <div
                        onMouseEnter={() => setIsDropdownVisible(true)} // Show dropdown on hover
                        onMouseLeave={() => setIsDropdownVisible(false)} // Hide dropdown on mouse leave
                        className="relative"
                    >
                        <img
                            id="User"
                            className="h-10 cursor-pointer bg-white rounded-full max-tablet:hidden"
                            src={profileImg ? profileImg : icons.user_icon}
                            alt="User"
                        />
                        {isDropdownVisible && (
                            <div id="invi" className="absolute right-0 top-9 z-9 w-56 bg-[#0B051C] text-white p-2 rounded shadow-md">
                                <p onClick={myProfile} className="cursor-pointer mb-1 p-2 hover:bg-gray-700 rounded">My profile</p>
                                <p onClick={myProperties} className="cursor-pointer mb-1 p-2 hover:bg-gray-700 rounded">Manage my properties</p>
                                <p onClick={logout} className="cursor-pointer mb-1 p-2 hover:bg-gray-700 rounded">Logout</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="text-black max-laptop:px-4 max-tablet:text-sm bg-white font-medium px-10 py-2 max-tablet:hidden rounded-3xl text-lg"
                    >
                        Sign Up / Login
                    </button>
                )
            }
            <div className="tablet:hidden"><MdMenu color="#ffffff" size={23} /></div>
        </div>
    );
}

export default Navbar;
