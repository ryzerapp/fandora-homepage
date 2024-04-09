import { footerMenu } from "@/assets/data/menu";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-0 my-0">
      <img alt="logo" src="/assets/img/svg/footer-bg.svg" />
      <div className="rz-footer md:mt-[-2.5rem] xl:mt-[-4rem] pb-[3rem] lg:pb-[5rem] relative z-10">
        <div className="bs-container">
          <div className="row items-center justify-center sm:justify-between">
            <div className="col-lg-2 col-sm-3 xs:col-4 col-5">
              <div className="flex center">
                <img alt="logo" src="/assets/img/png/footer-logo.png" />
              </div>
            </div>
            <div className="col-xxl-9 max-sm:mt-5 col-lg-10 col-sm-9">
              <div className="">
                <div className="flex max-lg:flex-wrap max-sm:flex-col md:justify-end items-center">
                  {footerMenu.map((item, index) => {
                    return (
                      <>
                        {item?.blank ? (
                          <div
                            key={index}
                            className="xl:px-3 max-lg:mt-2 px-[8px]"
                          >
                            <a
                              target="_blank"
                              className="text-[#000000D1]  transition-all px-1 xl:px-2 py-1 rounded-md hover:bg-[#2D6FE814] uppercase text-[11px] xl:text-[12px] poppins-600"
                              href={item.href}
                            >
                              {item.name}
                            </a>
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="xl:px-3 max-lg:mt-2 px-[8px]"
                          >
                            <Link
                              className="text-[#000000D1]  transition-all px-1 xl:px-2 py-1 rounded-md hover:bg-[#2D6FE814] uppercase text-[11px] xl:text-[12px] poppins-600"
                              href={item.href}
                            >
                              {item.name}
                            </Link>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-10 mb-10">
            <div className="w-[100%] h-[0.5px] opacity-[0.3] bg-[#627C89]"></div>
          </div>
          <div className="row items-center">
            <div className="col-md-8 ">
              <div className="max-sm:px-4">
                <p className="text-[#0000008C] text-[14px] poppins-400">
                  This site is operated by Ryzer Wealth Corp Pvt.Ltd., which is
                  not a registered broker-dealer or investment advisor. Ryzer
                  does not give investment advice, endorsement, analysis or
                  recommendations with respect to any investments, or
                  securities. Offers to sell, or the solicitations of offers to
                  buy, any security can only be made through official offering
                  documents. Investors should conduct their own due diligence,
                  not rely on the financial assumptions or estimates displayed
                  on this website/app, and are encouraged to consult with a
                  financial advisor attorney or any other professional that can
                  help understand and assess the risks associated with any
                  investment opportunity. Ryzer does not guarantee any
                  investment performance, outcome or return of capital for any
                  investment opportunity posted on this site.
                </p>
              </div>
            </div>
            <div className="col-md-4 max-md:mt-8 ">
              <div className="flex justify-center md:justify-end items-center">
                <div className="px-3">
                  <a
                    href={"https://www.linkedin.com/company/ryzerapp"}
                    target="_blank"
                  >
                    <FaLinkedin className="text-[#5f7a9e] transition-all hover:text-gray-600 text-[25px] hover:scale-105" />
                  </a>
                </div>
                <div className="px-3">
                  <a href={"https://twitter.com/Ryzer_app"} target="_blank">
                    <FaTwitter className="text-[#5f7a9e] transition-all hover:text-gray-600 text-[25px] hover:scale-105" />
                  </a>
                </div>
                <div className="px-3">
                  <a
                    href={"https://www.instagram.com/ryzer_app/"}
                    target="_blank"
                  >
                    <FaInstagram className="text-[#5f7a9e] transition-all hover:text-gray-600 text-[25px] hover:scale-105" />
                  </a>
                </div>
                <div className="px-3">
                  <a
                    href={"https://www.facebook.com/ryzer.invest"}
                    target="_blank"
                  >
                    <FaFacebook className="text-[#5f7a9e] transition-all hover:text-gray-600 text-[25px] hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
