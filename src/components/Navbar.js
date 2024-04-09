"use client";
import { menu } from "@/assets/data/menu";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import AccordianMenu from "./AccordianMenu";
import { Accordion } from "@szhsin/react-accordion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="px-5 sm:px-10 xxl:px-5">
        <div className="bs-container-xxl  max-lg:shadow-none rz-shadow rounded-[2px]  py-4">
          <div className="row items-center justify-between">
            <div className="col-xl-2 logo-wrapper col-lg col-2">
              <Link href={"/"}>
                <div className="flex items-center justify-start xxl:justify-center">
                  <img
                    alt="logo"
                    className="w-[130px] max-lg:hidden"
                    src="/assets/img/png/logo.png"
                  />
                  <img
                    alt="logo"
                    className="w-[50px] lg:hidden"
                    src="/assets/img/png/logo.png"
                  />
                </div>
              </Link>
            </div>
            <div className="col-xl-8 col-10 hidden lg:flex justify-end xl:justify-center lg:items-center">
              <div>
                <div className="flex-items-center">
                  {menu.map((item, index) => {
                    return (
                      <div key={index} className="relative menu-link">
                        {item?.submenu ? (
                          <div
                            key={index}
                            className="text-[#103A40] flex items-center cursor-pointer px-3.5 xl:px-5 xxl:px-7 hover:text-[black] poppins-500 text-sm"
                          >
                            <span> {item.name}</span>
                            <FaChevronDown className="ml-1.5" />
                          </div>
                        ) : (
                          <Link
                            key={index}
                            className="text-[#103A40] px-3.5 xl:px-5 xxl:px-7 hover:text-[black] poppins-500 text-sm"
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        )}
                        {item?.submenu ? (
                          <div className="absolute menu-link-submenu w-[170px] rounded-md bg-[white] pt-8 pb-4 z-[100] ">
                            <div className="flex  flex-col w-full">
                              {item.submenu.map((v, k) => (
                                <Link
                                  key={k}
                                  className="text-[#103A40] my-2 text-center hover:text-[black] poppins-500 text-sm"
                                  href={v.href}
                                >
                                  {v.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-xl-2 flex lg:hidden xl:flex items-center px-0 justify-end col-lg col-4 menu-wrapper">
              <div className="max-xl:hidden">
                <a
                  href={"https://tbo77in098o.typeform.com/to/wn1WiWeC"}
                  target="_blank"
                >
                  <button className="bg-[black] hover:bg-[#5740C9] transition-all  flex-items-center px-4 xxl:px-5 py-2.5 rounded-md  poppins-500 text-sm text-[white]">
                    <span>Join Community</span>
                    <BsWhatsapp className="ml-2 text-[17px]" />
                  </button>
                </a>
              </div>
              <div className="lg:hidden">
                <div
                  onClick={() => setToggle(!toggle)}
                  className={`selector ${
                    toggle && "active"
                  } transition-all duration-500 show`}
                >
                  <div className="bar-icon-wrapper">
                    <span className="bar-icon"></span>
                    <span className="bar-icon"></span>
                    <span className="bar-icon"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`bg-[white] absolute lg:hidden  z-[200] transition-all duration-500 pb-10 w-full ${
          !toggle && "translate-y-[-140%]"
        }`}
      >
        <div className="flex flex-col justify-center items-center text-center">
          {menu.map((item, index) => {
            return (
              <>
                {item?.submenu ? (
                  <Accordion key={index} transition transitionTimeout={500}>
                    <AccordianMenu header={item.name}>
                      <div className="flex  flex-col w-full">
                        {item.submenu.map((v, k) => (
                          <Link
                            key={k}
                            className="text-[#103A40] my-2 text-center hover:text-[black] poppins-500 text-[15px]"
                            href={v.href}
                          >
                            {v.name}
                          </Link>
                        ))}
                      </div>
                    </AccordianMenu>
                  </Accordion>
                ) : (
                  <Link
                    key={index}
                    className="text-[#103A40] mt-5  hover:text-[black] poppins-500"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
