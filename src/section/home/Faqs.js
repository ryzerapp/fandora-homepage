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
                                    <Accordian2 header={'What is Tokenised fractional co-ownership?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            Tokenised Fractional Co-Ownership is an investment process, where the total funding amount required for a project - is broekn down to certain subparts and each part is then invested/co-owned by an investor.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            These co-owners then also get entitled to project returns in a prorata basis. With Fandora, these fractional investments are further linked to blockchain powered 'Tokens' - wherein the token establishes your co-ownrship on the underlying asset, and since these are based on digital wallets - you can leverage the 'Tokens' (as per prevailing regulations) by either lending them, fragmenting them, liquidating them instantly on an exchange or a platform, stake them on Defi pools and other emerging benefits.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'What is Fandora?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            FANDORA is Content IP Co-Investment & Tokenisation platform - which bridges curated content IP projects with eligible investors - thus unlocking the potential in USD 300 Billion Content IP Market.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            FANDORA enables:
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            <ul className="list-disc list-inside">
                                                <li>Giving access to curated, high growth potential multi-genre content IP projects;</li>
                                                <li>Transparent investment and project execution;</li>
                                                <li>Larger freedom and transparency to creators - who now can have better control on their creation as well as monetisation</li>
                                                <li>Opportunity to not just participate, but even involve in key decisions on particular Content IP</li>
                                                <li>Becoming part of exclusive community of Content Co-Owners</li>
                                            </ul>
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Who owns projects listed on your Fandora?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            FANDORA carefully curates projects - and each roject is lead by respective Project Owner.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Projects are curated basis multiple factors like team credibility, past experiences, monetisation potential, budgets efficacy etc.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            Each listed project has clear & transparent commercial terms - including required budgets, share in project revenues and IP and other deliverables
                                            </p>
                                        </div>
                                    </Accordian2>
                                    {/* <Accordian2 className='mt-4' header={'What is a security token?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                Tokens are digital assets created on a blockchain. Each blockchain has a native coin, for instance, Bitcoin for the Bitcoin blockchain and ether for the Ethereum blockchain. Assets built on existing blockchains are referred to as tokens. In Fandora's platform use-case, the tokens will represent physical real estate assets and this ownership will be recorded on top of the Ethereum blockchain. All transactions of these tokens will also be recorded in this immutable way.


                                            </p>

                                        </div>
                                    </Accordian2> */}
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <Accordion transition transitionTimeout={500}>
                                    <Accordian2 header={'What kind of returns can I look forward to?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            On an average, Content IP projects are expected to deliver 15-30% IRR over a period of 12-18 months. However, Content IP is a highly risky asset class and kindly exercise your discretion while making any investment decision. Kindly refer to detailed risks & mitigations while taking any call.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'How do I make returns by holding Fandora tokens?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            Following are the ways that holding FANDORA tokens can help you:
                                            </p>
                                            <div className="pl-5 pt-5">
                                                <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                                    1.Acess to generic project returns - as indicated under specific projects.<br />
                                                    2.Exiting partially or fully after lock in period - exchanging tokens through the platform/exchange.
                                                    3.Seeking returns through other token mechanics - such as lending, fragmenting, staking, accessing DeFi pools etc.
                                                </p>
                                            </div>

                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Who is responsible for project execution?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            FANDORA would apply its diligence and expertise till the time project gets exited and investors are returned their capital and projected returns - subject to various risks and other industry challenges that the project may be exposed to.
                                            </p>
                                        </div>
                                    </Accordian2>
                                    <Accordian2 className='mt-4' header={'Why do Content IP requires tokenisation?'}>
                                        <div className="pl-8 pr-6">
                                            <p className="poppins-400 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            Content IP industy, despite having a large industry size - is very centrally contolled only by few entities - which make the whole structure very lop sided and indeed worse for upcoming creators.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            With tokenisation - not only are we endeavoring to unlock this industry and make the process more participative and democratic - we are also empowering creators to have more freedom in creating what they like as well as have transparency in the content monetisation.
                                            </p>
                                            <p className="poppins-400 mt-7 tracking-[0.7px] text-[15px]  text-[#627C89]">
                                            Furthermore - it enables eligible investors and fans to become content co-owners and have more community access to work closely with their favoutite ceators and partake in the creation and content making process.
                                            </p>
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
