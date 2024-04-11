import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Review = () => {
  return (
    <>
      <section className="pb-20 sm:pt-20">
        <div className="bs-container">
          <div className="row justify-center">
            <div className="col-lg-6 col-11">
              <div>
                <div className="lg:pr-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div className="">
                      <div className="flex-center">
                        <img
                          alt="Jyotesh Narang, Realtor, Partner"
                          className="w-[50%] sm:w-[80%]"
                          src="/assets/img/png/Jyotesh.png"
                        />
                      </div>
                    </div>
                    <div className="sm:ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col  items-center sm:justify-between">
                        <p className="poppins-500 text-[#181B31] max-sm:text-center">
                          Jyotesh Narang, Realtor, Partner
                        </p>
                        <div>
                          <a href="https://in.linkedin.com/in/jyoteshnarang" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[22px] max-sm:mt-3" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center   mt-4 poppins-400">
                        “The portal's comprehensive analytics and reporting
                        tools have empowered us to make data-driven decisions
                        and drive our sales to new heights.“
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:pl-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div>
                      <div className="flex-center">
                        <img
                        alt="Naresh P Arora, CEO, Pre-leased.com"
                          className="w-[50%] sm:w-[80%]"
                          src="/assets/img/png/Naresh.png"
                        />
                      </div>
                    </div>
                    <div className="ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col items-center sm:justify-between">
                        <p className="poppins-500 text-[#181B31] max-sm:text-center">
                          Naresh P Arora, CEO, Pre-leased.com
                        </p>
                        <div>
                          <a href="" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[22px] max-sm:mt-3" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center mt-4 poppins-400">
                        “It provides us with seamless access to resources,
                        real-time updates, and an intuitive interface that makes
                        managing our partnership a breeze.“
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:pr-10">
                  <div className="rz-shadow-review max-sm:flex-col flex items-center rounded-[3px] xs:p-5 md:p-10">
                    <div>
                      <div className="flex-center">
                        <img
                        alt="Rajiv Williams, Deccan Progressive Reality, Hyd"
                          className="w-[50%] sm:w-[80%]"
                          src="/assets/img/png/Rajiv.png"
                        />
                      </div>
                    </div>
                    <div className="ml-6 max-sm:mt-5">
                      <div className="flex max-sm:flex-col items-center justify-center sm:justify-between">
                        <p className="poppins-500 max-sm:mb-2 text-[#181B31] max-sm:text-center">
                          Rajiv Williams, Deccan Progressive Reality, Hyd
                        </p>
                        <div>
                          <a href="https://in.linkedin.com/in/rajivwilliams" target="_blank">
                            <FaLinkedinIn className="text-[#181B31] ml-3 text-[24px]" />
                          </a>
                        </div>
                      </div>
                      <p className="text-[#243858] max-sm:text-center mt-4 poppins-400">
                        “It has truly transformed the way we collaborate and
                        drive success together with our fractional real estate
                        clients“
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 max-sm:mt-10">
              <div className="sm:pt-20 pt-[2.5rem] max-sm:px-4 lg:pl-8">
                <div className="flex max-lg:justify-center mb-5">
                  <div className="bg-[#EDF3F7]  px-3 rounded-md py-[2px] poppins-600 text-xs text-[#333B41]">
                    WORKFLOW INTEGRATION
                  </div>
                </div>
                <h2 className="md:leading-[55px] xs:leading-[45px] leading-[32px]  max-lg:text-center text-[23px] xs:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                  Hear from them
                </h2>
                <p className="poppins-400 my-5 max-lg:text-center tracking-[0.7px] text-base sm:text-lg text-[#627C89]">
                  Fandora's channel partner portal has Its amazing user-friendly
                  interface, simple dashboards, and robust lead management
                  capabilities have helped us streamline our processes and
                  enhance productivity to drive faster sales.
                </p>
                <div className="my-4 max-xl:flex max-xl:justify-center">
                  <a
                    target="_blank"
                    href={"https://partners.ryzer.app/auth/login"}
                  >
                    <button className="bg-[#52C1B9] text-[white] flex items-center px-7 xs:px-8 py-3 transition-all mt-10 duration-300 hover:scale-105 rounded-md">
                      <span className=" poppins-600 text-center mr-3 text-base xs:text-lg">
                        Get started
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
