"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const ContactForm = () => {
  const field = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "subject",
      type: "text",
    },
    {
      name: "message",
      type: "text",
    },
    
  ];

  const defaultValue = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    subject: yup.string().required("Subject is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, {
        message: "Phone number must be exactly 10 digits",
        excludeEmptyString: true,
      }),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // const response = await Contactus(values);
    console.log(values);
    resetForm();
  };

  return (
    <div className=" w-4/5 mx-auto p-4 shadow-lg rounded  my-20 flex flex-col sm:flex-row">
      <div className=" w-full md:w-1/2 sm:pr-4 mb-4 sm:mb-0">
        <img
          src="https://media.istockphoto.com/id/1188502269/photo/a-man-in-a-shirt-holds-a-smartphone-with-his-hand-abstract-phone-internet-and-mail-icons-the.jpg?s=612x612&w=0&k=20&c=s1nfMOqfOGJNqfPs19YdNFmybXC3vMaqLJPpJjfgiO4="
          className="w-full h-full object-fill rounded"
        />
      </div>
      <div className="w-full md:w-1/2 sm:pl-4">
        <h1 className="text-center text-2xl font-bold text-primary mb-4">
          Contact Us
        </h1>
        <hr className="mb-4" />
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {field.map((item, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={item.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </label>
                <Field
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  placeholder={`Enter your ${item.name}`}
                />
                <ErrorMessage
                  name={item.name}
                  component="div"
                  className="text-red-600 mt-1 text-sm"
                />
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Reset
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
