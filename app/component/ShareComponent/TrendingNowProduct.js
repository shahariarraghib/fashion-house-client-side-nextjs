"use client";
import React, { useState } from "react";
import styles from "../../../style/trandingNaoProduct.module.css";
import Slider from "react-slick";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { useGetProductQuery } from "@/app/redux/features/api/apiSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductQuickViewModal from "../ProductQuickView/ProductQuickViewModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  selectCartItems,
} from "@/app/redux/features/cart/cartSlice";
const TrendingNowProduct = () => {
  const { data, isLoading } = useGetProductQuery();
  const [imageShowByClick, setimageShowByClick] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [showModal, setShowModal] = React.useState(false);
  const [productData, setSroductData] = useState();
  // for arrow style
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FiChevronsRight
          className="h-25 w-25"
          aria-hidden="true"
          style={{
            ...style,
            color: "black",
            fontSize: "50px",
          }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} `} onClick={onClick}>
        <FiChevronsLeft
          className={`${styles.arrow} h-25 w-25 lg:-ml-8`}
          aria-hidden="true"
          style={{ ...style, color: "black", fontSize: "50px" }}
        />
      </div>
    );
  }

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,

    appendDots: (dots) => (
      <div
        className={`${styles.dotStyle} lg:mt-7`}
        style={{
          borderRadius: "10px",
          // padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg: mt-8 h-screen w-3/4 m-auto">
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
              TRENDING NOW
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
      {/* product cart */}
      <div>
        {" "}
        {isLoading ? (
          <>
            <div className="h-screen flex justify-center items-center">
              <div className={`${styles.loading} `}></div>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.overflow}  `}>
              <Slider {...settings}>
                {data?.data.map((product) => (
                  <>
                    <div
                      key={product.id}
                      className="flex flex-col items-center"
                    >
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
                            <a href="#">
                              <i className="ion-star"></i>
                            </a>
                            <a href="#">
                              <button
                                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setShowModal(true), setSroductData(product);
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
                                <div
                                  key={image.id}
                                  className="flex justify-center"
                                >
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
                  </>
                ))}
              </Slider>
              <ProductQuickViewModal
                productData={productData}
                setShowModal={setShowModal}
                showModal={showModal}
              ></ProductQuickViewModal>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrendingNowProduct;
