"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import BrandLogo from "../../../assest/logo/brandLogo.png";

// CSS Style Import
import styles from "../../../style/brandNameAndCart.module.css";

const BrandNameAndCart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // state for shopping cart
  const [shoppingCartEffect, setShoppingCartEffect] = useState(false);

  // state for My Wish List
  const [MyWishListEffect, setMyWishListEffect] = useState(false);

  console.log(shoppingCartEffect);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // function for shopping cart
  const openshoppingCartEffect = () => {
    setShoppingCartEffect(true);
  };

  const closeshoppingCartEffect = () => {
    setShoppingCartEffect(false);
  };

  // function for My Wish Lists
  const openMyWishList = () => {
    setMyWishListEffect(true);
  };

  const closeMyWishList = () => {
    setMyWishListEffect(false);
  };

  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-black">
                <div>
                  <Image
                    src={BrandLogo}
                    className={`${styles.brandImageStyle}`}
                  ></Image>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <div className={`${styles.shoppingCartWrapper}`}>
                <div
                  className={`${styles.shoppingCartStyle} flex items-center  px-4 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                >
                  {shoppingCartEffect ? (
                    <>
                      <div className={`${styles.shopping} mr-2 `}>
                        <AiOutlineShopping
                          className={`${styles.shoppingIcon} h-5 w-5 mb-0.5`}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mr-2">
                        <AiOutlineShopping
                          className="h-5 w-5 mb-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}
                  <div
                    onMouseEnter={openshoppingCartEffect}
                    onMouseLeave={closeshoppingCartEffect}
                  >
                    <span>Shopping Cart</span>
                  </div>

                  <div
                    onMouseEnter={openshoppingCartEffect}
                    onMouseLeave={closeshoppingCartEffect}
                    className={`${styles.cartAmountStyle}`}
                  >
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.shoppingCartWrapper}`}>
                <div
                  className={`${styles.shoppingCartStyle} flex items-center  px-4 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                >
                  {MyWishListEffect ? (
                    <>
                      <div className={`${styles.shopping} mr-2 `}>
                        <IoIosHeartEmpty
                          className={`${styles.shoppingIcon} h-5 w-5 mb-0.5`}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mr-2">
                        <IoIosHeartEmpty
                          className="h-5 w-5 mb-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}
                  <div
                    onMouseEnter={openMyWishList}
                    onMouseLeave={closeMyWishList}
                  >
                    <span>My Wish List</span>
                  </div>

                  <div
                    onMouseEnter={openMyWishList}
                    onMouseLeave={closeMyWishList}
                    className={`${styles.cartAmountStyle}`}
                  >
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className={`${styles.shoppingCartStyle} flex items-center mt-1 px-4 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                >
                  <Link href="/login">
                    <div>Sign In or Create an Account</div>
                  </Link>
                </div>
              </div>

              <div>
                <div
                  className={`${styles.shoppingCartStyle} flex items-center mt-1 px-4 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                >
                  <Link href="/dashboard">
                    <div>Dashboard </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="px-4 py-2 text-black-300 "
              >
                {isDrawerOpen ? (
                  <>
                    <AiOutlineShopping className="h-8 w-8" aria-hidden="true" />
                  </>
                ) : (
                  <AiOutlineShopping className="h-8 w-8" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div className="fixed top-50 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform translate-x-0 md:translate-x-full">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDrawer}
                className="px-2 py-1 text-black-600 focus:outline-none"
              >
                <AiOutlineClose className="h-8 w-8 mb-0.5" aria-hidden="true" />
              </button>
            </div>
            <div>
              <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-20 ">
                <div className="flex items-center justify-between h-16">
                  <div className="md:flex space-x-4">
                    <div className={`${styles.shoppingCartWrapper}`}>
                      <div
                        className={`${styles.shoppingCartStyle} flex items-center  px-4 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                      >
                        {shoppingCartEffect ? (
                          <>
                            <div className={`${styles.shopping} mr-2 `}>
                              <AiOutlineShopping
                                className={`${styles.shoppingIcon} h-5 w-5 mb-0.5`}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mr-2">
                              <AiOutlineShopping
                                className="h-5 w-5 mb-0.5"
                                aria-hidden="true"
                              />
                            </div>
                          </>
                        )}
                        <div
                          onMouseEnter={openshoppingCartEffect}
                          onMouseLeave={closeshoppingCartEffect}
                        >
                          <span>Shopping Cart</span>
                        </div>

                        <div
                          onMouseEnter={openshoppingCartEffect}
                          onMouseLeave={closeshoppingCartEffect}
                          className={`${styles.cartAmountStyle}`}
                        >
                          <span>0</span>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.shoppingCartWrapper}`}>
                      <div
                        className={`${styles.shoppingCartStyle} flex items-center text-gayr-300 py-2 rounded-md text-sm font-medium`}
                      >
                        {MyWishListEffect ? (
                          <>
                            <div className={`${styles.shopping}`}>
                              <IoIosHeartEmpty
                                className={`${styles.shoppingIcon} h-5 w-5 mb-0.5`}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mr-2">
                              <IoIosHeartEmpty
                                className="h-5 w-5 mb-0.5"
                                aria-hidden="true"
                              />
                            </div>
                          </>
                        )}
                        <div
                          onMouseEnter={openMyWishList}
                          onMouseLeave={closeMyWishList}
                        >
                          <span>My Wish List</span>
                        </div>

                        <div
                          onMouseEnter={openMyWishList}
                          onMouseLeave={closeMyWishList}
                          className={`${styles.cartAmountStyle}`}
                        >
                          <span>0</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        className={`${styles.shoppingCartStyle} flex items-center mt-10 text-gayr-300 py-2 rounded-md text-sm font-medium`}
                      >
                        <Link href="/loginOrCreateAccount">
                          Sign In or Create an Account
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button
                      onClick={toggleDrawer}
                      className="px-4 py-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      {/* {isDrawerOpen ? (
                        <>
                          <h1>200</h1>
                        </>
                      ) : (
                        <h1>100</h1>
                      )} */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BrandNameAndCart;
