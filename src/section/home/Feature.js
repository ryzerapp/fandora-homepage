"use client"
import { useState } from "react";
import { FaRegCompass, FaAward, FaWallet, FaRegSmile } from "react-icons/fa";
const Feature = () => {
    const [img,setImg]=useState("Explore-min.png");
    return (
        <section className="py-20 mt-10">
            <div className="bs-container">
                <div className="row justify-center">
                    <div className="col-11">
                        <div className="row">
                            <div className="col-xxl-5 col-lg-6">
                                <div>
                                    <div onMouseOver={()=>setImg('Explore-min.png')}  className="flex px-10 my-4 py-2 xxl:py-5 hover:shadow-md rounded-md cursor-pointer">
                                        <div>
                                            <FaRegCompass className="text-[#52C1B9] text-[40px]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-[#252323] poppins-600 text-base">Diversify by buying asset Tokens</h3>
                                            <p className="text-[#828282] poppins-400 text-sm mt-2 xl:mt-4">An asset Token is equivalent to a square foot or square yard of a property. Buy shares of carefully curated properties across India.</p>
                                        </div>
                                    </div>
                                    <div onMouseOver={()=>setImg('track-min.png')} className="flex px-10 py-2 xxl:py-5 my-4 hover:shadow-md rounded-md cursor-pointer">
                                        <div>
                                            <FaAward className="text-[#52C1B9] text-[40px]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-[#252323] poppins-600 text-base">Track your asset portfolio</h3>
                                            <p className="text-[#828282] poppins-400 text-sm mt-2 xl:mt-4">Manage your growing property portfolio with a comprehensive breakdown of your account value, history, and growth trajectory.</p>
                                        </div>
                                    </div>
                                    <div onMouseOver={()=>setImg('wallet-min.png')} className="flex px-10 py-2 xxl:py-5 my-4 hover:shadow-md rounded-md cursor-pointer">
                                        <div>
                                            <FaWallet className="text-[#52C1B9] text-[40px]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-[#252323] poppins-600 text-base">Dedicated wallet support</h3>
                                            <p className="text-[#828282] poppins-400 text-sm mt-2 xl:mt-4">A dedicated wallet helps you by providing a convenient and secure way to store and transfer funds for investing in assets.</p>
                                        </div>
                                    </div>
                                    <div onMouseOver={()=>setImg('resell-min.png')} className="flex px-10 py-2 xxl:py-5 my-4 hover:shadow-md rounded-md cursor-pointer">
                                        <div>
                                            <FaRegSmile className="text-[#52C1B9] text-[40px]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-[#252323] poppins-600 text-base">Re-sell your asset Tokens</h3>
                                            <p className="text-[#828282] poppins-400 text-sm mt-2 xl:mt-4">Real estate investment typically comes with long-run investment. Fandora provides you an opportunity to raise a request to re-sell your tokens anytime, anywhere.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-lg-6 max-lg:mt-10 px-20">
                                <div className="rz-feature-image-circle flex-center lg:h-[75%] xl:h-[90%] xxl:h-full rounded-[50%]">
                                    <img className="w-[60%]" alt="Real Estate Investment - RYZER" src={`/assets/img/png/${img}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
