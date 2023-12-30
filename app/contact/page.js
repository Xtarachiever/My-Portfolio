"use client";
import React from "react";
import { useFormik } from "formik";
import ValidateContactUs from "@/lib/validate";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validate: ValidateContactUs,
    onSubmit,
  });

  async function onSubmit(values) {
    const data = await fetch('/api/contact', {
      method: 'POST',
      body:  JSON.stringify(values)
    });

    if(data.ok){
      toast.success("Email submitted successfully",{
        position: toast.POSITION.TOP_RIGHT
      });
      formik.resetForm();
    }else{
      toast.error("Check Network Connection",{
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <ToastContainer />
      <div className="contact-image">
        <img src="/contact-us.png" alt="contact-me" />
      </div>
      <div className="contact-form sm:ml-5 w-full">
        <form method="POST" onSubmit={formik.handleSubmit}>
          <div className="w-full input-div">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-field"
              value={formik.values.email}
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 text-center pt-2">
                {formik.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-full input-div">
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="input-field"
              value={formik.values.subject}
              onChange={formik.handleChange}
              {...formik.getFieldProps("subject")}
            />
            {formik.errors.subject && formik.touched.subject ? (
              <p className="text-red-500 text-center pt-2">
                {formik.errors.subject}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-full input-div">
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              className="input-field"
              id="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.errors.message && formik.touched.email ? (
              <p className="text-red-500 text-center pt-2">
                {formik.errors.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            className="text-white bg-orange px-6 py-3 font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
