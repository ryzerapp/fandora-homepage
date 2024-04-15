"use client";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { config } from "@/config";
const Join = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const result = await fetch(
        `${config.API_URL}/config/joinwaitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await result.json();
      if (data.type == "success") {
        toast.success(data.message);
        resetForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <ToastContainer />
      <section className="rz-join-section py-20">
        <div className="bs-container">
          <div className="row items-center">
            <div className="col-lg-6">
              <div>
                <h2 className="xl:leading-[55px] lg:leading-[50px] sm:leading-[45px] leading-[32px]  max-lg:text-center text-[23px] sm:text-[30px] xl:text-[40px] lg:text-[37px] poppins-700 text-[#45485F]">
                  Take a step toward your financial freedom
                </h2>
                <p className="text-[#15566C73] max-lg:text-center mt-5 poppins-500 text-[18px]">
                  {/* It's time to buy shares of an asset as low as ₹10,000 */}
                </p>
                <div className="xl:my-10 my-5 max-xl:mb-8 max-md:px-1 max-lg:px-20 xl:pr-20">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    <Form>
                      <div className="rz-shadow-review py-4 xs:py-5 justify-between flex items-center bg-[white] rounded px-5 sm:px-8">
                        <Field
                          name="email"
                          id="email"
                          className="border-none flex-1 outline-none bg-[white] xs:text-[18px] text-[#8081AB] hover:text-black rz-email-input"
                          placeholder="Your Email Address"
                        />
                        <button
                          type="submit"
                          className="bg-none ml-3 sm:ml-5 flex items-center uppercase  text-[#52C1B9] poppins-400"
                        >
                          <span className="max-sm:hidden">Join Waitlist</span>
                          <FaArrowRight className="ml-3" />
                        </button>
                      </div>
                      <ErrorMessage
                        className="mt-1 ml-1 poppins-400 text-red-500"
                        name="email"
                        component="div"
                      />
                    </Form>
                  </Formik>
                </div>
                <div className="flex max-lg:justify-center items-center">
                  <div>
                    <img
                      alt="polygon"
                      className="w-[110px]"
                      src="/assets/img/png/polygon.png"
                    />
                  </div>
                  <p className="text-[black] text-xs ml-4 poppins-400 my-0">
                    A Blockchain based asset tokenization By Polygon ERC-20
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 max-lg:hidden">
              <div>
                <div className="flex-center">
                  <img
                    alt="A Blockchain based asset tokenization By Polygon ERC-20"
                    className="rz-hero-img w-[70%]"
                    src="/assets/img/png/rocket.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="bs-container">
          <div className="row justify-center">
            <div className="col-lg-8 col-xs-10 col-11">
              <h2 className="text-center text-[23px] xs:text-[25px] sm:text-[30px] md:text-[40px] poppins-700 text-[#45485F]">
                Let's join our community
              </h2>
              <p className="text-[#0E3F53A6] text-center xs:text-[17px] mt-5 poppins-500">
                Join our whatsapp community and be the first few to access early
                bird property offerings that typically not available for others.
              </p>
              <div className="flex justify-center mt-10">
                <Link
                  href={"https://chat.whatsapp.com/Bji0kQvGYeg8D9GnR1q08e"}
                  target="_blank"
                >
                  <button className="bg-[black] hover:bg-[#5740C9] max-xs:text-sm transition-all  flex-items-center px-6 xs:px-8 py-3 xs:py-4 rounded-[30px]  poppins-500  text-[white]">
                    <FaTelegramPlane className="mr-3 text-[20px]" />
                    <span>Join Whatsapp</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
