"use client";
import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { setFieldValue } from "formik";
// CSS Style Import
import styles from "../../../style/addProduct.module.css";
import { useAddProductMutation } from "@/app/redux/features/api/apiSlice";
const AddProducts = () => {
  const fileRef = useRef(null);
  const [imageURLs, setImageURLs] = useState([]);
  const [showImageUplodeButton, setshowImageUplodeButton] = useState(false);
  const [index, setIndex] = useState(0);
  const [
    postAddProductData,
    {
      isLoading: isLoadingUserLogin,
      isSuccess: isSuccessUserLogin,
      error: userLoginError,
    },
  ] = useAddProductMutation();

  if (isLoadingUserLogin) {
    return <p>loding... </p>;
  }

  return (
    <div className="bg-gray-100 sm:p-4">
      {/* mt-10 sm:mx-auto sm:w-full sm:max-w-sm */}
      <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <div className="flex-1 md:p-0 lg:pt-2 lg:px-2 md:ml-2 flex flex-col">
          <div className="bg-cream-lighter p-4 shadow">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide sm:text-lg mb-6 font-bold text-sm text-orange-500 ">
                Create New product information
              </h2>
            </div>

            <Formik
              initialValues={{
                name: "",
                price: "",
                description: "",
                productMaterials: "",
                images: [],
                productCategoryMaleFemaleandBaby: "",
                productDetails: [
                  {
                    pickedProductDetailsSize: "",
                    pickedProductDetailsColor: "",
                    productDetailsQuantity: "",
                  },
                ],
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                postAddProductData(values);
                console.log(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form className="" enctype="multipart/form-data">
                  {/* product Quantity */}
                  <div className="md:flex mb-8">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm text-orange-400 ">
                        product information
                      </legend>
                      <p className="text-xs font-light text-red">
                        This entire section is required.
                      </p>
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                        >
                          Product Name{" "}
                          <span className="text-red-500">&nbsp;*</span>
                        </label>
                        <Field
                          placeholder="Enter Product Name"
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="text"
                          required
                          className="w-full shadow-inner p-4 border-0 border-transparent focus:border-transparent focus:ring-0"
                        />
                      </div>
                      <div className="md:flex mb-4">
                        <div className="md:flex-1 md:pr-3">
                          <label
                            htmlFor="price"
                            className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                          >
                            Product Price
                            <span className="text-red-500">&nbsp;*</span>
                          </label>

                          <Field
                            placeholder="Enter Product Price"
                            id="price"
                            name="price"
                            type="number"
                            autoComplete="text"
                            required
                            className="w-full shadow-inner p-4 border-0 border-transparent focus:border-transparent focus:ring-0 "
                          />
                        </div>
                        <div className="md:flex-1 md:pl-3">
                          <label
                            htmlFor="productMaterials"
                            className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold"
                          >
                            Product Materials
                            <span className="text-red-500">&nbsp;*</span>
                          </label>
                          <Field
                            placeholder="Enter Product Materials"
                            id="productMaterials"
                            name="productMaterials"
                            type="text"
                            autoComplete="text"
                            required
                            className="w-full shadow-inner p-4 border-0 border-transparent focus:border-transparent focus:ring-0 "
                          />

                          {/* <span className="text-xs mb-4 font-thin">
                            We lied, this isn't required.
                          </span> */}
                        </div>
                      </div>
                      <div className="md:flex mb-4">
                        <div className="md:flex-1 md:pl-3">
                          <label
                            id="my-radio-group"
                            htmlFor="productCategoryMaleFemaleandBaby"
                            className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold -ml-2"
                          >
                            Product Category Male, Female and Baby
                            <span className="text-red-500">&nbsp;*</span>
                          </label>

                          <div role="group" aria-labelledby="my-radio-group">
                            <label>
                              <Field
                                className={`${styles.inputRadioOn}`}
                                type="radio"
                                name="productCategoryMaleFemaleandBaby"
                                value="Male"
                                required
                              />
                              <span className="ml-2">Male</span>
                            </label>
                            <label className="m-4">
                              <Field
                                className={`${styles.inputRadioOn}`}
                                type="radio"
                                name="productCategoryMaleFemaleandBaby"
                                value="Female"
                                required
                              />
                              <span className="ml-2"> Female</span>
                            </label>
                            <label className="m-4">
                              <Field
                                className={`${styles.inputRadioOn}`}
                                type="radio"
                                name="productCategoryMaleFemaleandBaby"
                                value="Baby"
                                required
                              />
                              <span className="ml-2">Baby</span>
                            </label>
                            <div className="mt-4 -ml-2">
                              <span className="text-sm text-orange-400">
                                {" "}
                                Selected Category:
                              </span>
                              <span className="text-sm text-green-600">
                                {" "}
                                {values.productCategoryMaleFemaleandBaby}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                      <label
                        className="uppercase tracking-wide text-sm text-orange-400"
                        htmlFor="description"
                      >
                        Product Description
                      </label>
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <Field
                        component="textarea"
                        rows="4"
                        placeholder="Enter product description"
                        id="description"
                        name="description"
                        type="textarea"
                        autoComplete="text"
                        // required
                        className="w-full shadow-inner p-4 border-0 border-transparent focus:border-transparent focus:ring-0"
                      ></Field>
                    </div>
                  </div>
                  {/* add product images */}

                  <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                      <label
                        htmlFor="image"
                        className="uppercase tracking-wide text-sm text-sm text-orange-400"
                      >
                        Add Product Images
                      </label>
                    </div>
                    <div className="md:flex-1 px-3 text-center">
                      <div
                        className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer"
                        onClick={() => {
                          fileRef.current.click();
                        }}
                      >
                        <div className="absolute">
                          {showImageUplodeButton ? (
                            <>
                              <div className="flex justify-start">
                                {imageURLs?.map((image, index) => (
                                  <div key={index} className=" flex">
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
                            </>
                          ) : (
                            <>
                              <div className="flex flex-col items-center ">
                                <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                                <span className="block text-gray-400 font-normal">
                                  Attach you files here
                                </span>
                                <span className="block text-gray-400 font-normal">
                                  or
                                </span>

                                <span className="block text-blue-400 font-normal">
                                  Browse files
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-gray-400">
                        <span className="text-sm text-red-600">
                          Accepted file type: Image only
                        </span>
                        <span className="flex items-center ">
                          <button
                            type="button"
                            onClick={() => {
                              setImageURLs();
                            }}
                          >
                            reset image
                          </button>
                        </span>
                      </div>

                      <div>
                        <input
                          required
                          ref={fileRef}
                          hidden
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
                            setshowImageUplodeButton(true);
                          }}
                          multiple // Allow selecting multiple files
                        />
                      </div>
                    </div>
                  </div>
                  {/* main */}
                  {/* <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                      <label
                        htmlFor="image"
                        className="uppercase tracking-wide text-sm"
                      >
                        Add Product Images
                      </label>
                    </div>
                    <div className="md:flex-1 px-3 text-center">
                      <div className={`${styles.imageUplodeDivStyle} `}>
                        <div className="flex">
                          <div
                            className={`${styles.ploadProductImages}`}
                            onClick={() => {
                              fileRef.current.click(), setshowImageUplodeButton(true);
                            }}
                          >
                            Upload Product Images
                          </div>
                          <div
                            className={`${styles.reset} ml-10`}
                            onClick={() => {
                              setImageURLs(), setshowImageUplodeButton(false);
                            }}
                          >
                            Reset
                          </div>
                        </div>

                        <div>
                          <input
                            ref={fileRef}
                            hidden
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
                                const fileURL =
                                  URL.createObjectURL(selectedFile);
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
                      </div>

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
                  </div> */}

                  {/* add product size color quantity*/}
                  <div className="md:flex mb-8">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm text-orange-400">
                        Product Details
                      </legend>
                    </div>

                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <FieldArray name="productDetails">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.productDetails.length > 0 &&
                              values.productDetails.map((friend, index) => (
                                <div key={index}>
                                  <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                      {/*   Select Product Size */}
                                      <div className="md:flex-1 md:pl-3">
                                        <div
                                          role="group"
                                          aria-labelledby="my-radio-group"
                                        >
                                          <label
                                            htmlFor="username"
                                            className="block text-gray-600 font-medium mb-2 -ml-2"
                                          >
                                            Select Product Size
                                          </label>
                                          <label>
                                            <Field
                                              className={`${styles.inputRadioOn}`}
                                              type="radio"
                                              name={`productDetails.${index}.pickedProductDetailsSize`}
                                              value="S"
                                            />
                                            <span className="ml-2">S</span>
                                          </label>
                                          <label className="m-4">
                                            <Field
                                              className={`${styles.inputRadioOn}`}
                                              type="radio"
                                              name={`productDetails.${index}.pickedProductDetailsSize`}
                                              value="M"
                                            />
                                            <span className="ml-2">M</span>
                                          </label>
                                          <label className="m-4">
                                            <Field
                                              className={`${styles.inputRadioOn}`}
                                              type="radio"
                                              name={`productDetails.${index}.pickedProductDetailsSize`}
                                              value="L"
                                            />
                                            <span className="ml-2">L</span>
                                          </label>
                                          <label className="m-4">
                                            <Field
                                              className={`${styles.inputRadioOn}`}
                                              type="radio"
                                              name={`productDetails.${index}.pickedProductDetailsSize`}
                                              value="XL"
                                            />
                                            <span className="ml-2">XL</span>
                                          </label>
                                          {/* <div className="mt-4">
                                        Selected Category: {values}
                                      </div> */}
                                          <ErrorMessage
                                            name={`productDetails.${index}.pickedProductDetailsSize`}
                                            component="div"
                                            className="field-error"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="md:flex-1 md:pl-3">
                                      {/*   Select Product Size */}
                                      <div className="md:flex-1 md:pl-3">
                                        <label
                                          htmlFor={`productDetails.${index}.pickedProductDetailsColor`}
                                          className="block text-gray-600 font-medium mb-2 -ml-2"
                                        >
                                          Select Product Color
                                        </label>

                                        <label>
                                          <Field
                                            className={`${styles.inputRadioOn}`}
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsColor`}
                                            value="white"
                                          />
                                          <span className="ml-2">White</span>
                                        </label>
                                        <label className="m-4">
                                          <Field
                                            className={`${styles.inputRadioOn}`}
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsColor`}
                                            value="black"
                                          />
                                          <span className="ml-2">Black</span>
                                        </label>
                                        <label className="m-4">
                                          <Field
                                            className={`${styles.inputRadioOn}`}
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsColor`}
                                            value="red"
                                          />
                                          <span className="ml-2">Red</span>
                                        </label>
                                        {/* <div className="mt-4">
                                        Selected Category: {values}
                                      </div> */}
                                        <ErrorMessage
                                          name={`productDetails.${index}.pickedProductDetailsColor`}
                                          component="div"
                                          className="field-error"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="md:flex mb-4">
                                    <div className="md:flex-1 md:pr-3">
                                      <div className="md:flex-1 md:pr-3">
                                        <label
                                          htmlFor={`productDetails.${index}.productDetailsQuantity`}
                                          className="block text-gray-600 font-medium mb-2"
                                        >
                                          Product Quantity
                                        </label>
                                        <Field
                                          className="w-full shadow-inner p-4 border-0 border-transparent focus:border-transparent focus:ring-0"
                                          placeholder="Enter product description"
                                          name={`productDetails.${index}.productDetailsQuantity`}
                                          type="number"
                                        />
                                        <ErrorMessage
                                          name={`productDetails.${index}.productDetailsQuantity`}
                                          component="div"
                                          className="field-error"
                                        />
                                      </div>
                                    </div>
                                    <div className="md:flex-1 md:pl-3 flex  mt-8">
                                      {index >= 1 ? (
                                        <>
                                          <button
                                            type="button"
                                            className="transition duration-500 bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => remove(index)}
                                          >
                                            Remove This Peoduct Details
                                          </button>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            <button
                              type="button"
                              className="transition duration-500 bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => {
                                push({
                                  pickedProductDetailsSize: "",
                                  pickedProductDetailsColor: "",
                                  productDetailsQuantity: "",
                                }),
                                  setIndex(1);
                              }}
                            >
                              Add Another Peoduct Details
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark" />
                  <div className="md:flex-1 px-3 text-center md:text-right">
                    <input type="hidden" name="sponsor" value="0" />
                    <button
                      className="transition duration-500 bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      value="ADD PRODUCT"
                    >
                      ADD PRODUCT
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
