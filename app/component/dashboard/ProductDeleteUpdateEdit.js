"use client";
import {
  useDeleteProductDataMutation,
  useGetProductQuery,
} from "@/app/redux/features/api/apiSlice";
import React, { useEffect, useState } from "react";
import styles from "../../../style/productDeleteUpdateEdit.module.css";
import { useDispatch } from "react-redux";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
const ProductDeleteUpdateEdit = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductQuery();
  const [getProductData, setProductData] = useState();
  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);
  const [
    deleteDataById,
    {
      isLoading: isLoadingUserLogin,
      isSuccess: isSuccessUserLogin,
      error: userLoginError,
    },
  ] = useDeleteProductDataMutation();
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <>
          <div class="h-screen flex justify-center items-center">
            <div class={`${styles.loading} `}></div>
          </div>
        </>
      ) : (
        <>
          <div class="overflow-x-auto h-screen">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {getProductData?.data.map((product) => (
                  <>
                    <tr>
                      <td>
                        <div class="flex items-center gap-3">
                          <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                              <img
                                class="h-12 w-12 flex-none  bg-gray-50"
                                src={`data:image/jpeg;base64,${Buffer?.from(
                                  product?.images[0]?.data
                                ).toString("base64")}`}
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div>
                            <div class="font-bold">{product.name}</div>
                            <div class="text-sm opacity-50">
                              {product.productCategoryMaleFemaleandBaby}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span class="badge badge-warning gap-2">
                          <TbCurrencyTaka className="h-5 w-5 -ml-2 -mr-2" />
                          {product.price}
                        </span>
                      </td>
                      <td>
                        <details className="dropdown ">
                          <summary className="m-1 btn">Product Details</summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 overflow-x-auto">
                            <thead>
                              <tr>
                                <th>size</th>
                                <th>quantity</th>
                                <th>color</th>
                              </tr>
                            </thead>
                            {product?.productDetails?.map((productDetail) => (
                              <>
                                <table class="table ">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <p>
                                          {
                                            productDetail.pickedProductDetailsSize
                                          }
                                        </p>
                                      </td>
                                      <td>
                                        <p>
                                          {productDetail.productDetailsQuantity}
                                        </p>
                                      </td>
                                      <td>
                                        <p class="">
                                          {
                                            productDetail.pickedProductDetailsColor
                                          }
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </>
                            ))}
                          </ul>
                        </details>
                      </td>
                      <td>Purple</td>
                      <th>
                        <div>
                          {" "}
                          <div class="flex  items-center shrink-0 ">
                            <div>
                              <LuFileEdit className="h-7 w-7 "></LuFileEdit>
                            </div>

                            <div onClick={() => deleteDataById(product._id)}>
                              <MdDelete
                                className="h-7 w-7"
                                color="red"
                              ></MdDelete>
                            </div>
                            <div>
                              <IoEyeSharp
                                className="h-7 w-7"
                                color="green"
                              ></IoEyeSharp>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDeleteUpdateEdit;
