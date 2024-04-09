const AboutHero = () => {
    return (
        <>
            <section className="bg-[#EDF7F8] py-[5rem]">
                <div className="bs-container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">We believe in the future of de-centralization</h1>
                            <p className="text-center poppins-400 text-sm xs:text-base mt-3 xs:mt-5 tracking-[0.7px] text-[#4A627E]">We are eliminating the barriers to invest-in, trade, and leverage exclusive real estate, private equity, and other real-world assets through decentralized finance (“DeFi”).</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[white] py-20">
                <div className="bs-container">
                    <div className="row justify-center items-center">
                        <div className="col-lg-6 col-md-10 col-11">
                            <div>
                                <img alt="commercial property real estate - Ryzer" className="rounded-[10px]" src="/assets/img/jpg/real-estate.jpeg" />
                            </div>
                        </div>
                        <div className="col-lg-6 max-lg:mt-10 col-md-10 col-11">
                            <div className="xl:pl-20 lg:pl-[1.5rem]">
                                <h2 className="text-[18px] xs:text-[20px] leading-[26px] xs:leading-[30px] md:leading-[34px] md:text-[25px] xl:leading-[42px] xl:text-[30px] poppins-600 text-[#45485F]">We’re on a mission to make real estate investing accessible to everyone.</h2>
                                <p className="text-[#464D65CC] mt-[1.5rem] text-[16px] md:text-[18px] sm:pr-[1rem] xl:pr-20 poppins-400">Real estate has always been one of the most sought-after asset classes for professional investors, but for the average person, real estate is intimidating and inaccessible. Ryzer was built to unlock greater access to the real estate market to everyone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center mt-20">
                        <div className="lg:col-12 col-xs-10 col-11">
                            <h2 className="text-[25px] xs:text-[30px] sm:text-[35px] md:text-[50px] poppins-700 text-[#45485F]">Our story</h2>
                        </div>
                    </div>
                    <div className="row mt-10 max-lg:justify-center items-center">
                        <div className="col-xxl-4 max-lg:order-2 max-lg:mt-10 col-xl-5 col-xs-10 col-11 col-lg-6">
                            <div>
                                <h3 className="text-[#0F5A64] text-[17px] poppins-700">Our mission</h3>
                                <p className="text-[#1D293F] mt-5 text-[14px] poppins-400">We’re driven by the radical idea that alternative assets can be simple and collaborative. By leveraging blockchain technology to increase operational efficiency in fractional ownership, lower the barriers of entry to investment, and unlock liquidity in previously illiquid assets.</p>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-[#0F5A64] text-[17px] poppins-700">Our vision</h3>
                                <p className="text-[#1D293F] mt-5 text-[14px] poppins-400">We’re on a mission to make real estate investing affordable, accessible, safe & secure with simplicity enabled.</p>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-xs-10 col-11 col-lg-5">
                            <div>
                                <img alt="Fractional investing - Ryzer" className="rounded-[10px]" src="/assets/img/jpg/mission.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHero

