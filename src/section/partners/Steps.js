import { FaChevronRight } from "react-icons/fa6";
const Steps = () => {
    return (
        <section className="py-20">
            <div className="bs-container">

                <div className="row justify-center">
                    <div className="col-12 flex justify-center">
                        <div className="bg-[#EDF3F7] uppercase text-center  px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                            FOR CHANNEL PARTNERS
                        </div>
                    </div>
                    <div className="col-12 mt-8">
                        <h2 className="partner-text text-center xs:leading-[50px] sm:leading-[65px] lg:leading-[80px] xl:leading-[90px] poppins-700 text-[30px] xs:text-[35px] sm:text-[50px] lg:text-[64px] xl:text-[74px]">Close more deals <br /> faster & better</h2>
                    </div>
                </div>
               <div className="max-lg:hidden">
               <div className="row  mt-20 justify-center">
                    <div className="col-xxl-10 col-12">
                        <div className="row justify-between">
                            <div className="col-xl-3 col-4 ">
                                <div className="flex  justify-between">
                                    <div className="">
                                        <div className="flex justify-center">
                                            <div className="bg-[white] partner-step-wrapper  transition-all  duration-500 flex justify-center rounded-[100%] items-center w-[94px] h-[94px] ">
                                                <h3 className="text-[30px] partner-step poppins-800 text-[black]">1</h3>
                                            </div>
                                        </div>
                                        <p className="text-[#112446] mt-10 text-center poppins-500">Signup & select assets</p>
                                    </div>
                                    <div className="pt-5">
                                        <FaChevronRight className="text-[#627c89] text-[20px]"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-4 ">
                                <div className="flex  justify-between">
                                    <div className="">
                                        <div className="flex justify-center">
                                            <div className="bg-[white] partner-step-wrapper  transition-all  duration-500 flex justify-center rounded-[100%] items-center w-[94px] h-[94px] ">
                                                <h3 className="text-[30px] partner-step poppins-800 text-[black]">2</h3>
                                            </div>
                                        </div>
                                        <p className="text-[#112446] mt-10 text-center poppins-500">Sell fractional Units/Tokens</p>
                                    </div>
                                    <div className="pt-5">
                                        <FaChevronRight className="text-[#627c89] text-[20px]"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-4">
                                <div className="flex  justify-end">
                                    <div className="">
                                        <div className="flex justify-center">
                                            <div className="bg-[white] partner-step-wrapper  transition-all  duration-500 flex justify-center rounded-[100%] items-center w-[94px] h-[94px] ">
                                                <h3 className="text-[30px] partner-step poppins-800 text-[black]">3</h3>
                                            </div>
                                        </div>
                                        <p className="text-[#112446] mt-10 text-center poppins-500">Earn instant commission</p>
                                    </div>
                                    
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

export default Steps
