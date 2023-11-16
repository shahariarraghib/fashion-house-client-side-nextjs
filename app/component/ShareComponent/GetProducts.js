"use client";
import { Buffer } from "buffer";
import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "@/app/redux/features/api/apiSlice";
import styles from "../../../style/getProduct.module.css";
import ProductQuickViewModal from "../ProductQuickView/ProductQuickViewModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  selectCartItems,
} from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";

// image input
import manFilterBackgroundImage from "../../../assest/images/manFilterBackgroundImage.PNG";
import womanFilterBackgroundImage from "../../../assest/images/womanFilterBackgroundImage.PNG";
import babyFilterBackgroundImage from "../../../assest/images/babyFilterBackgroundImage.jpg";
import { filterProduct } from "@/app/redux/features/filter/filterSlice";

const GetProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showModal, setShowModal] = React.useState(false);
  const [productData, setSroductData] = useState();
  const [imageShowByClick, setimageShowByClick] = useState(0);
  const { data, isLoading } = useGetProductQuery();
  const filters = useSelector(filterProduct);
  let brands = filters.payload.filter.filters.brands[0];
  const [getProductData, setProductData] = useState();

  console.log(brands);
  // if (isLoading) {
  //   return (

  //   );
  // }

  let content;

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);

  // if (getProductData) {
  //   content = getProductData?.filter((product) => console.log(product));
  // }

  // console.log(content);

  return (
    <>
      <div>
        <div className="container mx-auto lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className={`${styles.backgroundStyleDivGetProduct}`}>
              <div
                className={`${styles.backgroundStyleImageGetProduct}`}
                style={{
                  backgroundImage: `url(${manFilterBackgroundImage.src})`,
                }}
              >
                <div className={`${styles.filterNameStyle}`}>
                  <p
                    className={`${styles.filterNameStyle11}`}
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(filterProduct("man"));
                    }}
                  >
                    Man
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.backgroundStyleDivGetProduct}`}>
              <div
                className={`${styles.backgroundStyleImageGetProduct}`}
                style={{
                  backgroundImage: `url(${womanFilterBackgroundImage.src})`,
                }}
              >
                {" "}
                <div
                  className={`${styles.filterNameStyle}`}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(filterProduct("woman"));
                  }}
                >
                  <p className={`${styles.filterNameStyle11}`}>Woman</p>
                </div>
              </div>
            </div>
            <div className={`${styles.backgroundStyleDivGetProduct}`}>
              <div
                className={`${styles.backgroundStyleImageGetProduct}`}
                style={{
                  backgroundImage: `url(${babyFilterBackgroundImage.src})`,
                }}
              >
                {" "}
                <div
                  className={`${styles.filterNameStyle}`}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(filterProduct("baby"));
                  }}
                >
                  <p className={`${styles.filterNameStyle11}`}>Baby</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 justify-center">
            <div
              className={`${styles.FashionHouseHR} flex justify-center items-center m-4`}
            >
              <hr className={`${styles.animationhr}`} />
            </div>

            <div
              className={`${styles.FashionHouseHR} flex justify-center items-center m-4`}
            >
              <div>
                <h3
                  className={`${styles.trandingNow} flex justify-center items-center`}
                >
                  NEW ARRIVALS
                </h3>
                <a
                  href=""
                  className={`${styles.wiewAll} flex justify-center items-center`}
                >
                  <p>view all</p>
                </a>
              </div>
            </div>

            <div
              className={`${styles.FashionHouseHR} flex justify-center items-center m-4`}
            >
              <hr className={`${styles.animationhr}`} />
            </div>
          </div>
        </div>
        {isLoading ? (
          <>
            <div className="h-screen flex justify-center items-center">
              <div className={`${styles.loading} `}></div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${styles.overflow} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 `}
            >
              {getProductData?.data.map((product) => (
                <div key={product.id} className="flex flex-col items-center">
                  <figure className="snip1268">
                    <div className="image">
                      <img
                        className="inner-img"
                        src={`data:image/jpeg;base64,${Buffer?.from(
                          product?.images[imageShowByClick]?.data
                        ).toString("base64")}`}
                        alt="Image"
                      />
                      ;
                      <div className="icons">
                        <button
                          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-0 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          // onClick={(event) => {
                          //   event.preventDefault();
                          //   setShowModal(true), setSroductData(product);
                          // }}
                        >
                          Add to WishList
                        </button>

                        <button
                          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-0 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            setShowModal(true), setSroductData(product);
                          }}
                        >
                          Quick View
                        </button>

                        <button
                          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-2 py-0 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          // onClick={(event) => {
                          //   event.preventDefault();
                          //   setShowModal(true), setSroductData(product);
                          // }}
                        >
                          Add to WishList
                        </button>
                      </div>
                      <a href="#" className="add-to-cart">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              addItemToCart({
                                product,
                                cartItems,
                              })
                            );
                          }}
                        >
                          Add to Cart
                        </button>
                      </a>
                    </div>
                    <figcaption>
                      <h2>{product.name}</h2>

                      <div className="price">{product.price}</div>

                      <div>
                        <div className="flex justify-center">
                          {product.images.map((image, index) => (
                            <div key={image.id} className="flex justify-center">
                              <div
                                className="wrapper"
                                onClick={() => setimageShowByClick(0)}
                              >
                                <img
                                  className="imagecover"
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
                    </figcaption>
                  </figure>
                </div>
              ))}

              <ProductQuickViewModal
                productData={productData}
                setShowModal={setShowModal}
                showModal={showModal}
              ></ProductQuickViewModal>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GetProducts;
