import React from "react";

// import VidioSection from "../gallary/VidioSection";

// img from img folder
import heroImg from "../../img/hero-img.jpg";

// icon from react icon
import { BsBook } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { GiOnTarget } from "react-icons/gi";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

export default function Home() {
    return (
        <>
            <div className="hero">
                {/* hero bg img */}
                <div className="w-full overflow-hidden absolute bottom-0 max-sm:hidden">
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            fill: "#ff7",
                            width: "113%",
                            height: 206,
                            transform: "rotate(180deg) scaleX(-1)",
                        }}
                    >
                        <path
                            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                            opacity=".25"
                        />
                        <path
                            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                            opacity=".5"
                        />
                        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
                    </svg>
                </div>
                {/* hero bg end */}

                <div className="container  mx-auto xl:px-20 max-xl:px-0 h-full px-20 flex items-center justify-between max-md:flex-col max-md:justify-start  max-md:px-4 text-white">
                    <div className="-mt-8 max-md:-m-0 max-md:text-center">
                        <h1 className="text-[75px] mb-6 leading-[85px] font-medium   text-black max-lg:text-[45px] max-lg:leading-[65px] max-sm:text-[36px] max-sm:mb-2 max-md:text-center max-md:mb-7 dark:text-white">
                            {/* DASTURLASHNI <br /> QULAY{" "}
                           {" "}
                            <br /> O‘RGANING */}
                            Mutaxasislikni <br />{" "}
                            <span className="text-[#ffd700]">Biz bilan</span>{" "}
                            tez va <br /> oson o'rganing
                        </h1>
                        <p className="text-black dark:text-white max-md:mb-3 text-lg max-w-[500px]">
                            Ta'lim bizga diplomli ishsizlarni emas Kelajak
                            leaderlari va milliaderlarini kamol toptirishi kerak
                        </p>
                    </div>

                    {/* img */}
                    <div>
                        <img
                            src={heroImg}
                            className="h-[600px] max-w-[600px] w-full rounded-[15px] max-lg:h-[500px] max-md:h-[300px]"
                        />
                    </div>
                </div>
            </div>

            {/* why us */}
            <div className="whyUs pt-20 text-black dark:text-[#eee] mb-20">
                <div className="container  mx-auto xl:px-10 max-xl:px-0 h-full px-20 max-md:px-4">
                    <h2 className="mb-10 text-[32px] leading-[40px] font-bold">
                        Bizning afzalliklarimiz
                    </h2>

                    <ul className="grid grid-cols-2 gap-5  max-md:grid-cols-1">
                        <li className="flex gap-4 max-md:flex-col">
                            <div>
                                <BsBook className="text-[30px] " />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[30px] font-semibold mb-4">
                                    Onlayn akademiya
                                </h3>
                                <p className="text-[#607987] text-[14px] leading-[20px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus recusandae
                                    voluptatum facilis optio omnis nam labore
                                    sed deleniti exercitationem praesentium
                                    ratione voluptates in, vel voluptatem cumque
                                    neque at laboriosam magnam?
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4  max-md:flex-col">
                            <div>
                                <FiMonitor className="text-[30px]" />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[30px] font-semibold mb-4">
                                    O‘z ishining ustalari
                                </h3>
                                <p className="text-[#607987] text-[14px] leading-[20px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus recusandae
                                    voluptatum facilis optio omnis nam labore
                                    sed deleniti exercitationem praesentium
                                    ratione voluptates in, vel voluptatem cumque
                                    neque at laboriosam magnam?
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4  max-md:flex-col">
                            <div>
                                <AiFillStar className="text-[30px]" />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[30px] font-semibold mb-4">
                                    Shunchaki kurs emas
                                </h3>
                                <p className="text-[#607987] text-[14px] leading-[20px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus recusandae
                                    voluptatum facilis optio omnis nam labore
                                    sed deleniti exercitationem praesentium
                                    ratione voluptates in, vel voluptatem cumque
                                    neque at laboriosam magnam?
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4  max-md:flex-col">
                            <div>
                                <GiOnTarget className="text-[30px]" />
                            </div>
                            <div>
                                <h3 className="text-[20px] leading-[30px] font-semibold mb-4">
                                    Interaktiv darslar
                                </h3>
                                <p className="text-[#607987] text-[14px] leading-[20px]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusamus recusandae
                                    voluptatum facilis optio omnis nam labore
                                    sed deleniti exercitationem praesentium
                                    ratione voluptates in, vel voluptatem cumque
                                    neque at laboriosam magnam?
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Suggestions taklimlar */}
            <div>
                <div className="container mb-11  mx-auto xl:px-10 max-xl:px-0 h-full px-20 max-md:px-4">
                    <h2 className="text-[36px] leading-[43px] font-bold text-black dark:text-white mb-6">
                        Takliflar
                    </h2>
                    <ul className="grid grid-cols-3 gap-5  max-md:grid-cols-1">
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Frontend
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                Web Dastur, Murakkab SPA Loyiha, Foydalanuvchi
                                Interfeysi & API
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Backend
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                Ma'lumotlar bazasi, Struktura, Microservice,
                                Test
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mobile
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                IOS, Android, Dasturlar, Platforma, O'yin
                                loyihalar
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Community
                            </h3>
                            <p>
                                Savol, Javob, className="text-[16px]
                                leading-[24px]"Takliflar, Muloqot, Tanishuvlar
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Sun'iy Intelekt
                            </h3>
                            <p>
                                Model, TensorflowJS, className="text-[16px]
                                leading-[24px]" Segmentatsiya, ChatGPT
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Real Tajriba
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                StartUP loyiha, Interview, Hard Skill, Soft
                                Skill
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pb-10">
                <div className="container  mx-auto xl:px-10 max-xl:px-0 h-full px-20 max-md:px-4">
                    <h2 className="text-[36px] leading-[43px] font-bold text-black dark:text-white mb-6">
                        Mutaxasislik
                    </h2>
                    <ul className="grid grid-cols-3 gap-5  max-md:grid-cols-1">
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                Web Dastur, Murakkab SPA Loyiha, Foydalanuvchi
                                Interfeysi & API
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                Ma'lumotlar bazasi, Struktura, Microservice,
                                Test
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                IOS, Android, Dasturlar, Platforma, O'yin
                                loyihalar
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p>
                                Savol, Javob, className="text-[16px]
                                leading-[24px]"Takliflar, Muloqot, Tanishuvlar
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p>
                                Model, TensorflowJS, className="text-[16px]
                                leading-[24px]" Segmentatsiya, ChatGPT
                            </p>
                        </li>
                        <li className="px-[32px] py-5 shadow text-black dark:text-white dark:bg-[#2D3748]">
                            <BsFillCreditCard2FrontFill className="text-[35px] mb-2" />
                            <h3 className="text-[24px] leading-[36px] font-bold mb-3">
                                Mutaxasislik 1
                            </h3>
                            <p className="text-[16px] leading-[24px]">
                                StartUP loyiha, Interview, Hard Skill, Soft
                                Skill
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
