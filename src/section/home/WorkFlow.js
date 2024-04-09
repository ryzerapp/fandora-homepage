"use client";
import React from "react";

const WorkFlow = ({ home = false }) => {
  return (
    <>
      <section className="py-20">
        <div className="bs-container">
          <div className="row justify-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-12">
                  {home ? (
                    <h2 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                      How fandora works
                    </h2>
                  ) : (
                    <h1 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                      How fandora works
                    </h1>
                  )}
                  <p className="text-center poppins-500 mt-3 text-sm xs:text-base xs:mt-2 tracking-[0.7px] text-[#627C89]">
                    Our mission is to make it as easy as possible for anyone to
                    make content-IP investment and build wealth.
                  </p>
                </div>
              </div>
              <div className="row justify-center mt-20 lg:justify-between">
                <div className="col-lg-5">
                  <div className="">
                    <ul className="steps steps-vertical">
                      <li className="step rz-step">
                        <div className="pl-5">
                          <h3 className="text-left poppins-600 text-[#181B31] text-[20px]">
                            Explore Assets
                          </h3>
                          <p className="text-left mt-3 poppins-400 tracking-[0.7px]  text-[#627C89]">
                          Browse through various curated projects - and access various details like 
                          Share of IP that you're entitled to, project analysis reports, underlying 
                          agreements etc.
                          </p>
                        </div>
                      </li>
                      <li className="step rz-step mt-5">
                        <div className="pl-5">
                          <h3 className="text-left poppins-600 text-[#181B31] text-[20px]">
                            Select & Invest
                          </h3>
                          <p className="text-left mt-3 poppins-400 tracking-[0.7px]  text-[#627C89]">
                          Purchase fractional parts (linked to blockchain powered tokens) and 
                          co-own the underlying content project.
                          </p>
                        </div>
                      </li>
                      <li className="step rz-step mt-10">
                        <div className=" pl-5">
                          <h3 className="text-left poppins-600 text-[#181B31] text-[20px]">
                            Earn & Transfer
                          </h3>
                          <p className="text-left mt-3 poppins-400 tracking-[0.7px]  text-[#627C89]">
                          Basis the project details - you can multiply returns as per the time 
                          periods mentioned, and can also exit or get partial liquidation after
                           the expiry of lock-in period
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 max-lg:mt-20 col-10 pt-20">
                  <div className="flex-center relative">
                    <img alt="Fractional investment - fandora" className="w-[60%]" src="/assets/img/png/work.png" />
                    <img
                      alt="person1"
                      className="absolute w-[85px] sm:w-[107px] left-[-20px] sm:left-0 top-20"
                      src="/assets/img/png/person1.png"
                    />
                    <img
                      alt="person5"
                      className="absolute w-[85px] sm:w-[107px] right-[-20px] sm:right-0 top-20"
                      src="/assets/img/png/person5.png"
                    />
                    <img
                      alt="person2"
                      className="absolute w-[150px] sm:w-[200px] left-[-40px] top-[-110px]"
                      src="/assets/img/webp/person2.webp"
                    />
                    <img
                      alt="person4"
                      className="absolute w-[150px] sm:w-[200px] right-[-40px] top-[-110px]"
                      src="/assets/img/webp/person4.webp"
                    />
                    <img
                      alt="person3"
                      className="absolute w-[85px] sm:w-[107px] left-[50] top-[-110px]"
                      src="/assets/img/png/person3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFlow;
