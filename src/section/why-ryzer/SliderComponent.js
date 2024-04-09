"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { slider1, slider2 } from "@/assets/data/slider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      activeSlideIndex: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });

  }

  handleSlideChange = index => {
    this.setState({ activeSlideIndex: index });
  };
  render() {
    const setting1 = {
      centerMode: true,

    }

    const setting2 = {
      arrow: true,
      afterChange: this.handleSlideChange
    }
    return (
      <div className="row justify-center">
        <div className="col-xl-10 col-11 relative pt-10">
          <button className="bg-[white] absolute duration-500 right-[-5px] xs:right-[-20px] top-[55%] z-[20] hover:text-[white] flex-center transition-all shadow hover:bg-[black] w-[30px] h-[30px] xs:w-[45px] xs:h-[45px] rounded-[50%]" onClick={() => this.slider1.slickNext()}>
            <FaArrowRight className="xs:text-[18px] text-[14px]" />
          </button>
          <button className="bg-[white] absolute duration-500 left-[-5px] xs:left-[-20px] top-[55%] z-[20] hover:text-[white] flex-center transition-all shadow hover:bg-[black] w-[30px] h-[30px] xs:w-[45px] xs:h-[45px] rounded-[50%]" onClick={() => this.slider1.slickPrev()}>
            <FaArrowLeft className="text-[14px] xs:text-[18px]" />
          </button>
          <Slider
            {...setting1}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            responsive={[
              {
                breakpoint: 768, // screen width at which the settings will change
                settings: {
                  slidesToShow: 2 // new value for slidesToShow at the specified breakpoint
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1
                }
              }
              // Add more breakpoints and settings as needed
            ]}
          >
            {
              slider2.map((item, index) => {
                return (
                  <div key={index}>
                    <h2 className={` ${this.state.activeSlideIndex === index ? 'active-text' : 'rz-slider-text'} text-[28px] lg:text-[35px] cursor-pointer text-center poppins-600`}>{item}</h2>
                  </div>
                )
              })
            }

          </Slider>

          <Slider
            className="mt-10"
            {...setting2}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            {
              slider1.map((item, index) => {
                return (
                  <div key={index} className={`slider-${index + 1} rounded-[15px] py-7 px-3 xs:px-8 lg:px-10 xl:px-20`}>
                    <div className="row items-center">
                      <div className="col-md-6 max-md:flex max-md:justify-center max-md:order-2 max-md:mt-10">
                        <div>
                          <h3 className="text-[#225469] max-xs:text-left max-md:text-center leading-[26px] max-xs:pl-5 xs:leading-[30px] xl:leading-[34px] text-[18px] xs:text-[22px] xl:text-[27px] poppins-700"> {item.name}</h3>
                          <div className="pl-10 mt-5">
                            <ul className="list-disc">
                              {
                                item.feature.map((v, k) => {
                                  return (
                                    <li key={k} className="text-[#30546FAD] mt-2 text-[16px] lg:text-[18px] poppins-400">
                                      {v}
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="flex-center">
                          <img alt={item.name} className=" w-[75%] md:w-[85%] lg:w-[70%]" src={`/assets/img/png/slide-${index + 1}.png`} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </Slider>

        </div>
      </div>
    );
  }
}