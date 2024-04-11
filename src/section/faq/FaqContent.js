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
                                    <Accordian3 header={'How the Fandora Platform Works?'}>
                                        <div className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">Fandora consists of buyers (asset token investors) and sellers (people who want to sell their different assets).</p>
                                            <p className="mb-7">Fandora is a marketplace like Airbnb, eBay, or Amazon. It does not buy and sell properties.</p>
                                            <p className="mb-7">Fandora internal Team conducts a through due diligence before listing any property to the platform. Documents checked by us consist of Property documents, Ownership Documents, Legal, and Civil violations, Authorised Permissions, Municipal bills and Receipts. We also do a personal visit to property location to check total carpet area, built-up area, Property check-up/inspections that adhere to local RERA guidelines. Then once the  asset is listed, a retail investor like you can see every document and reports on the "Document" section in the application.</p>
                                            <p className="mb-7">This helps investors make an informed wise decision to invest with confidence and trust.</p>
                                            <p className="mb-7 poppins-700">How Asset listing process works:</p>
                                            <p className="mb-7">Step 1: A seller submits their assets to be sold on the Fandora Platform. The asset is either approved or disapproved based on facts checklist & due-diligence reports that we internally conduct.</p>
                                            <p className="mb-7">Step 2: Once approved, the asset is put under contract by an SPV (Special Purpose Vehicle) under an LLP that holds the Asset Title deed.</p>
                                            <p className="mb-7">The LLP is then tokenised or issued into individual asset tokens on the Polygon blockchain layer. This can be fully audited anytime, anywhere, since it's fully run on-chain in a de-centralised manner.</p>
                                            <p className="mb-7">Step 3: Once fully funded, Fandora Platform will send few key documents such as Expression Of interest(EOI) , LLP Agreement, Property Management Agreement and other requisite documents to a subscriber who's showing interest to invest.</p>
                                            <p className="mb-7">Upon digital signatures being confirmed from the subscribers, we then proceed to acquire an asset from the seller and then the Asset's Title deeds will be transferred to a newly formed LLP, wherein all the members who subscribed will become "Designated LLP Partners".</p>
                                            <p className="mb-7">Step 4: Wait until the hold-in period while gaining monthly rentals and capital appreciation. When the time comes (Roughly 2-3 years Horizon), Investors in that Specific LLP can decide to re-sell to a party and gain asset appreciation, which can be shared among them based on their subscribed ownership percentage. Or an investor may exit anytime by selling his subscribed ownership in our secondary marketplace (Coming soon).</p>
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
                                        <div className="poppins-400 mb-7 pl-10 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">

                                            <p className="mb-7">1. <span className="poppins-700">Co-owner matching:</span> Fandora matches you with other compatible investors to co-purchase a property.</p>
                                            <p className="mb-7">2. <span className="poppins-700"> Entity formation:  </span>Fandora sets up an LLP in the sta</p>
                                            <p className="mb-7">3. <span className="poppins-700"> Diversification : </span> Fandora Platform creates a bank account for the LLP and supports deposits, rental distributions, expense withdrawals, and a reserve for the property.</p>
                                            <p className="mb-7">4. <span className="poppins-700"> Banking: </span> Our governance model aligns all co-owners on handling scenarios such as ownership transfers, voting procedures, repairs, and expenses.</p>
                                            <p className="mb-7">5. <span className="poppins-700"> Asset Deal closing: </span> A dedicated asset manager will make an offer, work through the due diligence process, and successfully close the asset deal in both buying and re-selling an asset in the later period of time.</p>
                                        </div>
                                    </Accordian3>
                                    <Accordian3 header={'How do I make returns with Fandora?'}>
                                        <div className="poppins-400 mb-7  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <p className="mb-7">
                                                You can make returns with Fandora in two ways:
                                            </p>
                                            <div className="pl-10 mb-7">
                                                <p>1. The sale of your invested asset and its monthly rental income.</p>
                                                <p>2. When an asset is sold, any appreciation is paid back to investors in addition to their investment principal. </p>
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
                                    <Accordian3 header={'When is my investment process complete?'}>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            Your investment is completed as soon as the opportunity is fully funded and private placement of your investment is done in the SPV that shall acquire the asset listed. Fandora generally has a time frame of 60 days to ensure that the property receives complete funding.
                                        </p>
                                    </Accordian3>
                                    <Accordian3 header={'When & how will I receive my returns?'}>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            The return on your investment is in the form of interest on debentures. The interest/coupon rate of the debentures you hold is a function of the rents generated and interest earned on the security deposit. This is transferred to your bank account within the 10th working day of every month subject, to the receipt of rents from that particular asset.
                                        </p>
                                        <p className="poppins-400 mb-7 tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                            <span className="poppins-700">Note:</span> Specifics of coupon rate, interest on the security deposit, amount of rent to be received from the tenant, etc., of each opportunity will vary based on the asset.
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
                                    <Accordian3 header={'How can I sell shares on the marketplace?'}>
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

                                    <Accordian3 header={'What is the advantage of Shareable Asset platform for asset owners?'}>
                                        <div className="poppins-400 mb-7  tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                                           
                                            <div className="pl-10 mb-7">
                                                <p>1. The biggest advantage is "Selling" by time bound. Once the property is verified by our internal due-diligence, and made live in our platform, we raise fractional investments from multiple investors who's showing interest to invest in your asset.</p>
                                                <p className="mt-4">2. No need to depend on a broker or consultant and loose a percentage cut on your property, by means you don't need to spend money on "Listing portals, Advertisements, Marketing, etc. This will drastically both time and money. </p>
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
        </>
    )
}

export default FaqContent
