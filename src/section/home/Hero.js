"use client"
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
        <>
            <section className="pb-20 lg:pt-20 pt-10">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-lg-6 max-lg:justify-center flex-items-center">
                            <div className="max-sm:px-3 ">
                                <div className="xl:text-[65px] text-[32px] xs:text-[40px] sm:text-[50px] leading-[55px] sm:leading-[65px] xl:leading-[80px] poppins-700">
                                    <h2 className="text-[#444762]">
                                        Invest in
                                    </h2>
                                    <TypeAnimation
                                        sequence={[
                                            500,
                                            "FILMS",
                                            1000,
                                            "ART",
                                            1500,
                                            "SPORTS IP",
                                            2000,
                                            "OTT SERIES"
                                        ]}
                                        speed={1}
                                        className="text-[#725AEC] poppins-700"
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className="mt-5">
                                    <p className="text-[#313F58] my-2 mb-4"><span className="poppins-600 mr-2 text-2xl">DEMOCRATISING CONTENT IP INVESTMENTS</span><br/><span className="poppins-400 italic text-lg">Don't just Consume Content, Co-Own it</span></p>
                                    <p className="text-[#313F58] my-2"><span className="poppins-400 text-lg">Access Curated Projects across various categories of Content IP</span></p>
                                </div>
                                <div className="flex max-sm:justify-center max-sm:flex-col mt-10">
                                    <div className="">
                                        <a className="flex" href="https://play.google.com/store/apps/details?id=com.reallyy" target="_blank">
                                            <div className="text-[white] transition-all duration-300 hover:text-[#725AEC]  flex-items-center px-5 xs:px-8 py-2.5 xs:py-3.5 cursor-pointer rounded-md bg-[black] hover:bg-[white] hover:shadow-lg">
                                                <div>
                                                    <img alt="play-store" className="w-[32px]" src="/assets/img/svg/google-play.svg" />
                                                </div>
                                                <div className="ml-4">
                                                    <p className="poppins-400 mb-0 uppercase text-xs">Get it on</p>
                                                    <p className="poppins-500 max-xs:text-sm mt-0">Google Play</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sm:ml-3 max-sm:mt-3">
                                        <a className="flex" href="https://apps.apple.com/us/app/ryzer/id6448790250"  target="_blank">
                                            <div className="text-[white] transition-all duration-300 hover:text-[#725AEC]  flex-items-center px-5 xs:px-8 py-2.5 xs:py-3.5 cursor-pointer rounded-md bg-[black] hover:bg-[white] hover:shadow-lg">
                                                <div>
                                                    <FaApple className="text-[32px]" />
                                                </div>
                                                <div className="ml-4">
                                                    <p className="poppins-400 uppercase mb-0 text-xs">Download on the</p>
                                                    <p className="poppins-500 max-xs:text-sm mt-0">App Store</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center  mt-5">
                                    <div>
                                        <img alt="polygon" className="w-[110px]" src="/assets/img/png/polygon.png" />
                                    </div>
                                    <p className="text-[black] text-xs ml-4 poppins-400 my-0">
                                        A Blockchain based asset tokenization By Polygon ERC-20
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-11 max-lg:mt-10 flex-items-center">
                            <div className="flex-center">
                                <img alt="Ryzer - fractional ownership real estate in India" className="rz-hero-img" src="/assets/img/png/mobileApp.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
