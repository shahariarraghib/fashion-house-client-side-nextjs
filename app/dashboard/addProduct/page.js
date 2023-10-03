"use client";
import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

const page = () => {
  return (
    <div className="p-6 sm:p-10 space-y-6 ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
            {({ values }) => (
              <Form className="space-y-6">
                {/* product Quantity */}
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
                                  name={`friends.${index}.name`}
                                  placeholder="Jane Doe"
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
                                  name={`friends.${index}.email`}
                                  placeholder="jane@acme.com"
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
                <div>
                  <button
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

export default page;
