import React from "react";

import VidioSection from "../gallary/VidioSection";

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="home__hero-bg bg-[url('./src/img/home-hero-bg.jpg')] bg-cover bg-no-repeat bg-center h-full">
                    <div className="container mx-auto xl:px-10 max-xl:px-0 h-full flex flex-col justify-center max-md:px-4 text-center text-white">
                        <h3 className="max-w-[600px] mx-auto text-[19px] my-5 max-md:max-w-none max-md:px-[30px] max-md:mt-0 max-md:mb-5 max-md:text-[16px] max-md:leading-[19.2px]">
                            Looking for FAST, CREATIVE, and CINEMATIC VIDEO
                            EDITING? <br />
                            Search no more! This is the right place for you!
                        </h3>
                        <h1 className="text-[64px] font-semibold leading-[76.8px] my-5 max-md:text-[32px] max-md:leading-[38.4px] max-md:mt-0 max-md:mb-[30px]">
                            We are PROFESSIONAL <br /> VIDEO and PHOTO editing
                            team
                        </h1>
                        <a
                            className="text-[19.2px] mx-auto px-[30px] py-[10px] text-black bg-white leading-[28.8px] font-semibold rounded-md"
                            href="#"
                        >
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>

            <VidioSection text={false} btn={true} />

            {/* about section */}
            <div className="pt-[100px] bg-[url('./src/img/home-hero-bg.jpg')] bg-cover bg-top">
                <div className="container mx-auto xl:px-10 max-xl:px-0 max-md:p-4">
                    <div className="p-12 max-md:p-0 text-[#6C757D]">
                        <h2 className="text-[40px] mb-2  leading-[48px] max-md:text-[30px]">
                            About US
                        </h2>
                        <hr className="my-4 opacity-25" />

                        {/* content */}
                        <div className="indent-[30px] italic text-[20px] max-md:text-[13px] leading-[30px] max-md:leading-[19.5px] text-[#F8F9FA]">
                            <p className="mb-4">
                                Our team has more than 6-7 years of video and
                                photo editing experience, we offer the following
                                services: Video editing of Wedding, Barmitzvah,
                                Batmitzvah and Birthday events will include full
                                video, highlight, feature film, social films.
                            </p>
                            <p className="mb-4">
                                Quality is our main goal, if you are looking for
                                a quality and fast video editing team, do not
                                hesitate to contact us, we are pleased to work
                                with you
                            </p>
                            <p className="text-right font-semibold">
                                Respectfully IMBA team!
                            </p>
                        </div>

                        <div className="my-12 flex flex-wrap justify-evenly max-md:gap-4">
                            <div className="text-white p-4 w-[200px] bg-gradient-to-t duration-500 from-[#2e2e2e02] to-[#0a443ad0] hover:bg-gradient-to-r cursor-pointer hover:from-[#69ffde6c] hover:to-[#44ffd6] hover:text-[#0b2e26] hover:scale-[1.2]">
                                <h3 className="text-[20px] font-semibold leading-[24px] mb-2">
                                    Full Film
                                </h3>
                                <p className="text-[12.8px] leading-[19.2px] mb-4">
                                    1-3 Hours
                                </p>
                            </div>
                            <div className="text-white p-4 w-[200px] bg-gradient-to-t duration-500 from-[#2e2e2e02] to-[#0a443ad0] hover:bg-gradient-to-r cursor-pointer hover:from-[#69ffde6c] hover:to-[#44ffd6] hover:text-[#0b2e26] hover:scale-[1.2]">
                                <h3 className="text-[20px] font-semibold leading-[24px] mb-2">
                                    Highlight
                                </h3>
                                <p className="text-[12.8px] leading-[19.2px] mb-4">
                                    5-7 Minutes
                                </p>
                            </div>
                            <div className="text-white p-4 w-[200px] bg-gradient-to-t duration-500 from-[#2e2e2e02] to-[#0a443ad0] hover:bg-gradient-to-r cursor-pointer hover:from-[#69ffde6c] hover:to-[#44ffd6] hover:text-[#0b2e26] hover:scale-[1.2]">
                                <h3 className="text-[20px] font-semibold leading-[24px] mb-2">
                                    Social Film
                                </h3>
                                <p className="text-[12.8px] leading-[19.2px] mb-4">
                                    1-2 Minutes
                                </p>
                            </div>
                            <div className="text-white p-4 w-[200px] bg-gradient-to-t duration-500 from-[#2e2e2e02] to-[#0a443ad0] hover:bg-gradient-to-r cursor-pointer hover:from-[#69ffde6c] hover:to-[#44ffd6] hover:text-[#0b2e26] hover:scale-[1.2]">
                                <h3 className="text-[20px] font-semibold leading-[24px] mb-2">
                                    Feature Film
                                </h3>
                                <p className="text-[12.8px] leading-[19.2px] mb-4">
                                    10-30 Minutes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* instagram post section */}
            <div className="mt-[100px] mb-12">
                <div className="container mx-auto xl:px-10 max-xl:px-0 max-md:p-4">
                    <h2 className="text-white text-center text-[48px] max-md:text-[29.1px] max-sm:text-[26.2px]  leading-[57.6px] font-light mb-2">
                        <span className="font-semibold">Instagram</span>
                        Posts
                    </h2>

                    {/* line */}
                    <div className="w-[100px] h-[3px] bg-[#411b7e] mx-auto"></div>
                    <br />

                    <ul className="flex justify-center gap-5 flex-wrap mt-6">
                        <li className="w-[300px] duration-200 hover:scale-[1.1]">
                            <img
                                src="./src/img/instapost.jpg"
                                alt="img"
                                className="w-full rounded-[24px]"
                            />
                        </li>
                        <li className="w-[300px] duration-200 hover:scale-[1.1]">
                            <img
                                src="./src/img/instapost.jpg"
                                alt="img"
                                className="w-full rounded-[24px]"
                            />
                        </li>
                        <li className="w-[300px] duration-200 hover:scale-[1.1]">
                            <img
                                src="./src/img/instapost.jpg"
                                alt="img"
                                className="w-full rounded-[24px]"
                            />
                        </li>
                        <li className="w-[300px] duration-200 hover:scale-[1.1]">
                            <img
                                src="./src/img/instapost.jpg"
                                alt="img"
                                className="w-full rounded-[24px]"
                            />
                        </li>
                    </ul>

                    {/* btn */}
                    <br />
                    <div className="text-center">
                        <a
                            className="text-[19.2px] duration-200  mx-auto px-[30px] py-[10px] inline-block text-black hover:text-[#f5f5f5] hover:bg-[#411b7e] bg-white leading-[28.8px] font-semibold rounded-md"
                            href="#"
                        >
                            Contact us via Instagram
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
