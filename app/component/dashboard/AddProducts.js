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
  const [broder, setBroder] = useState(false);

  const [
    postAddProductData,
    {
      isLoading: isLoadingUserLogin,
      isSuccess: isSuccessUserLogin,
      error: userLoginError,
    },
  ] = useAddProductMutation();

  // useEffect(() => {
  //   if (userLoginError) {
  //     return <p>{userLoginError} </p>;
  //   }
  // }, [userLoginError]);
  return (
    <div className="p-6 sm:p-10 space-y-6 ">
      {/* mt-10 sm:mx-auto sm:w-full sm:max-w-sm */}
      <div className="">
        <>
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
              <Form className="space-y-6" enctype="multipart/form-data">
                {/* product Quantity */}
                {/* enctype="multipart/form-data" */}
                <div className="bg-gray-100 p-4">
                  <div className="min-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left column */}
                    <div className="col-span-1">
                      <h2 className="text-2xl font-semibold mb-4">
                        Product Information
                      </h2>

                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-600 font-medium mb-2"
                        >
                          Product Name
                        </label>
                        <div className="mt-2">
                          <Field
                            placeholder="Enter Product Name"
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="text"
                            required
                            className="w-full bg-white border border-gray-300 rounded py-2 px-4 border-transparent focus:border-transparent focus:ring-0 "
                          />
                        </div>
                      </div>
                      {/* Price */}
                      <div className="mb-4">
                        <label
                          htmlFor="price"
                          className="block text-gray-600 font-medium mb-2"
                        >
                          Product Price
                        </label>
                        <div className="mt-2">
                          <Field
                            placeholder="Enter Product Price"
                            id="price"
                            name="price"
                            type="number"
                            autoComplete="text"
                            required
                            className="w-full bg-white border border-gray-300 rounded py-2 px-4 border-transparent focus:border-transparent focus:ring-0 "
                          />
                        </div>
                      </div>
                      {/* Display the uploaded images */}
                      <label
                        htmlFor="image"
                        className="block text-gray-600 font-medium mb-2"
                      >
                        Add Product Images
                      </label>
                      <div className={`${styles.imageUplodeDivStyle} `}>
                        <div className="flex">
                          <div
                            className={`${styles.ploadProductImages}`}
                            onClick={() => {
                              fileRef.current.click(), setBroder(true);
                            }}
                          >
                            Upload Product Images
                          </div>
                          <div
                            className={`${styles.reset} ml-10`}
                            onClick={() => {
                              setImageURLs(), setBroder(false);
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

                      <div
                        className={
                          broder
                            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1 border-dashed border-2 border-black"
                            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-1 "
                        }
                      >
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

                      {/* Description */}
                      <div className="mb-4 mt-4">
                        <label
                          className="block text-gray-600 font-medium mb-2"
                          htmlFor="description"
                        >
                          Product Description
                        </label>
                        <Field
                          component="textarea"
                          rows="4"
                          placeholder="Enter product description"
                          id="description"
                          name="description"
                          type="textarea"
                          autoComplete="text"
                          required
                          className="w-full bg-white border border-gray-300 rounded py-2 px-4 border-transparent focus:border-transparent focus:ring-0"
                        ></Field>
                      </div>

                      {/* Product Materials */}
                      <div className="mb-4">
                        <label
                          htmlFor="productMaterials"
                          className="block text-gray-600 font-medium mb-2"
                        >
                          Product Materials
                        </label>
                        <div className="mt-2">
                          <Field
                            placeholder="Enter Product Materials"
                            id="productMaterials"
                            name="productMaterials"
                            type="text"
                            autoComplete="text"
                            // required
                            className="w-full bg-white border border-gray-300 rounded py-2 px-4 border-transparent focus:border-transparent focus:ring-0 "
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          id="my-radio-group"
                          htmlFor="productCategoryMaleFemaleandBaby"
                          className="block text-gray-600 font-medium mb-2"
                        >
                          Product Category Male, Female and Baby
                        </label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field
                              type="radio"
                              name="productCategoryMaleFemaleandBaby"
                              value="Male"
                            />
                            <span className="ml-2">Male</span>
                          </label>
                          <label className="m-4">
                            <Field
                              type="radio"
                              name="productCategoryMaleFemaleandBaby"
                              value="Female"
                            />
                            <span className="ml-2"> Female</span>
                          </label>
                          <label className="m-4">
                            <Field
                              type="radio"
                              name="productCategoryMaleFemaleandBaby"
                              value="Baby"
                            />
                            <span className="ml-2">Baby</span>
                          </label>
                          <div className="mt-4">
                            Selected Category:{" "}
                            {values.productCategoryMaleFemaleandBaby}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="col-span-1">
                      <h2 className="text-2xl font-semibold mb-4">
                        Product Details
                      </h2>
                      {/*  Product Details */}
                      <div className="pl-9">
                        <FieldArray name="productDetails">
                          {({ insert, remove, push }) => (
                            <div>
                              {values.productDetails.length > 0 &&
                                values.productDetails.map((friend, index) => (
                                  <div className="row" key={index}>
                                    {/*   Select Product Size */}
                                    <div className="col mb-3">
                                      <div
                                        role="group"
                                        aria-labelledby="my-radio-group"
                                      >
                                        <label
                                          htmlFor="username"
                                          className="block text-gray-600 font-medium mb-2"
                                        >
                                          Select Product Size
                                        </label>
                                        <label>
                                          <Field
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsSize`}
                                            value="S"
                                          />
                                          <span className="ml-2">S</span>
                                        </label>
                                        <label className="m-4">
                                          <Field
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsSize`}
                                            value="M"
                                          />
                                          <span className="ml-2">M</span>
                                        </label>
                                        <label className="m-4">
                                          <Field
                                            type="radio"
                                            name={`productDetails.${index}.pickedProductDetailsSize`}
                                            value="L"
                                          />
                                          <span className="ml-2">L</span>
                                        </label>
                                        <label className="m-4">
                                          <Field
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
                                    {/*   Select Product Size */}
                                    <div className="col mb-3">
                                      <label
                                        htmlFor={`productDetails.${index}.pickedProductDetailsColor`}
                                        className="block text-gray-600 font-medium mb-2"
                                      >
                                        Select Product Color
                                      </label>

                                      <label>
                                        <Field
                                          type="radio"
                                          name={`productDetails.${index}.pickedProductDetailsColor`}
                                          value="white"
                                        />
                                        <span className="ml-2">White</span>
                                      </label>
                                      <label className="m-4">
                                        <Field
                                          type="radio"
                                          name={`productDetails.${index}.pickedProductDetailsColor`}
                                          value="black"
                                        />
                                        <span className="ml-2">Black</span>
                                      </label>
                                      <label className="m-4">
                                        <Field
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

                                    <div className="col mb-3">
                                      <label
                                        htmlFor={`productDetails.${index}.productDetailsQuantity`}
                                        className="block text-gray-600 font-medium mb-2"
                                      >
                                        Product Quantity
                                      </label>
                                      <Field
                                        className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400  resize-none"
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

                                    <div className="col">
                                      <button
                                        type="button"
                                        className={`${styles.reset}`}
                                        onClick={() => remove(index)}
                                      >
                                        Remove Peoduct Details
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              <button
                                type="button"
                                className={`${styles.ploadProductImages}`}
                                onClick={() =>
                                  push({
                                    pickedProductDetailsSize: "",
                                    pickedProductDetailsColor: "",
                                    productDetailsQuantity: "",
                                  })
                                }
                              >
                                Add Peoduct Details
                              </button>
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      {/* <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                          Stock Quantity
                        </label>
                        <input
                          type="number"
                          className="w-full bg-white border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-400"
                          placeholder="Enter stock quantity"
                        />
                      </div> */}
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
                    ADD THIS PRODUCT
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
