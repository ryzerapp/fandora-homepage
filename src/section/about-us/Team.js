import { coreTeam, legalTeam, productTeam } from "@/assets/data/team";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
const Team = () => {
    return (
        <section className="py-20">
            <div className="bs-container">
                <div className="row justify-center">
                    <div className="col-xxl-11 col-12">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-[25px] text-center xs:text-[30px] sm:text-[35px] md:text-[50px] poppins-600 text-[#45485F]">Core Team</h2>
                            </div>
                        </div>
                        <div className="row max-sm:justify-center">
                            <div className="col-xl-3 col-md-4 col-sm-6 col-10 mt-[3rem] sm:mt-[4rem]">
                                <div>
                                    <div className="flex justify-center items-center">
                                        <img alt="Surya Gedela" className="border-[3px] rounded-[50%] border-[#02010126] " src="/assets/img/png/Surya.png" />
                                    </div>
                                    <h3 className="text-[#181b31] mt-4 mb-4 text-center text-[20px] lg:text-[25px] poppins-600">Surya Gedela</h3>
                                    <div className="flex justify-center items-center">
                                        <div className="w-[20%] h-[0.5px] bg-[#627C89]">

                                        </div>
                                    </div>
                                    <p className="text-[#627C89] mt-3 text-center text-[16px] poppins-600">Founder & CEO</p>
                                    <div className="flex mt-4 justify-center items-center">
                                        <div>
                                            <a href="https://www.linkedin.com/in/sureshgedela/" target="_blank">
                                                <div className="bg-[#725AEC] hover:bg-[#1984bc] transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                    <FaLinkedin className="text-[white]" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="mx-4">
                                            <a href="https://twitter.com/Gsurya_gedela" target="_blank">
                                                <div className="bg-[#725AEC] hover:bg-[#1984bc] transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                    <FaTwitter className="text-[white]" />
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.facebook.com/manisureshsocial/" target="_blank">
                                                <div className="bg-[#725AEC] hover:bg-[#1984bc] transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                    <FaFacebookF className="text-[white]" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                coreTeam.map((item,index) => (
                                    <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-10 mt-[3rem] sm:mt-[4rem]">
                                        <div>
                                            <div className="flex justify-center items-center">
                                                <img alt={item.name} className="border-[3px] rounded-[50%] border-[#02010126] " src={item.profileImage} />
                                            </div>
                                            <h4 className="text-[#181b31] mt-4 mb-4 text-center text-[20px] lg:text-[25px] poppins-600">{item.name}</h4>
                                            <div className="flex justify-center items-center">
                                                <div className="w-[20%] h-[0.5px] bg-[#627C89]">
                                                </div>
                                            </div>
                                            <p className="text-[#627C89] mt-3 text-center text-[16px] poppins-600">{item.designation}</p>
                                            <div className="flex mt-4 justify-center items-center">
                                                <div>
                                                    <a href={item.profileUrl} target="_blank">
                                                        <div className="bg-[#725AEC] hover:bg-[#1984bc]  transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                            <FaLinkedin className="text-[white]" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row mt-20">
                            <div className="col-12">
                                <h2 className="text-[25px] text-center xs:text-[30px] sm:text-[35px] md:text-[50px] poppins-600 text-[#45485F]">Product Team</h2>
                            </div>
                        </div>
                        <div className="row max-sm:justify-center">
                        {
                                productTeam.map((item,index) => (
                                    <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-10 mt-[3rem] sm:mt-[4rem]">
                                        <div>
                                            <div className="flex justify-center items-center">
                                                <img alt={item.name} className="border-[3px] rounded-[50%] border-[#02010126] " src={item.profileImage} />
                                            </div>
                                            <h3 className="text-[#181b31] mt-4 mb-4 text-center text-[20px] lg:text-[25px] poppins-600">{item.name}</h3>
                                            <div className="flex justify-center items-center">
                                                <div className="w-[20%] h-[0.5px] bg-[#627C89]">

                                                </div>
                                            </div>
                                            <p className="text-[#627C89] mt-3 text-center text-[16px] poppins-600">{item.designation}</p>
                                            <div className="flex mt-4 justify-center items-center">
                                                <div>
                                                    <a href={item.profileUrl} target="_blank">
                                                        <div className="bg-[#725AEC] hover:bg-[#1984bc]  transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                            <FaLinkedin className="text-[white]" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row mt-20">
                            <div className="col-12">
                                <h2 className="text-[25px] text-center xs:text-[30px] sm:text-[35px] md:text-[50px] poppins-600 text-[#45485F]">Legal & Management</h2>
                            </div>
                        </div>
                        <div className="row max-sm:justify-center">
                        {
                                legalTeam.map((item,index) => (
                                    <div key={index} className="col-xl-3 col-md-4 col-sm-6 col-10 mt-[3rem] sm:mt-[4rem]">
                                        <div>
                                            <div className="flex justify-center items-center">
                                                <img alt={item.name} className="border-[3px] rounded-[50%] border-[#02010126] " src={item.profileImage} />
                                            </div>
                                            <h3 className="text-[#181b31] mt-4 mb-4 text-center text-[20px] lg:text-[25px] poppins-600">{item.name}</h3>
                                            <div className="flex justify-center items-center">
                                                <div className="w-[20%] h-[0.5px] bg-[#627C89]">

                                                </div>
                                            </div>
                                            <p className="text-[#627C89] mt-3 text-center text-[16px] poppins-600">{item.designation}</p>
                                            <div className="flex mt-4 justify-center items-center">
                                                <div>
                                                    <a href={item.profileUrl} target="_blank">
                                                        <div className="bg-[#725AEC] hover:bg-[#1984bc]  transition-all rounded-[50%] h-[30px] w-[30px] flex justify-center items-center">
                                                            <FaLinkedin className="text-[white]" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
