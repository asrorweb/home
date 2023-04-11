import React from "react";

import VidioSection from "../gallary/VidioSection";

// img
import insaImg1 from "../../img/instapost.jpg";

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
        </>
    );
}
