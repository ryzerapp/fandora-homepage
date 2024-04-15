import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const CommingSoon = () => {
  return (
    <section className="py-20">
      <div className="bs-container">
        <div className="row justify-center">
          <div className="col-xl-10 col-9 col-md-11">
            <div className="row max-md:pb-7 items-center justify-between">
              <div className="col-xl-5 col-md-4">
                <div>
                  <h2 className="text-[#45485F] max-md:text-center text-[22px] md:text-[18px] lg:text-[20px] xl:text-[26px] poppins-600">
                    Want to disrupt Content IP - become a part of our passionate team!
                  </h2>
                </div>
              </div>
              <div className="col-md-3 max-sm:my-8 max-md:my-5">
                <div className="max-md:flex max-md:justify-center">
                  <img
                    alt="comming soon"
                    className="max-md:w-[65%] lg:w-[75%]"
                    src="/assets/img/png/comming-soon.png"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="flex justify-center md:justify-end">
                  <div>
                    <Link href="/partners">
                      <button className="bg-[#083467] px-6 lg:px-8 hover:text-[#083467] hover:bg-[white] hover:drop-shadow-md transition-all duration-500 text-[15px] rounded-[6px] py-4 poppins-400 flex items-center text-[white]">
                        <span>Coming soon</span>
                        <FaArrowRight className="ml-3" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-11 col-md-12 col-10 mt-3">
            <div className=" flex items-center">
              <div className="bg-[#30C469] h-[4px]  w-[29%]"></div>
              <div className="bg-[#F69F29] h-[4px]  w-[14%]"></div>
              <div className="bg-[#B469FF] h-[4px] w-[29%]"></div>
              <div className="bg-[#F69F29] h-[4px]  w-[14%]"></div>
              <div className="bg-[#30C469] h-[4px]  w-[14%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommingSoon;
