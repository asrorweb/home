import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// img
import SiteLogo from "../../img/logo.svg";
import SiteLogoMobile from "../../img/logo-mobile.svg";

// btn img
import MenuOpen from "../../img/open.png";
import MenuClose from "../../img/close.png";

function Nav() {
    const [mobileBtnClick, setMobileBtnClick] = useState(false);

    // const MobileMenu = ()=>{

    // }

    return (
        <header className="header flex z-[900] items-center bg-white fixed top-0 left-0 right-0">
            <nav className="w-full">
                <div className="container mx-auto xl:px-10 max-xl:px-0 max-md:px-4 flex justify-between items-center">
                    <Link to={"/imba/"} className="text-4xl text-white">
                        <img src={SiteLogo} alt="" className="w-36 h-14" />
                    </Link>
                    <ul className="flex gap-3 text-xl text-gray-500 max-md:hidden">
                        <NavLink
                            to={"/imba/"}
                            className="hover:text-purple-800 p-2 text-base"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={"/imba/gallary"}
                            className="hover:text-purple-800 p-2 text-base"
                        >
                            Video Gallary
                        </NavLink>
                        <NavLink
                            to={"/imba/design"}
                            className="hover:text-purple-800 p-2 text-base"
                        >
                            3D Design
                        </NavLink>
                        <NavLink
                            to={"/imba/about"}
                            className="hover:text-purple-800 p-2 text-base"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={"/imba/price"}
                            className="hover:text-purple-800 p-2 text-base"
                        >
                            Prices
                        </NavLink>
                    </ul>
                    {/* mobile menu */}
                    <button
                        onClick={() => {
                            setMobileBtnClick(true);
                        }}
                        className="w-10 h-10 hidden max-md:flex rounded-[40px] bg-[#1f1f1f] items-center justify-center"
                    >
                        <img
                            src={MenuOpen}
                            alt="menu open btn"
                            className="w-4 h-4"
                        />
                    </button>

                    {/* mobile menu navigation box */}
                    <div
                        className={
                            mobileBtnClick
                                ? "absolute z-[1000] top-0 left-0 py-3 right-0 h-screen bg-[#111111f5] text-white translate-x-0 duration-[300ms]"
                                : "absolute z-[1000] top-0 left-0 py-3 right-0 h-screen bg-[#111111f5] text-white -translate-x-full duration-[300ms]"
                        }
                    >
                        <div
                            onClick={() => {
                                setMobileBtnClick(false);
                            }}
                            className="container mx-auto px-10 max-md:px-4"
                        >
                            {/* mobile menu box top */}
                            <div className="top_nav flex items-center justify-between mb-[10px]">
                                <Link
                                    to={"/imba/"}
                                    className="text-4xl text-white"
                                >
                                    <img
                                        src={SiteLogoMobile}
                                        className="w-36 h-14"
                                    />
                                </Link>

                                {/* mobile menu close*/}
                                <button
                                    onClick={() => {
                                        setMobileBtnClick(false);
                                    }}
                                    className="w-10 h-10 flex items-center justify-center bg-[#BD2525] rounded-full"
                                >
                                    <img
                                        src={MenuClose}
                                        alt="menu open btn"
                                        className="w-4 h-4"
                                    />
                                </button>
                            </div>

                            {/* mobile menu box bottom */}
                            <ul className="flex flex-col text-xl text-white">
                                <NavLink
                                    to={"/imba/"}
                                    className="hover:text-purple-800  p-2 text-[19px] leading-[28.8px]"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to={"/imba/gallary"}
                                    className="hover:text-purple-800 p-2 text-[19px]"
                                >
                                    Video Gallary
                                </NavLink>
                                <NavLink
                                    to={"/imba/design"}
                                    className="hover:text-purple-800 p-2 text-[19px]"
                                >
                                    3D Design
                                </NavLink>
                                <NavLink
                                    to={"/imba/about"}
                                    className="hover:text-purple-800 p-2 text-[19px]"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to={"/imba/price"}
                                    className="hover:text-purple-800 p-2 text-[19px]"
                                >
                                    Prices
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
