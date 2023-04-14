import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// id
import { v4 as uuidv4 } from "uuid";

// my component
import Buttons from "../buttons/Buttons";

// react icons
import { CiDark } from "react-icons/ci";
import { BiSun } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose, AiOutlineRight } from "react-icons/ai";

// data
import { navList } from "../../../data/db";

function Nav() {
    const [mobileBtnClick, setMobileBtnClick] = useState(false);
    const [dark, setDark] = useState(false);
    const [selectedNav, setSelectedNav] = useState(null);

    const toggleNav = (i) => {
        if (i == selectedNav) {
            return setSelectedNav(null);
        }

        setSelectedNav(i);
    };

    useEffect(() => {
        setDark(
            localStorage.getItem("dark")
                ? JSON.parse(localStorage.getItem("dark"))
                : false
        );
    }, []);

    const htmldoc = document.documentElement;

    if (dark) {
        htmldoc.classList.add("dark");
    } else {
        htmldoc.classList.remove("dark");
    }

    return (
        <header className="header flex z-[900] items-center bg-[#F7FAFC] dark:bg-[#171923] fixed top-0 left-0 right-0">
            <nav className="w-full">
                <div className="container mx-auto xl:px-10 max-xl:px-0 max-md:px-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {/* mobile menu open btn */}
                        <button
                            onClick={() => {
                                setMobileBtnClick(!mobileBtnClick);
                            }}
                            className="w-10 h-10 flex text-white rounded-[40px] bg-[#1f1f1f] dark:bg-white dark:text-black items-center justify-center"
                        >
                            <AiOutlineMenu />
                        </button>
                        <Link to={"/"} className="text-4xl text-white">
                            <span className="text-[#ffd700] text-5xl font-semibold max-sm:text-4xl">
                                Gold
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* dark light mode */}
                        <div
                            onClick={() => {
                                setDark(!dark);
                                localStorage.setItem(
                                    "dark",
                                    JSON.stringify(!dark)
                                );
                            }}
                            className="flex items-center mr-4 max-sm:mr-0"
                        >
                            {dark && (
                                <CiDark className="cursor-pointer text-[30px] text-white" />
                            )}
                            {!dark && (
                                <BiSun className="cursor-pointer text-[30px]" />
                            )}
                        </div>

                        {/* sign in sign out */}
                        <Buttons text={"Kirish"} direction={"/login"} />
                    </div>

                    {/*  mobile menu navigation box*/}
                    <div
                        className={
                            mobileBtnClick
                                ? "absolute z-[1000] top-[100px] max-md:top-[80px] left-0 w-[350px] max-sm:w-[70%]  h-screen bg-[#222D32]  dark:bg-[#171923]  text-white translate-x-0 duration-[300ms]"
                                : "absolute z-[1000] top-[100px] max-md:top-[80px] left-0 w-[350px] max-sm:w-[70%]  h-screen bg-[#222D32]  dark:bg-[#292B34] text-white -translate-x-full duration-[300ms]"
                        }
                    >
                        <div>
                            {/* mobile menu box bottom */}
                            <ul className="flex flex-col text-black  dark:text-white ">
                                {navList.map((data, index) => {
                                    return (
                                        <li key={uuidv4()}>
                                            <span
                                                onClick={() => toggleNav(index)}
                                                className="flex px-4 border border-[#13141b] dark:hover:bg-[#13141b] items-center justify-between cursor-pointer p-2 shadow text-white bg-[#222D32] dark:bg-[#171923]"
                                            >
                                                <span className="text-[18px] leading-[24px]">
                                                    {data.title}
                                                </span>
                                                <span>
                                                    <AiOutlineRight
                                                        className={
                                                            selectedNav == index
                                                                ? "rotate-[90deg] duration-500"
                                                                : "rotate-[0] duration-500"
                                                        }
                                                    />
                                                </span>
                                            </span>
                                            <ul
                                                className={
                                                    selectedNav == index
                                                        ? "px-4 py-3 flex flex-col gap-2 h-auto max-h-[9999px] transition-all  duration-500 ease-[cubic-bezier(1,0,1,0)]  bg-[#2C3B41] text-white dark:bg-[#353741]  text-[16px] leading-[25px] max-[478px]:text-[15px] max-[478px]:leading-[20px]"
                                                        : "flex flex-col gap-2 overflow-hidden transition-all max-h-0 duration-500 ease-[cubic-bezier(0,1,0,1)]  bg-[#2C3B41] text-white dark:bg-[#353741]  text-[16px]   leading-[25px] max-[478px]:text-[15px] max-[478px]:leading-[20px]"
                                                }
                                            >
                                                {data.itmes.map((itme) => {
                                                    return (
                                                        <Link
                                                            key={uuidv4()}
                                                            className="cursor-pointer hover:opacity-80 text-[#8aa4af]"
                                                        >
                                                            {itme}
                                                        </Link>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
