"use client"
import Accordian2 from "@/components/Accordian2"
import { Accordion } from "@szhsin/react-accordion"

const Faqs = () => {
    return (
        <>
            <section className="py-20">
                <div className="bs-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="lg:text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row mt-10 gx-lg-5">
                        <div className="col-lg-6">
                            <div>
                                <Accordion transition transitionTimeout={500}>
                                    <Accordian2 header={'What is Tokenised fractional ownership?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Tokenised Fractional ownership in real estate describes an investment process wherein a number of investors join together to invest & buy a real estate asset so that all of them can benefit from a share of the income  that the asset generates and an appreciation in the value of the property over a period of time.


                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                And it all runs on blockchain ledger from start to exit of your investment, This would bring outmost transparency & crystal clear audit on all financial activities, rental distributions, share holding & voting rights etc...
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'What is Ryzer APP?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Ryzer is a blockchain tokenization investment platform that makes it easy to start investing in real world assets and diversifying your investment portfolio—just like investing in a stocks or mutual funds. With as little as Rs. 5000, first-time investors can begin building their real estate investment portfolio by leveraging the power of blockchain technology which helps select and secure high-growth Open land, residential, commercial, and on-going development assets from the Ryzer platform.


                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Enjoy industry-leading flexibility with shorter time horizons, a great mix of high-growth assets, and stress-free exit capabilities.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Who owns properties listed on your Ryzer?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                That's you, Yes you and your share holders hold a property by owning a portion of shares in an holding LLP that was specifically formed.


                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Ryzer facilitates discovery of investment opportunities and provides you with online accessibility & experience that enable you to invest, manage and exit from your investment in a trusted and transparent environment with designated LLP that was formed when a property listed, Once you invested, you become a shareholder in that LLP by owning a portion of shares.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'What is a security token?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Tokens are digital assets created on a blockchain. Each blockchain has a native coin, for instance, Bitcoin for the Bitcoin blockchain and ether for the Ethereum blockchain. Assets built on existing blockchains are referred to as tokens. In Ryzer's platform use-case, the tokens will represent physical real estate assets and this ownership will be recorded on top of the Ethereum blockchain. All transactions of these tokens will also be recorded in this immutable way.


                                            </p>

                                        </div>
                                    </Accordian2>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <Accordion transition transitionTimeout={500}>
                                    <Accordian2 header={'What kind of returns can I look forward to?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Normally annualised returns could vary from 14-20% based on the opportunity. While these returns are not guaranteed, they are more or less predictable. Every opportunity comes with its unique risk return profile and investors are advised to evaluate each one of the them based on their own investment goals and risk-appetite.


                                            </p>

                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'How do I make returns by holding asset tokens?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                You can make returns with Asset tokens in two ways
                                            </p>
                                            <div className="pl-5 pt-5">
                                                <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                    1.The sale of the asset you’ve invested in and its monthly rental income.<br />
                                                    2.When an asset is sold, any appreciation is paid back to investors in addition to their investment principal.
                                                </p>
                                            </div>

                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Who is responsible for maintaining the property?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                For each asset listed on the Ryzer Platform, a Special Purpose Vehicle (SPV) is created in which funds are raised to purchase, own and manage the property. Your investment shall be towards subscription of the shares and compulsorily convertible debentures of the SPV that holds the property and represents your fractional investment.


                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Ryzer will provide asset management services to the SPV and undertake accounting, secretarial, reporting, leasing, maintenance and other operational aspects under the asset management services contract with the SPV.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Why does real estate need security tokenisation?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                We at Ryzer believe that all real estate benefits from tokenization for the following reasons:
                                            </p>
                                            <div className="pl-5 pt-5">
                                                <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                    1. Creates the opportunity for a marketplace to buy, sell, or trade tokens of real estate.<br />
                                                    2. Reduces/Eliminates intermediaries.<br />
                                                    3. Increases liquidity of traditionally illiquid assets. <br />
                                                    4. Increases access to fractional ownership.<br />
                                                    5. Decentralisation creates trust and security. <br />
                                                    6. Allows real estate transactions to truly become peer-to-peer. <br />
                                                    7. Allows investors to diversify their risk.
                                                </p>
                                            </div>

                                        </div>
                                    </Accordian2>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
