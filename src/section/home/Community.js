"use client";

import { communityFaq } from "@/assets/data/accordian";
import Accordian1 from "@/components/Accordian1";
import { Accordion } from "@szhsin/react-accordion";

const Community = () => {
    return (
        <>
            <section className="py-20">
                <div className="bs-container">
                    <div className="row justify-center lg:justify-between">
                        <div className="col-lg-6 col-10">
                            <div className="flex-center">
                                <img alt="fractional owner - Fandora" className="rz-hero-img" src="/assets/img/png/community.png" />
                            </div>
                        </div>
                        <div className="col-xl-5 max-lg:mt-20 col-lg-6 col-12 flex items-center">
                            <div>
                                <div className="flex max-xl:justify-center mb-5">
                                    <div className="bg-[#EDF3F7] uppercase  px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                                        DECENTRALIZED DAO COMMUNITY
                                    </div>
                                </div>
                                <h2 className="md:leading-[55px] xs:leading-[45px] leading-[32px]  max-lg:text-center  text-[23px] xs:text-[26px] sm:text-[30px] md:text-[35px] xl:text-[40px] poppins-700 text-[#45485F]">Be the barrier buster by buying together</h2>
                                <div className="sm:pl-5 pt-5 lg:pt-10">
                                    <Accordion transition transitionTimeout={300}>
                                        {
                                            communityFaq.map((item, index) => (
                                                <Accordian1 key={index} header={item.name}>
                                                    <div className="pl-8 pr-6">
                                                        <p className="poppins-400 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{item.content}</p>
                                                    </div>
                                                </Accordian1>
                                            ))
                                        }
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Community
