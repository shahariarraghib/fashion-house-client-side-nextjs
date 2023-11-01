"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiFillFire } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import styles from "../../../style/productQuickViewModal.module.css";
const ProductQuickViewModal = ({ productData, showModal, setShowModal }) => {
  const [imageColorShowByClick, setimageColorShowByClick] = useState(0);
  const [imageSizeShowByClick, setimageSizeShowByClick] = useState(0);
  console.log(productData);
  console.log(imageColorShowByClick);

  return (
    <>
      {showModal ? (
        <>
          <div className={`${styles.modalBody}`}>
            <div
              className={`${styles.modalBody} fixed inset-0 flex justify-center z-50}`}
            >
              <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

              {/* Modal content */}
              <div className="modal-container bg-white w-11/12 md:w-3/5 mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
                {/* Header grid */}
                <div className="modal-header p-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="float-right -mt-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z" />
                    </svg>
                  </button>
                </div>

                {/* Content grid */}
                <div className="modal-content p-4">
                  <div className={`${styles.modalBodyScroll}`}>
                    <div className="grid lg:grid-cols-2  grid-cols-1 gap-4">
                      {/* Left grid column (col-span-1 on small screens, col-span-2 on medium and larger screens) */}
                      <div className="col-span-1 ">
                        <div>
                          <div className={`${styles.modalImageStyle} pl-8`}>
                            <img
                              // className="inner-img"
                              src={`data:image/jpeg;base64,${Buffer.from(
                                productData?.images[0].data
                              ).toString("base64")}`}
                              alt="Image"
                            />
                          </div>
                          <div></div>
                        </div>
                      </div>

                      {/* Right grid column (col-span-1 on small screens, col-span-2 on medium and larger screens) */}
                      <div className={`${styles.fontSize} col-span-1 p-8`}>
                        <h4 className={`${styles.productName}`}>
                          {productData.name}
                        </h4>
                        <p className={`${styles.description}`}>
                          {" "}
                          {productData.description}
                        </p>
                        <p
                          className={`${styles.soldInLastHours} flex items-center mt-5`}
                        >
                          <span>
                            <AiFillFire className="h-6 w-6 mb-0.5" />
                          </span>
                          <span className="ml-4"> 5 sold in last 20 hours</span>
                        </p>

                        <div className={`${styles.availability}`}>
                          <p>
                            Availability: <span className="ml-2">In Stock</span>
                          </p>

                          <p className={`${styles.productMaterials}`}>
                            Product Materials:{" "}
                            <span className="ml-2">
                              {productData.productMaterials}
                            </span>
                          </p>
                        </div>

                        <h2 className={`${styles.price} flex items-center`}>
                          <span>
                            <TbCurrencyTaka className="h-7 w-7 -ml-2 -mr-2" />
                          </span>
                          {productData.price}
                        </h2>

                        <div className="flex items-center mt-2">
                          <p className={`${styles.DetailsColor} `}>Color:</p>
                          <span
                            className={`${styles.pickedProductDetailsColor} `}
                          >
                            {
                              productData?.productDetails[imageColorShowByClick]
                                .pickedProductDetailsColor
                            }
                          </span>
                        </div>

                        <div>
                          <div className="flex -ml-2">
                            {productData?.images.map((image, index) => (
                              <div
                                key={image.id}
                                className="flex justify-center"
                              >
                                <div
                                  className={`${styles.wrapper}`}
                                  onClick={() =>
                                    setimageColorShowByClick(index)
                                  }
                                >
                                  <img
                                    className={`${styles.imagecover}`}
                                    src={`data:image/jpeg;base64,${Buffer.from(
                                      image.data
                                    ).toString("base64")}`}
                                    alt="Image"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center mt-2">
                          <p className={`${styles.DetailsColor} `}>Size:</p>
                          <span
                            className={`${styles.pickedProductDetailsColor} `}
                          >
                            {
                              productData?.productDetails[imageSizeShowByClick]
                                .pickedProductDetailsSize
                            }
                            {
                              productData?.productDetails[imageSizeShowByClick]
                                ?.productDetailsQuantity
                            }
                          </span>
                        </div>

                        <div>
                          <div className="flex -ml-2">
                            {productData?.productDetails.map((size, index) => (
                              <div
                                key={size.id}
                                className="flex justify-center"
                                onClick={() => setimageSizeShowByClick(index)}
                              >
                                {size.productDetailsQuantity > 0 ? (
                                  <div className="border m-2 p-2">
                                    {console.log(size.pickedProductDetailsSize)}

                                    {size.pickedProductDetailsSize}
                                  </div>
                                ) : (
                                  <div className="border m-2">
                                    {console.log(size.pickedProductDetailsSize)}

                                    {size.pickedProductDetailsSize}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProductQuickViewModal;
