"use client";
import { BsSend } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { config } from "@/config";
import { FaXTwitter } from "react-icons/fa6";
const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const result = await fetch(
        `${config.API_URL}/config/contactus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const  data  = await result.json();
      if (data.type == "success") {
        toast.success(data.message)
        resetForm()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
        console.log(error)
        toast.error('something went wrong')
    }
  };
  return (
    <>
      <ToastContainer />
      <section>
        <div className="bs-container">
          <div className="row">
            <div className="col-12">
              <div className="row max-md:justify-center">
                <div className="col-md-6 col-11">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="rounded-[10px] px-5 lg:px-10 border-t-[10px] pt-10 xl:pt-20 border-[#52C1B9]">
                        <div className="flex items-center justify-between">
                          <h3 className="poppins-700 text-[28px] text-[#444762]">
                            Let's talk
                          </h3>
                          <BsSend className="text-[#dcdfe5] text-[35px] lg:text-[45px] xl:text-[55px]" />
                        </div>
                        <div className="mt-10">
                          <div className="mt-8">
                            <Field
                              placeholder="Name"
                              name="name"
                              id="name"
                              className="border-[#7B838E26] hover:outline-none focus:ring-0 bg-[white] focus:outline-none focus:border-[#7B838E70] w-full px-7 md:px-5 lg:px-7 py-4 md:py-3 lg:py-4 rounded-[3px] border-[0.5px] contact-field poppins-400 text-[#48587d] text-[16px] lg:text-[18px]"
                            />
                            <ErrorMessage
                              className="mt-1 ml-1 poppins-400 text-red-500"
                              name="name"
                              component="div"
                            />
                          </div>
                          <div className="mt-8">
                            <Field
                              name="email"
                              id="email"
                              placeholder="Email Address"
                              className="border-[#7B838E26] hover:outline-none focus:ring-0 bg-[white] focus:outline-none focus:border-[#7B838E70] w-full px-7 md:px-5 lg:px-7 py-4 md:py-3 lg:py-4 rounded-[3px] border-[0.5px] contact-field poppins-400 text-[#48587d] text-[16px] lg:text-[18px]"
                            />
                            <ErrorMessage
                              className="mt-1 ml-1 poppins-400 text-red-500"
                              name="email"
                              component="div"
                            />
                          </div>
                          <div className="mt-8">
                            <Field
                              as="textarea"
                              name="message"
                              id="message"
                              placeholder="Message"
                              className="border-[#7B838E26] hover:outline-none focus:ring-0 bg-[white] focus:outline-none focus:border-[#7B838E70] h-[150px] w-full px-7 md:px-5 lg:px-7 py-4 md:py-3 lg:py-4 rounded-[3px] border-[0.5px] contact-field poppins-400 text-[#48587d] text-[16px] lg:text-[18px]"
                            />
                          </div>
                          <ErrorMessage
                            className="mt-1 ml-1 poppins-400 text-red-500"
                            name="message"
                            component="div"
                          />
                        </div>
                        <div className="mt-8">
                          <button
                            className="hover:bg-[#104662] py-3.5 text-[18px] rounded-[3px] text-[white] transition-all w-full text-center poppins-700 bg-[#52C1B9]"
                            type="submit"
                          >
                            Send a message
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div className="offset-lg-1 pt-5 col-lg-5 max-md:mt-10  col-md-6 col-11">
                  <div className="max-lg:pl-7">
                    <div>
                      <h2 className="text-[#444762] text-[28px] md:text-[35px] lg:text-[44px] poppins-700">
                        Say hi, 👋
                      </h2>
                      <p className="text-[#464D65CC] poppins-400 text-[16px] lg:text-[18px] mt-10">
                      We would love to hear from you - either you are an investor, or seeking more clarifications, or wish us to evaluate your project for potential funding and fractionalisation support.
                      </p>
                      <p className="text-[#464D65CC] poppins-400 text-[16px] lg:text-[18px] mt-5">Feel free to reach us at:</p>
                    </div>
                    <div className="mt-8">
                      <a href="tel:+91 9967972553">
                        <div className="flex poppins-400 text-[#52C1B9] items-center">
                          <span>+91 9967972553</span>
                          <FaPhone className="text-[#52C1B9] ml-2" />
                        </div>
                      </a>
                      <div className="mt-5">
                        <a href="mailto:reachus@fandora.app">
                          <div className="flex poppins-400 text-[#52C1B9] items-center">
                            <span>reachus@fandora.app</span>
                            <BsSend className="text-[#52C1B9] text-[18px] ml-2" />
                          </div>
                        </a>
                      </div>
                      <div className="mt-5">
                        <a href="https://twitter.com/nftonfandora?lang=en">
                          <div className="flex poppins-400 text-[#52C1B9] items-center">
                          <span className="pr-2">nftonfandora</span><FaXTwitter></FaXTwitter>
                          </div>
                        </a>
                      </div>
                      <div className="mt-7">
                        <p className="text-[#627C89] poppins-400 leading-[32px] text-[16px] lg:text-[20px]">
                          <span className="poppins-700">Our Address:</span>{" "}
                          Sunrise Incubation hub, Hill- 3 IT SEZ, Madhurawada,
                          Visakhapatnam, Andhra Pradesh 530048
                        </p>
                      </div>
                    </div>
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

export default ContactUs;
