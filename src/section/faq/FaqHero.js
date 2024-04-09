import { faqCards } from "@/assets/data/faq"

const FaqHero = () => {
    return (
        <>
            <section className="bg-[#f7f7f7] py-20">
                <div className="bs-container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="max-lg:text-center text-[32px] xs:text-[40px] md:text-[50px] poppins-600 text-[#444762]">FAQ</h1>
                            <p className="text-[black] mt-3 opacity-[0.6] max-lg:text-center poppins-500 text-[16px] xs:text-[18px] sm:text-[20px]">We are here to answer any question you may have.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[white]">
                <div className="bs-container">
                    <div className="row max-xs:px-3 justify-center">
                        {
                            faqCards.map((item, index) => {
                                return (
                                    <div className="col-lg-4  col-sm-6 col-xs-11 col-12 mt-5 sm:mt-10" key={index}>
                                        <a>
                                            <div className="hover:drop-shadow transition-all duration-300 py-5 xl:py-8 px-2 xl:px-8 cursor-pointer rounded-md">
                                                <div className="flex-center">
                                                    <div style={{ background: item.bg, boxShadow: item.shadow }} className="flex-center w-[80px] h-[80px] rounded-[50%]" >
                                                        <img alt={item.title} className="w-[44px] h-[34px]" src={`/assets/img/svg/${item.thumbnail}`} />
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                    <h3 className="text-[#181b31] text-center poppins-500 text-[21px]">{item.title}</h3>
                                                    <p className="text-[#7A7A7A] mt-4 leading-[30px] text-center poppins-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqHero
