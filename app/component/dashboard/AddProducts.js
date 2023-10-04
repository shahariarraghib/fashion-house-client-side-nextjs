"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { setFieldValue } from "formik";
// CSS Style Import
import styles from "../../../style/addProduct.module.css";
const AddProducts = () => {
  const [imageURLs, setImageURLs] = useState([]);
  return (
    <div className="p-6 sm:p-10 space-y-6 ">
      {/* mt-10 sm:mx-auto sm:w-full sm:max-w-sm */}
      <div className="">
        <>
          <Formik
            initialValues={{
              friends: [
                {
                  name: "",
                  email: "",
                },
              ],
              images: [], // Add an array to store the uploaded images
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
              console.log(values);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-6">
                {/* product Quantity */}

                <div className="bg-gray-100 p-4">
                  <div className="min-w-6xl mx-auto grid grid-cols-2 gap-10">
                    {/* Left column */}
                    <div className="col-span-1">
                      <h2 className="text-2xl font-semibold mb-4">
                        Product Information
                      </h2>

                      <div className="mb-4">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Product Name
                        </label>
                        <div className="mt-2">
                          <Field
                            placeholder="Enter Product Name"
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="text"
                            required
                            className="w-full bg-white border border-gray-300 rounded py-2 px-4 order-transparent focus:border-transparent focus:ring-0 "
                          />
                        </div>
                      </div>
                      {/* Display the uploaded images */}
                      <div>
                        {" "}
                        <input
                          type="file"
                          onChange={(event) => {
                            const selectedFiles = event.target.files;

                            const imageFiles = [];
                            const fileURLs = [];

                            for (let i = 0; i < selectedFiles.length; i++) {
                              const selectedFile = selectedFiles[i];
                              // Set the field value with the array of image File
                              imageFiles.push(selectedFile);
                              // Set the field value with the array of image URLs
                              const fileURL = URL.createObjectURL(selectedFile);
                              fileURLs.push(fileURL);
                            }

                            // Set the field value with the array of image File
                            setFieldValue("images", [
                              ...values.images,
                              ...imageFiles,
                            ]);
                            // Set the field value with the array of image URLs
                            setImageURLs([...imageURLs, ...fileURLs]);
                          }}
                          multiple // Allow selecting multiple files
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1">
                        {imageURLs?.map((image, index) => (
                          <div key={index} className="p-1 flex justify-center">
                            <img
                              key={index}
                              src={image}
                              width="100px"
                              height="50px"
                              alt={`Uploaded ${index}`}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                          Description
                        </label>
                        <textarea
                          className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400 h-32 resize-none"
                          placeholder="Enter product description"
                        ></textarea>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="col-span-1">
                      <h2 className="text-2xl font-semibold mb-4">
                        Product Details
                      </h2>
                      <div>
                        <FieldArray name="friends">
                          {({ insert, remove, push }) => (
                            <div>
                              {values.friends.length > 0 &&
                                values.friends.map((friend, index) => (
                                  <div className="row" key={index}>
                                    <div className="col">
                                      <label htmlFor={`friends.${index}.name`}>
                                        Name
                                      </label>
                                      <Field
                                        className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400  resize-none"
                                        placeholder="Enter product description"
                                        name={`friends.${index}.name`}
                                        type="text"
                                      />
                                      <ErrorMessage
                                        name={`friends.${index}.name`}
                                        component="div"
                                        className="field-error"
                                      />
                                    </div>
                                    <div className="col">
                                      <label htmlFor={`friends.${index}.email`}>
                                        Email
                                      </label>
                                      <Field
                                        className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400  resize-none"
                                        placeholder="Enter product description"
                                        name={`friends.${index}.email`}
                                        type="email"
                                      />
                                      <ErrorMessage
                                        name={`friends.${index}.name`}
                                        component="div"
                                        className="field-error"
                                      />
                                    </div>
                                    <div className="col">
                                      <button
                                        type="button"
                                        className="secondary"
                                        onClick={() => remove(index)}
                                      >
                                        X
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => push({ name: "", email: "" })}
                              >
                                Add Friend
                              </button>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                          Stock Quantity
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400"
                          placeholder="Enter stock quantity"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-3 text-lg font-semibold 
                    bg-gray-800 w-full text-white rounded-lg
                    px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    Create account
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      </div>
    </div>
  );
};

export default AddProducts;
