import { assets } from "@/assets/data/feature";
import { IoMdCheckmark } from "react-icons/io";
const ExploreAsset = () => {
    return (
        <>
            <section>
                <div className="bs-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">Explore Diversified Content IP Portfolio</h2>
                            <p className="text-center poppins-500 mt-3 text-sm xs:text-base xs:mt-2 tracking-[0.7px] text-[#627C89]">Find properties by location and asset type across India & enjoy your consistent cashflows & ROI.</p>
                        </div>
                    </div>
                    <div className="row pt-10 pb-20">
                        {
                            assets.map((item, index) => (
                                <div key={index} className="col-lg mt-10 col-md-4 col-xs-6 col-12 flex-center">
                                    <div>
                                        <div className="flex-center">
                                            <img alt={item.name} className="w-[65px] h-[65px] sm:w-[74px] sm:h-[74px]" src={item.icon} />
                                        </div>
                                        <h3 className="text-center xxl:px-10 mt-2 text-[#222222] poppins-500 text-[16px] sm:text-[18px]  xl:text-[20px]">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="row justify-center">
                        <div className="col-xl-10 col-12">
                            <div className="row justify-center">
                                <div className="col-lg-6 col-9">
                                    <div className="flex-center">
                                        <img alt="Fractional real estate investing - Fandora" src="/assets/img/png/chat.png" />
                                    </div>
                                </div>
                                <div className="col-lg-6 max-lg:mt-10 flex-items-center">
                                    <div>
                                        <h1 className="md:leading-[55px] xs:leading-[45px] leading-[32px]  max-lg:text-center text-[23px] xs:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">PARTICIPATE IN FRACTIONAL UNITS OF CURATED CONTENT IP PROJECTS</h1>
                                        <p className="poppins-400 my-5 max-lg:text-center tracking-[0.7px] text-base sm:text-lg text-[#627C89]">Get access to some of most exciting & promising Content IP projects - where you get an opportunity to not just multiply returns, but also participate in the various creative decisions on the project</p>
                                        <div className="mt-8 flex max-lg:justify-center">
                                            <div>
                                                <div className="flex-items-center  my-3">
                                                    <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                                        <IoMdCheckmark className="text-lg" />
                                                    </div>
                                                    <p className="mb-0 ml-4 poppins-500 ">
                                                    Explore curated content IP projects across multiple content classes
                                                    </p>
                                                </div>
                                                <div className="flex-items-center my-3">
                                                    <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                                        <IoMdCheckmark className="text-lg" />
                                                    </div>
                                                    <p className="mb-0 ml-4 poppins-500 ">
                                                    Effortlessly complete KYC and Invest.
                                                    </p>
                                                </div>
                                                <div className="flex-items-center my-3">
                                                    <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                                        <IoMdCheckmark className="text-lg" />
                                                    </div>
                                                    <p className="mb-0 ml-4 poppins-500 ">
                                                    Automated returns and multiple exit opportunities
                                                    </p>
                                                </div>
                                                <div className="flex-items-center my-3">
                                                    <div className="text-[#52C1B9] hover:text-[white] transition-all hover:bg-[#52C1B9] w-[30px] h-[30px] flex-center rounded-[50%] bg-[#F0F4FE]">
                                                        <IoMdCheckmark className="text-lg" />
                                                    </div>
                                                    <p className="mb-0 ml-4 poppins-500 ">
                                                    Become a part of project governance
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreAsset

{/* <div className="col-lg mt-10  col-md-4 col-6 flex-center">
                            <div>
                                <div className="flex-center">
                                    <img className="w-[74px] h-[74px]" src="/assets/img/svg/developement-land.svg" />
                                </div>
                                <p className="text-center xxl:px-10 mt-2 text-[#222222] poppins-500 text-[18px] xl:text-[20px] ">
                                    Developed
                                    Land Plots
                                </p>
                            </div>
                        </div>
                        <div className="col-lg mt-10 col-md-4 col-6 flex-center">
                            <div>
                                <div className="flex-center">
                                    <img className="w-[74px] h-[74px]" src="/assets/img/png/Office.png" />
                                </div>
                                <p className="text-center xxl:px-10 mt-2 text-[#222222] poppins-500 text-[18px] xl:text-[20px] ">
                                    Managed
                                    Offices
                                </p>
                            </div>
                        </div>
                        <div className="col-lg mt-10 col-md-4 col-6 flex-center">
                            <div>
                                <div className="flex-center">
                                    <img className="w-[74px] h-[74px]" src="/assets/img/png/Hotel.png" />
                                </div>
                                <p className="text-center xxl:px-10 mt-2 text-[#222222] poppins-500 text-[18px] xl:text-[20px] ">
                                    Hotels &
                                    Suit Rooms
                                </p>
                            </div>
                        </div>
                        <div className="col-lg mt-10 col-md-4 col-6 flex-center">
                            <div>
                                <div className="flex-center">
                                    <img className="w-[74px] h-[74px]" src="/assets/img/png/PG.png" />
                                </div>
                                <p className="text-center xxl:px-10 mt-2 text-[#222222] poppins-500 text-[18px] xl:text-[20px]">
                                    PG & Co-living
                                    Spaces
                                </p>
                            </div>
                        </div> */}