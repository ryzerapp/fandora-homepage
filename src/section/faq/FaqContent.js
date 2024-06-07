"use client";
import { NRIFaq, assetOwnerFaq, getStartedFaq, legalFaq, postInvenstment, preInvenstment, securityFaq, taxationFaq } from "@/assets/data/faq"
import Accordian3 from "@/components/Accordian3"
import { Accordion } from "@szhsin/react-accordion"

const FaqContent = () => {
    return (
        <>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">Get Started</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <Accordion transition transitionTimeout={500}>
                                    {
                                        getStartedFaq.getStartedFaq1.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                    <Accordian3 header={'How does the FANDORA platform works?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">Fandora consists of buyers (Content IP Fractions & token investors) and sellers (Creators wishing to raise funds for their IP Projects)</p>
                                            <p className="mb-7">Fandora is a marketplace like Airbnb, eBay, or Amazon - it just showcases curated projects. Any potential investment decision, to be taken by investors, is their independent decision and totally at their own discretion.</p>
                                            <p className="mb-7">Fandora team conducts detailed due diligence on any project, before its gets listed on the platform. This could include checking the credentials of the team behind the project, rights agreements to the project, agreements with the teams (say with actors or various technical crews), budget analysis, market analysis and others - and only after a project passes our strenuous eligibility criterion, it is greenlit on the site. Furthermore, the team also adds its own internal analysis for a project - including unbiased rationale on why a particular project is listed on the platform. All these documents can be accessed from the document section of the desired project.</p>
                                            <p className="mb-7">This helps investors make an informed wise decision to invest with confidence and trust.</p>
                                            <p className="mb-7 poppins-700">How Project listing process works:</p>
                                            <p className="mb-7">Step 1: A creator/production house may approach Fandora for participative funding for their projects. The project is either approved or disapproved based on facts checklist & due-diligence reports that we internally conduct.</p>
                                            <p className="mb-7">Step 2: Once approved, the project is put under contract by an SPV (Special Purpose Vehicle) under an LLP that underwrites the revenue or IP rights of the said project.</p>
                                            <p className="mb-7">As an investor - you will have access to the following:</p>
                                            <ul className="mb-7 ml-7 list-disc space-y-2">
                                                <li>The shares of the LLP, pro-rata your investments into the project;</li>
                                                <li>These shares represent your right to underwritten Revenue and/or IP rights of the said project, as the case may be</li>
                                                <li>Further, these shares are also linked to independently issued tokens - which then can offer you related blockchain asset benefits - such as easy liquidity, 24X7 transferability, ability to part fragment the tokens, connecting tokens with available DeFi pools, staking the tokens and other evolving applications</li>
                                            </ul>
                                            <p className="mb-7">Whenever a project is listed on Fandora, you will get all the relevant details in terms of the underwritten documents, the revenue rights that you will have access to, the different agreements that we have checked as part of the diligence of the project and any other details that are required for you to make the relevant and right decision.</p>
                                            <p className="mb-7">Step 3: Once fully funded, Fandora Platform will send few key documents such as Expression Of interest(EOI), LLP Agreement, Project Management Agreement and other requisite documents to a subscriber who's showing interest to invest.</p>
                                            <p className="mb-7">Upon digital signatures being confirmed from the subscribers, we then proceed to acquire the project from the creator and then the project’s IP/Revenue rights (subject to pre-decided agreement between the platform and the creator, and which would be clearly mentioned on the platform), will be transferred to a newly formed LLP, wherein all the members who subscribed will become "Designated LLP Partners".</p>
                                            <p className="mb-7">Step 4: All funds collected, are transferred to a designated escrow account for that specific project. The funds from this escrow account are then transferred to the project as per the requirements of the project on a benchmark basis. Once the project is completed, released and its revenues start coming in, these revenues will then again come back in the same escrow account and would be distributed back to the investors in the pre agreed pro rata basis. Furthermore, after a project ‘Hold-in’ period is over - the investors will be able to partially/fully liquidate the funds through selling their ‘Tokens’ on the Fandora exchange (coming soon).</p>
                                        </div>
                                    </Accordian3>
                                    {
                                        getStartedFaq.getStartedFaq2.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                    <Accordian3 header={'Why should I invest?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">Investors should consider investing in Fractional ownership for "Stable Cash Flows" and incremental growth. In the case of pre-leased commercial properties, long-term corporate lease contracts provide stable monthly cash flows that can help you generate an alternative income stream. </p>
                                            <p className="mb-7"><span className="poppins-700">Capital Preservation</span>  – underlying real-world asset ownership enables you to preserve your capital investment in a tangible form.</p>
                                            <p className="mb-7"><span className="poppins-700"> Superior Returns </span> – Attractive entry yields compounded with annual rental escalation and potential capital appreciation can lead to 14%+ annualized returns.</p>
                                            <p className="mb-7"><span className="poppins-700"> Diversification </span> – Diversify your wealth portfolio with alternatives. Real estate has a low correlation with stock markets and gives a hedge against volatility.</p>

                                        </div>
                                    </Accordian3>
                                    <Accordian3 header={'How is Fandora different from other investment platforms?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">Here are some key differences:</p>
                                            <ul className="mb-7 ml-7 list-disc space-y-2">
                                                <li>It is India’s only fractional investment platform of its kind - offering fractional+token investment opportunities in carefully curated high return potential Content IP projects.</li>
                                                <li>The investments are powered by decentralised blockchain technology - bringing benefits like easier liquidity, global recognition of your underwritten rights & their value, and other DeFi possibilities in near future - such as lending it out, fragmenting it, staking, conversion into other liquid real world assets and others</li>
                                                <li>Not just investments - but governing rights on the projects that you participate in - including rights to make some key creative and marketing decisions along with the project manager</li>
                                                <li>Robust legally ratified investment structure</li>
                                            </ul>
                                        </div>
                                    </Accordian3>
                                    <Accordian3 header={'What is the legal structure of our investments at Fandora?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">Following is the current structure:</p>
                                            <ul className="mb-7 ml-7 list-disc space-y-2">
                                                <li>All the investors become partners in a dedicated LLP for the project</li>
                                                <li>This LLP becomes a stakeholder in the SPV - into which the project rights and IPs are held, as per discussions with the Project manager and Fandora</li>
                                                <li>Fandora also offers tokens to the investors - which may be linked to their underlying shares in the LLP</li>
                                                <li>All the LLP shareholders thus become entitled to all underlying rights and benefits of the Project, which are legally enforceable and executable.</li>
                                            </ul>
                                        </div>
                                    </Accordian3>
                                    {
                                        getStartedFaq.getStartedFaq3.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                    <Accordian3 header={'What services does Fandora provide?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <ul className="mb-7 ml-7 list-disc space-y-2">
                                                <li>Access to curated Content IP investment & participation opportunities. All details related to the investment opportunity, including due diligence documents, project agreements, potential returns, hold in periods etc., will be provided on the project page.</li>
                                                <li>Underlying Legal Structure and all related compliances - including formation of related corporate structures, regulatory compliances, agreements with Project Manager etc.</li>
                                                <li>Record keeping of your LLP shares as well as Tokens</li>
                                                <li>Post Investment Project follow ups and updates to all investors</li>
                                                <li>Support in regards to execution of governance & voting rights in a particular project</li>
                                                <li>Post Investment support and exit management - facilitating return of your capital and returns thereon</li>
                                                <li>Support during project close-off and dilution</li>
                                                <li>24 hour query resolution</li>
                                            </ul>
                                        </div>
                                    </Accordian3>
                                    <Accordian3 header={'How do I make returns with Fandora?'}>
                                        <div className="poppins-400 mb-7  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">
                                                Following are the events which would trigger  returns for the investors:
                                            </p>
                                            <div className="pl-10 mb-7 space-y-3">
                                                <p>1. Release/sale of IP rights of the underlying project. This could vary from project to project. For example - a film may have more than 48 rights which could be monetised. Normally - any content retrieves almost 85-90% of its IP revenues within 12-18 months of its release/IP sale</p>
                                                <p>2. Final sale of the IP. This could be either bought back by the project managers, after mutual agreement with the investors, or sold to various media platforms on a consolidated basis. </p>
                                                <p>3. While the platform would target average IRR of 25-30% on the platform - the returns are subject to actual market conditions and Fandora, and its associates, makes no guarantee or promise on the same.</p>
                                            </div>
                                            <p>

                                            </p>
                                        </div>
                                    </Accordian3>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">For Investors</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <div className="col-12">
                                    <h2 className="text-[#52C1B9] text-[33px] poppins-600">Pre-investment</h2>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <Accordion transition transitionTimeout={200}>
                                    {
                                        preInvenstment.preInvenstment1.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                    <Accordian3 header={'What KYC documents are needed to sign up with Fandora?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="">Copies of the following documents will be required as part of the KYC process -</p>
                                            <p className="mb-7">1. PAN Card Address Proof</p>
                                            <p className="mb-7">2. (Aadhar/Driver's License/Passport). </p>
                                            <p className="mb-7">3. Live Selfie</p>
                                        </div>

                                    </Accordian3>
                                    {
                                        preInvenstment.preInvenstment2.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                </Accordion>
                            </div>
                            <div className="row mt-10">
                                <div className="col-12">
                                    <h2 className="text-[#52C1B9] text-[33px] poppins-600">Post-investment</h2>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <Accordion transition transitionTimeout={200}>
                                    <Accordian3 header={'When is my investment complete?'}>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]"> Your investment is complete when:</p>
                                        <ul className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89] ml-7 list-disc space-y-2">
                                            <li>Complete subscription funds are received</li>
                                            <li>Your signatures on various post investment agreements - including shareholding agreement in the project LLP is received</li>
                                            <li>Corresponding tokens are issued and uploaded in your wallet</li>
                                            <li>The status would be uploaded on the app under your portfolio</li>
                                            <li>You would be receiving the share copies in designated demat account</li>
                                            <li>The platform would start releasing the Funds to the project in performance based benchmark basis</li>
                                        </ul>
                                    </Accordian3>

                                    <Accordian3 header={'When & how will I receive my returns'}>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            As soon and whenever the project starts to monetise the underlying IP - and the revenues come in the project escrow account - your returns would be calculated pro-rata to your share of investments and deposited to your accounts. A detailed funds flow statement will be issued to you.
                                        </p>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            These returns are treated as dividends on your LLP shares in the project entity.
                                        </p>
                                    </Accordian3>

                                    {
                                        postInvenstment.postInvenstment1.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                    {/* <Accordian3 header={'How can I sell shares on the marketplace?'}>
                                        <div className="poppins-400  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">  Eligible investors (investors who have held their shares for 90 days or more from the date of purchase or property closing date - whichever is later) can sell their shares as follows:</p>
                                            <p className="mb-7"> <span className="poppins-700"> Step 1: </span> Create a Sale Listing through the My Investments page by entering the Number of ‘Shares to be Sold’ and the ‘Selling Price/Share’. This will create and activate your sale listing, which will appear on the View Properties page.</p>
                                            <p className="mb-7"><span className="poppins-700"> Step 2: </span> You will receive a notification when a buyer initiates a purchase transaction against your listing. After the buyer’s transaction is complete, you will receive a sale transaction confirmation email.</p>
                                            <p className="mb-7"><span className="poppins-700"> Step 3: </span> Once payment has been received from the buyer, you need to sign a Share Transfer form (sent via email) to complete the share transfer to the buyer.</p>
                                            <p className="mb-7"><span className="poppins-700"> Step 4: </span> We will send the funds to your account in 2-3 business days after completing the sale transaction.</p>
                                        </div>
                                    </Accordian3>
                                    <Accordian3 header={'Can I cancel my shares listed on the marketplace?'}>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            Once shares are listed on the marketplace, you can cancel the listing till there are no purchases initiated against that listing. Once we receive a purchase request from any interested buyer, you cannot cancel the sale listing. If, for some reason, the purchase transaction does not go through (for example - the buyer's payment has failed), shares will be automatically and instantaneously listed back on the marketplace.
                                        </p>
                                    </Accordian3>
                                    <Accordian3 header={'What are the various stages in the sale process and how do I track them?'}>
                                        <div className="poppins-400  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7"> You can track the sale transaction through the My Investments page.</p>
                                            <p className="mb-7"> There are three stages in the sale transaction process:</p>
                                            <p className="mb-7"><span className="poppins-700"> Listed - </span> Implies that shares have been successfully listed on the marketplace and are now available for purchase by interested buyers.</p>
                                            <p className="mb-7"><span className="poppins-700"> Processing - </span> Implies that Fandora has received a purchase transaction request against your sale listing.</p>
                                            <p className="mb-7"><span className="poppins-700"> Sold - </span> Implies that a purchase transaction has been successfully completed against your sale listing.</p>
                                        </div>
                                    </Accordian3>
                                    {
                                        postInvenstment.postInvenstment2.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    } */}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">Legal & Management</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <Accordion transition transitionTimeout={200}>
                                    {
                                        legalFaq.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">Security / Protection</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <Accordion transition transitionTimeout={300}>
                                    {
                                        securityFaq.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">Taxation & NRI’s</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <div className="col-12">
                                    <h2 className="text-[#52C1B9] text-[33px] poppins-600">Taxation</h2>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <Accordion transition transitionTimeout={200}>
                                    {
                                        taxationFaq.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }
                                </Accordion>
                            </div>
                            <div className="row mt-10">
                                <div className="col-12">
                                    <h2 className="text-[#52C1B9] text-[33px] poppins-600">For NRI's</h2>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <Accordion transition transitionTimeout={300}>
                                    {
                                        NRIFaq.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-content-section py-20">
                <div className="bs-container">
                    <div className="row justify-center">
                        <div className="col-xxl-10 col-sm-12 col-11">
                            <div className="row items-center">
                                <div className="col-xs-6">
                                    <h2 className="text-[#45485F] text-[25px] sm:text-[35px] lg:text-[45px] poppins-700">For Asset owners</h2>
                                </div>
                                <div className="col-xs-6 max-xs:mt-3">
                                    <div className="flex xs:justify-end">
                                        <p className="text-[#627C89] poppins-400 text-[14px]  sm:text-[18px] lg:text-[20px]">Update on: 20th may 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-10">
                                <Accordion transition transitionTimeout={500}>
                                    {
                                        assetOwnerFaq.map((item, index) => (
                                            <Accordian3 header={item.name} key={index}>
                                                {
                                                    item.content.map((v, k) => (
                                                        <p key={k} className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">{v}</p>
                                                    ))
                                                }
                                            </Accordian3>
                                        ))
                                    }

                                    {/* <Accordian3 header={'What is the advantage of Shareable Asset platform for asset owners?'}>
                                        <div className="poppins-400 mb-7  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">

                                            <div className="pl-10 mb-7">
                                                <p>1. The biggest advantage is "Selling" by time bound. Once the property is verified by our internal due-diligence, and made live in our platform, we raise fractional investments from multiple investors who's showing interest to invest in your asset.</p>
                                                <p className="mt-4">2. No need to depend on a broker or consultant and loose a percentage cut on your property, by means you don't need to spend money on "Listing portals, Advertisements, Marketing, etc. This will drastically both time and money. </p>
                                            </div>
                                            <p>

                                            </p>
                                        </div>
                                    </Accordian3> */}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqContent
