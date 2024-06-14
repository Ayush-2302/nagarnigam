"use client";
import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import QRCode from "qrcode.react";
import fetchUserDetails from "@/helper/apiservices/fetchUserDetails";
import { newContext } from "@/context/contextFun";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  idInput: Yup.string()
    .length(17, "Please enter exactly 17 characters.")
    .required("This field is required."),
});

const BarcodeGenerator = () => {
  const { user } = useContext(newContext);
  const router = useRouter();
  console.log(user, "user");
  const [showModal, setShowModal] = useState(false);
  const [qrValue, setQrValue] = useState({});

  const handleGenerate = async (values) => {
    await fetchData(values.idInput);
    setShowModal(true);
    router.push(`${values.idInput}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fetchData = async (idInput) => {
    const response = await fetchUserDetails(idInput);
    setQrValue(response);
    console.log(qrValue, "qrvalue");
    console.log(response, "response");
  };
  if (!user) {
    // router.push("/login");
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594581979864-36977b15d0dc?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col md:flex-row w-3/4 mx-auto my-0 gap-10  bg-white bg-opacity-90 p-10 rounded-lg shadow-lg">
          <div className="md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <img
              src="https://unsplash.com/photos/FHnnjk1Yj7Y/download?force=true&w=1920"
              alt="Side"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center text-center space-y-2">
            <label
              htmlFor="idInput"
              className="text-lg font-bold uppercase text-gray-700"
            >
              Enter Seventeen Digit ID  For Check Status
            </label>
            <p className="text-gray-600">For Example (0909001001000261R)</p>
            <Formik
              initialValues={{ idInput: "" }}
              validationSchema={validationSchema}
              onSubmit={handleGenerate}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Field
                    id="idInput"
                    name="idInput"
                    placeholder="Enter Seventeen Digit ID"
                    className="p-4 text-lg border-2  rounded w-full mt-5"
                  />
                  <ErrorMessage
                    name="idInput"
                    component="p"
                    className="text-red-500"
                  />
                  <button
                    type="submit"
                    className={`bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mt-4 w-full md:w-auto ${
                      !isValid || !dirty ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isValid || !dirty}
                  >
                    Check Your Status
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* {showModal && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="modal bg-white rounded-lg p-8 max-w-sm md:max-w-md lg:max-w-lg relative">
        <span
          className="close absolute top-0 right-0 m-4 text-xl cursor-pointer"
          onClick={handleCloseModal}
        >
          &times;
        </span>
        <QRCode
          value={`http://localhost:3000/${qrValue.id}`}
          size={256}
        />
      </div>
    </div>
  )} */}
      </div>
    </>
  );
};

export default BarcodeGenerator;
