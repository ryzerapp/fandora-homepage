"use client";
import SliderComponent from "./SliderComponent";

const WhyBuild = () => {
    return (
        <section className="py-20">
            <div className="bs-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">Why we build this ?</h2>
                        <p className="text-center poppins-500 mt-3 text-sm xs:text-base xs:mt-2 tracking-[0.7px] text-[#627C89]">Why a participative blockchain empowered Content IP Fractional Investment platform?</p>
                    </div>
                    <div className="col-12">
                        <SliderComponent />
                    </div>
                    {/* <One /> */}
                </div>
            </div>
        </section>
    )
}

export default WhyBuild
