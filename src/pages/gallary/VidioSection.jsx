import React from "react";

// img
import GallaryImg from "../../img/gallary-1.jpg";

function VidioSection({ text = null, btn = null }) {
    return (
        <div className="pt-[100px] pb-12">
            <div className="container mx-auto xl:px-10 max-xl:px-0 max-md:px-4 text-white">
                <h2 className="text-center text-[48px] max-md:text-[29.1px] max-sm:text-[26.2px]  leading-[57.6px] font-light mb-2">
                    <span className="font-semibold">Video </span>
                    Gallary
                </h2>

                {/* line */}
                <div className="w-[100px] h-[3px] bg-[#411b7e] mx-auto"></div>
                <br />

                {text && (
                    <>
                        <p className="text-[16px] leading-[24px] text-center text-[#6c757d]">
                            Home /{" "}
                            <span className="text-white">Video Gallery</span>
                        </p>

                        <br />
                    </>
                )}

                <ul className="flex flex-wrap justify-center w-full">
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                    <li className="w-[300px] h-[180px] flex items-center bg-black m-1 rounded-md cursor-pointer duration-300 ease-in hover:scale-[1.05] hover:bg-[#411b7e]">
                        <div>
                            <img
                                src={GallaryImg}
                                alt=""
                                className="w-full opacity-50"
                            />
                            <h3 className="absolute translate-x-[20px] -translate-y-[60px]">
                                Bracha & Albert <br /> Wedding day
                            </h3>
                        </div>
                    </li>
                </ul>

                {/* btn */}
                {btn && (
                    <>
                        <br />
                        <div className="text-center">
                            <a
                                className="text-[19.2px] duration-200 mx-auto px-[30px] py-[10px] inline-block text-black hover:text-[#f5f5f5] hover:bg-[#411b7e] bg-white leading-[28.8px] font-semibold rounded-md"
                                href="#"
                            >
                                Load Mode
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default VidioSection;
