"use client";
import React, { useEffect, useState } from "react";
import OfferBanner from "../../component/ShareComponent/SearchBar";
import SearchBar from "../../component/ShareComponent/SearchBar";
import BrandNameAndCart from "../../component/ShareComponent/BrandNameAndCart";
import Navbar from "../../component/ShareComponent/navbar";

import { Formik, Field, Form } from "formik";

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";

import BrandLogo from "../../../assest/logo/brandLogo.png";

// CSS Style Import
import styles from "../../../style/login.module.css";
import {
  useAddUserInfoMutation,
  useUserLoginInfoMutation,
} from "@/app/redux/features/api/apiSlice";

const LoginPage = () => {
  const [handlePasswordVisibility, setHandlePasswordVisibility] =
    useState(false);
  const [handlePasswordVisibility2, setHandlePasswordVisibility2] =
    useState(false);

  const [createAccount, setCreateAccount] = useState(false);

  // redux api call
  const [
    postUserInfoData,
    {
      isLoading: isLoadingUserInfo,
      isSuccess: isSuccessUserInfo,
      error: userInfoError,
    },
  ] = useAddUserInfoMutation();

  const [
    postUserLoginInfoData,
    {
      isLoading: isLoadingUserLogin,
      isSuccess: isSuccessUserLogin,
      error: userLoginError,
    },
  ] = useUserLoginInfoMutation();
  // console.log(postUserInfoData);

  useEffect(() => {
    if (isSuccessUserLogin) {
      return <p>lodding </p>;
    }
  }, [isSuccessUserLogin]);

  return (
    <div>
      <OfferBanner></OfferBanner>
      <SearchBar></SearchBar>
      <BrandNameAndCart></BrandNameAndCart>
      <Navbar></Navbar>

      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              <Image
                src={BrandLogo}
                className={`${styles.brandLogoStyleLogin}`}
              ></Image>
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {createAccount ? <> Create Your Account</> : <>Login</>}
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {createAccount ? (
              <>
                <Formik
                  initialValues={{
                    username: "",
                    // contactNumber: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    console.log(values);
                    postUserInfoData(values);
                  }}
                >
                  {({ values }) => (
                    <Form className="space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Name
                        </label>
                        <div className="mt-2">
                          <Field
                            id="username"
                            name="username"
                            placeholder="jane"
                            type="text"
                            autoComplete="text"
                            required
                            className="text-md block px-3 py-2  rounded-lg w-full 
                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* <div>
                        <label
                          htmlFor="PhoneNumber"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <Field
                            id="PhoneNumber"
                            name="PhoneNumber"
                            placeholder="01XXXXXXXXX"
                            type="Number"
                            autoComplete="Number"
                            required
                            className="text-md block px-3 py-2  rounded-lg w-full 
                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                      </div> */}

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                            autoComplete="email"
                            required
                            className="text-md block px-3 py-2  rounded-lg w-full 
                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>

                        <div className="mt-2">
                          <div class="relative">
                            <Field
                              id="password"
                              name="password"
                              placeholder="***"
                              type={
                                handlePasswordVisibility ? "text" : "password"
                              }
                              autoComplete="password"
                              required
                              className="text-md block px-3 py-2  rounded-lg w-full 
                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />

                            {handlePasswordVisibility ? (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility(false)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEye className="h-6 w-6" />
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility(true)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEyeInvisible className="h-6 w-6" />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Confirm Password
                        </label>

                        <div className="mt-2">
                          <div class="relative">
                            <Field
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="***"
                              type={
                                handlePasswordVisibility2 ? "text" : "password"
                              }
                              autoComplete="password"
                              required
                              className="text-md block px-3 py-2  rounded-lg w-full 
                  bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />

                            {handlePasswordVisibility2 ? (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility2(false)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEye className="h-6 w-6" />
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility2(true)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEyeInvisible className="h-6 w-6" />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => setCreateAccount(true)}
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

                <div class="flex justify-between mt-4">
                  <button onClick={() => setCreateAccount(false)}>
                    Already Have An Account?{" "}
                    <span className="text-red-700 underline">LOGIN</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    toggle: false,
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    postUserLoginInfoData(values);
                    // console.log(values);
                  }}
                >
                  {({ values }) => (
                    <Form className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                            autoComplete="email"
                            required
                            className="text-md block px-3 py-2  rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>

                        <div className="mt-2">
                          <div class="relative">
                            <Field
                              id="password"
                              name="password"
                              placeholder="Doe"
                              type={
                                handlePasswordVisibility ? "text" : "password"
                              }
                              autoComplete="email"
                              required
                              className="text-md block px-3 py-2  rounded-lg w-full 
                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />

                            {handlePasswordVisibility ? (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility(false)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEye className="h-6 w-6" />
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  onClick={() =>
                                    setHandlePasswordVisibility(true)
                                  }
                                  className="text-gray-600 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4"
                                >
                                  <AiFillEyeInvisible className="h-6 w-6" />
                                </div>
                              </>
                            )}
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
                          Sign in
                        </button>
                      </div>

                      <div class="flex justify-between">
                        <label class="block text-gray-500 font-bold my-4">
                          <Field
                            type="checkbox"
                            name="toggle"
                            class="leading-loose text-pink-600"
                          />
                          {/* {`${values.toggle}`} */}
                          <span class="py-2 ml-2 text-sm text-gray-600 leading-snug">
                            Remember Me
                          </span>
                        </label>
                        <label class="block text-gray-500 font-bold my-4">
                          <a
                            href="#"
                            class="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                          >
                            <span>Forgot Password?</span>
                          </a>
                        </label>
                      </div>
                    </Form>
                  )}
                </Formik>
              </>
            )}

            {createAccount ? (
              <></>
            ) : (
              <>
                <div>
                  <button
                    onClick={() => setCreateAccount(true)}
                    className="mt-3 text-lg font-semibold 
                    bg-gray-800 w-full text-white rounded-lg
                    px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    Create account
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default LoginPage;
