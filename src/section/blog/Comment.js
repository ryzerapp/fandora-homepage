"use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { config } from "@/config";
const Comment = ({ id }) => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };
  const [comment, setComment] = useState([]);
  const fetchComment = async (id) => {
    const result = await fetch(
      `${config.API_URL}/config/blog/comment/get/${id}?limit=10`,
      {
        cache: "no-cache",
      }
    );
    const { data } = await result.json();
    setComment(data);
  };
  useEffect(() => {
    if (id) {
      fetchComment(id);
    }
  }, [id]);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    comment: Yup.string().required("Message is required"),
  });
  const onSubmit = async (values, { resetForm }) => {
    values.blog_id = id;
    try {
      const result = await fetch(
        `${config.API_URL}/config/blog/comment/add`,
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
        fetchComment(id);
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
      <div className="row mt-10">
        <div className="col-12">
          <h2 className="text-[30px] poppins-700 text-[#181b31]">
            Leave a comment
          </h2>
        </div>
        <div className="col-12 mt-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="row">
                <div className="col-lg-4 col-6">
                  <div>
                    <Field
                      placeholder="Name*"
                      name="name"
                      id="name"
                      className="ring-0 bg-[white] outline-none pb-2 focus:border-b-[1.5px] w-[100%] poppins-400 text-[#807575] focus:border-[black] border-b-[1px] border-[#d8dbe2]"
                    />
                    <ErrorMessage
                      className="mt-2 ml-1 poppins-400 text-red-500"
                      name="name"
                      component="div"
                    />
                  </div>
                </div>
                <div className="col-lg-4 max-sm:mt-10 col-sm-6 col-12">
                  <div>
                    <Field
                      placeholder="Email*"
                      name="email"
                      className="ring-0 bg-[white] outline-none pb-2 focus:border-b-[1.5px] w-[100%] poppins-400 text-[#807575] focus:border-[black] border-b-[1px] border-[#d8dbe2]"
                    />
                    <ErrorMessage
                      className="mt-2 ml-1 poppins-400 text-red-500"
                      name="email"
                      component="div"
                    />
                  </div>
                </div>
                <div className="col-lg-4 max-lg:mt-10 col-12">
                  <div>
                    <Field
                      placeholder="Website"
                      name="website"
                      id="website"
                      className="ring-0 bg-[white] outline-none pb-2 focus:border-b-[1.5px] w-[100%] poppins-400 text-[#807575] focus:border-[black] border-b-[1px] border-[#d8dbe2]"
                    />
                  </div>
                </div>
                <div className="col-12 mt-10">
                  <div>
                    <Field
                      as="textarea"
                      placeholder="comment*"
                      name="comment"
                      id="comment"
                      className="ring-0 h-[150px] bg-[white]  outline-none pb-2 focus:border-b-[1.5px] w-[100%] poppins-400 text-[#807575] focus:border-[black] border-b-[1px] border-[#d8dbe2]"
                    />
                    <ErrorMessage
                      className="mt-2 ml-1 poppins-400 text-red-500"
                      name="comment"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-10">
                <div className="col-12 flex justify-start items-center">
                  <button
                    type="submit"
                    className="comment-submit-btn rounded-[100px] py-4 px-[3rem] poppins-700 text-[14px] text-[white] bg-[#181b31]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="row mt-10">
        {comment.length > 0
          ? comment.map((item, index) => (
              <div key={index} className="col-12 mt-10">
                <div className="flex items-center">
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        alt="user"
                        className="rounded-[50%]"
                        src="/assets/img/png/user.png"
                      />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-[#16171e] poppins-700 text-[16px]">
                      {item.name}
                    </h2>
                    <p className="poppins-400 text-[12px]">1 minute ago</p>
                  </div>
                </div>
                <div className="pl-[5.5rem]">
                  <p className="poppins-400 text-[16px]  text-[#627C89]">
                    {item.comment}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Comment;
