"use client";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io"
import { FaArrowRightLong } from "react-icons/fa6";
const Principle = () => {
    return (
        <section>
            <div className="bs-container">
                <div className="row justify-between">
                    <div className="col-xl-5 col-12 flex-center">
                        <div>
                            <div className="flex max-xl:justify-center mb-5">
                                <div className="bg-[#EDF3F7]  px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                                    OUR CORE PRINCIPLES
                                </div>
                            </div>
                            <h2 className="md:leading-[55px] xs:leading-[45px] leading-[32px]  max-xl:text-center text-[23px] xs:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">Don't just Consume Content. Co-Own it.</h2>
                            <p className="poppins-400 my-5 max-xl:text-center tracking-[0.7px] text-base sm:text-lg text-[#627C89]">Fandora is unlocking the potential in USD 300 Billion+ Content IP Market - and let you not just consume Content, but co-own it</p>
                            <div className="mt-8 flex max-xl:justify-center">
                                <div>
                                    <div className="flex-items-center  my-5">
                                        <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                            <IoMdCheckmark className="text-lg" />
                                        </div>
                                        <p className="mb-0 ml-4 poppins-500 ">
                                            Fully decentralised ready platform
                                        </p>
                                    </div>
                                    <div className="flex-items-center my-5">
                                        <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                            <IoMdCheckmark className="text-lg" />
                                        </div>
                                        <p className="mb-0 ml-4 poppins-500 ">
                                            Dedicated consensus DAO for each asset
                                        </p>
                                    </div>
                                    <div className="flex-items-center my-5">
                                        <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                            <IoMdCheckmark className="text-lg" />
                                        </div>
                                        <p className="mb-0 ml-4 poppins-500 ">
                                            SEBI approved Escrow management
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4 max-xl:flex max-xl:justify-center">
                                <Link href={'/faq'}>
                                    <button className="bg-[#52C1B9] text-[white] flex items-center px-7 xs:px-8 py-3 transition-all duration-300 hover:scale-105 rounded-md">
                                        <span className=" poppins-600 text-center mr-3 text-base xs:text-lg">Learn more</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 max-xl:mt-10 col-12">
                        <div className="row max-sm:px-4 max-sm:justify-center  gx-sm-5">
                            <div className="col-sm-6 col-xs-11 col-12">
                                <div className="bg-[white] cursor-pointer rounded-md flex-center  drop-shadow-lg hover:drop-shadow-2xl transition-all sm:hover:scale-110 duration-300 px-6 sm:px-8 py-[1.5rem] md:py-[2.5rem]">
                                    <div>
                                        <div className="flex justify-start items-center">
                                            <img alt="Underlying Revenue Share/IP Share" className="w-[68px] h-[68px]" src="/assets/img/svg/svgviewer-output.svg" />
                                        </div>
                                        <h3 className="mt-5 text-[#222222] poppins-500 text-[16px] sm:text-[18px]  xl:text-[20px]">
                                        Underlying Revenue Share/IP Share
                                        </h3>
                                        <p className="poppins-400 my-5  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                        Your fractions on Fandora gives you access to regular, pre-defined percentage of Revenue Share and/or IP share of every project
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-11 col-12 mt-10">
                                <div className="bg-[white] cursor-pointer rounded-md flex-center  drop-shadow-lg hover:drop-shadow-2xl transition-all sm:hover:scale-110 duration-300 px-6 sm:px-8 py-[1.5rem] md:py-[2.5rem]">
                                    <div>
                                        <div className="flex justify-start items-center">
                                            <img alt="Careful Curation and Strong Due-Diligence" className="w-[68px] h-[68px]" src="/assets/img/svg/ownership.svg" />
                                        </div>
                                        <h3 className="mt-5 text-[#222222] poppins-500 text-[16px] sm:text-[18px]  xl:text-[20px]">
                                            Careful Curation and Strong Due-Diligence
                                        </h3>
                                        <p className="poppins-400 my-5  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                        All projects listed on Fandora have gone through strenuous due diligence - and you can access all key documents on every project, which can help you make the right decision.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 max-sm:mt-10 col-xs-11 col-12">
                                <div className="bg-[white] cursor-pointer rounded-md flex-center  drop-shadow-lg hover:drop-shadow-2xl transition-all sm:hover:scale-110 duration-300 px-6 sm:px-8 py-[1.5rem] md:py-[2.5rem]">
                                    <div>
                                        <div className="flex justify-start items-center">
                                            <img alt="Escrow backed funds flow" className="w-[68px] h-[68px]" src="/assets/img/svg/return.svg" />
                                        </div>
                                        <h3 className="mt-5 text-[#222222] poppins-500 text-[16px] sm:text-[18px]  xl:text-[20px]">
                                            Escrow backed funds flow
                                        </h3>
                                        <p className="poppins-400 my-5  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                        All projects will have individual escrow accounts - bringing transparency in fund inflow and revenue flow for all investors
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-11 col-12 mt-10">
                                <div className="bg-[white] cursor-pointer rounded-md flex-center  drop-shadow-lg hover:drop-shadow-2xl transition-all sm:hover:scale-110 duration-300 px-6 sm:px-8 py-[1.5rem] md:py-[2.5rem]">
                                    <div>
                                        <div className="flex justify-start items-center">
                                            <img alt="Convinience" className="w-[68px] h-[68px]" src="/assets/img/svg/management.svg" />
                                        </div>
                                        <h3 className="mt-5 text-[#222222] poppins-500 text-[16px] sm:text-[18px]  xl:text-[20px]">
                                            Convinience
                                        </h3>
                                        <p className="poppins-400 my-5  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                        ou can mark your committment with just 20% of required funds and pay rest later once all commitments close
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Principle
