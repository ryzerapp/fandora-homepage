import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Review = () => {
  return (
    <>
      <section className="pb-20 sm:pt-20">
        <div className="bs-container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                Real voice from real investors
              </h2>
            </div>
          </div>
          <div className="row justify-center mt-10">
            <div className="col-lg-6 col-11">
              <div>
                <div className="lg:pr-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div className="">
                      <div className="flex-center">
                        <img
                          alt="Minish Mishra, CA"
                          className="w-[120px] sm:w-[150px] md:w-[110px]"
                          src="/assets/img/png/Uday-1.png"
                        />
                      </div>
                    </div>
                    <div className="sm:ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col  items-center sm:justify-between">
                        <p className="poppins-500 text-[#181B31] max-sm:text-center">
                          Minish Mishra, CA
                        </p>
                        <div>
                          <a href="https://in.linkedin.com/in/ca-minish-mishra-13a676180" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[22px] max-sm:mt-3" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center   mt-4 poppins-400">
                        “Love the ability to invest in assets which typically
                        not available for common prope, Great work by Fandora team
                        “
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:pl-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div>
                      <div className="flex-center">
                        <img
                          alt="Ashank Mittal, CEO @ REET"
                          className="w-[130px] sm:w-[200px] md:w-[140px]"
                          src="/assets/img/png/Uday-2.png"
                        />
                      </div>
                    </div>
                    <div className="ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col items-center sm:justify-between">
                        <p className="poppins-500 text-[#181B31] max-sm:text-center">
                          Ashank Mittal, CEO @ REET
                        </p>
                        <div>
                          <a href="https://in.linkedin.com/in/ashank-mittal-3aabaa9" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[22px] max-sm:mt-3" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center mt-4 poppins-400">
                        “Fandora is truly a great solution that provides on-chain
                        trust and transaparency when it comes to real world
                        investment oppertunites“
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:pr-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div>
                      <div className="flex-center">
                        <img
                          alt="Rohan Sharan, CEO @ Timechain Labs"
                          className="w-[150px] sm:w-[290px] md:w-[180px]"
                          src="/assets/img/png/Uday.png"
                        />
                      </div>
                    </div>
                    <div className="ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col items-center justify-center sm:justify-between">
                        <p className="poppins-500 max-sm:mb-2 text-[#181B31] max-sm:text-center">
                          Rohan Sharan, CEO @ Timechain Labs
                        </p>
                        <div>
                          <a href="https://in.linkedin.com/in/rohan-sharan" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[22px]" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center mt-4 poppins-400">
                        “Product's user experience is really cool, love the way
                        how an app provides an data right from asset documents,
                        and due diligence to decentralised DAO treasury. It's
                        fully decentralized.“
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="sm:pt-20 pt-[2.5rem] max-sm:px-4 lg:pl-8">
                <div className="flex max-lg:justify-center mb-5">
                  <div className="bg-[#EDF3F7]  px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                    INVESTOR'S TESTIMONIALS
                  </div>
                </div>
                <h2 className="md:leading-[55px] xs:leading-[45px] leading-[32px]  max-lg:text-center text-[23px] xs:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                  Join The Future Of Asset Tokenization
                </h2>
                <p className="poppins-400 my-5 max-lg:text-center tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                  Fandora is a power packed alternative investment platform that
                  provides great assets across India by levering the true sense
                  of blockchain. Trust, Transparency & investor's control is
                  truly amazing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
