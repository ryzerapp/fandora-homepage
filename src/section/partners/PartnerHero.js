import React from 'react'

const PartnerHero = () => {
    return (
        <section className='partner-hero-section py-20'>
            <div className='bs-container sm:py-10 md:py-20'>
                <div className='row justify-center'>
                    <div className='col-11'>
                        <div className='row max-lg:items-center justify-between'>
                            <div className='col-lg-5 col-md-6 col-12'>
                                <div className='max-md:flex max-md:justify-center'>
                                    <img alt='fractional owner - Ryzer' className='max-md:w-[80%] xl:w-[90%] shadow1' src='/assets/img/png/person.png' />
                                </div>
                            </div>
                            <div className='col-md-6 max-md:mt-10 col-12'>
                                <div className='max-md:pl-0 max-lg:pl-5'>
                                    <p className='poppins-700 max-md:text-center text-sm text-[white] uppercase'>CHANNEL PARTNER'S PORTAL</p>
                                    <h1 className='poppins-700 leading-[35px] xs:leading-[42px] md:leading-[40px] max-md:text-center lg:leading-[45px] mt-5 xs:mt-8 md:mt-5 xl:leading-[60px] xxl:leading-[78px] xl:mt-8 text-[white] text-[22px] xs:text-[30px] lg:text-[35px] xl:text-[50px] xxl:text-[68px]'>Sell One Sqft at  <br className='max-md:hidden' /> a time and get <br className='max-md:hidden' /> paid instantly</h1>
                                    <p className='text-[#FFFFFFB3] max-md:text-center poppins-500 mt-5 xs:mt-8 md:mt-5 text-[16px] lg:text-[18px] xl:mt-10'>No more waiting for commissions from builders and investors. Embrace the shared partner model.</p>
                                    <div className='max-md:flex max-md:justify-center'>
                                        <a href='https://partners.ryzer.app/auth/login' target='_blank'>
                                            <button className="poppins-600 mt-5 xs:mt-8 md:mt-5 xl:mt-10 text-[black] bg-[white] transition-all duration-300 hover:bg-[black] hover:text-[white] rounded-[100px] px-7 md:px-10 py-3 xs:py-4 lg:py-5 ">Sign up now</button>
                                        </a>
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

export default PartnerHero
