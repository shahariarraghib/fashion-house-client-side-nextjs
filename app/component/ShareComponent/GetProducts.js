"use client";
import { Buffer } from "buffer";
import React, { useState } from "react";
import { useGetProductQuery } from "@/app/redux/features/api/apiSlice";
import styles from "../../../style/getProduct.module.css";
import ProductQuickViewModal from "../ProductQuickView/ProductQuickViewModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  selectCartItems,
} from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";

const GetProducts = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showModal, setShowModal] = React.useState(false);
  const [productData, setSroductData] = useState();
  const [imageShowByClick, setimageShowByClick] = useState(1);
  const { data, isLoading } = useGetProductQuery();

  // if (isLoading) {
  //   return (

  //   );
  // }

  return (
    <>
      <div>
        <div className="container mx-auto lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4">
              <div>
                <Image
                  src="https://www.js-craft.io/wp-content/uploads/2023/06/biker_cat.webp"
                  objectFit="cover"
                  alt="Picture of the author"
                  width={500}
                  height={100}
                  className=""
                />
                <p>Welcome to the Cart</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4">Column 2</div>
            <div className="bg-gray-200 p-4">Column 3</div>
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
              {data?.data.map((product) => (
                <div key={product.id} className="flex flex-col items-center">
                  <figure className="snip1268">
                    <div className="image">
                      <img
                        className="inner-img"
                        src={`data:image/jpeg;base64,${Buffer.from(
                          product?.images[imageShowByClick].data
                        ).toString("base64")}`}
                        alt="Image"
                      />
                      ;
                      <div className="icons">
                        <a href="#">
                          <i className="ion-star"></i>
                        </a>
                        <a href="#">
                          <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(event) => {
                              event.preventDefault();
                              setShowModal(true),
                                setSroductData(product, event);
                            }}
                          >
                            Open large modal
                          </button>
                        </a>
                        <a href="#">
                          <i className="ion-search"></i>
                        </a>
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
                                onClick={() => setimageShowByClick(index)}
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
// {
//    <img
//   src={`data:image/jpeg;base64,${Buffer.from(
//     data?.data[0].images[0].data
//   ).toString("base64")}`}
//   alt="Image"
//   width="100" // You can adjust width and height as needed
//   height="100"
// />;
// }
