"use client";
import { useGetProductQuery } from "@/app/redux/features/api/apiSlice";
import React from "react";
import styles from "../../../style/productDeleteUpdateEdit.module.css";
import { useDispatch } from "react-redux";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

const ProductDeleteUpdateEdit = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductQuery();
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
          <div>
            <ul role="list" class="divide-y divide-gray-100">
              {data?.data.map((product) => (
                <>
                  <li class="lg:flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                      <img
                        class="h-12 w-12 flex-none  bg-gray-50"
                        src={`data:image/jpeg;base64,${Buffer?.from(
                          product?.images[0]?.data
                        ).toString("base64")}`}
                        alt="Image"
                      />
                      <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                          {product.name}
                        </p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                          michael.foster@example.com
                        </p>
                      </div>
                    </div>

                    {/* <div class="hidden shrink-0 sm:flex lg:flex sm:flex-col sm:items-end"> */}
                    <div class="flex  items-center shrink-0 ">
                      <div>
                        <LuFileEdit className="h-7 w-7 "></LuFileEdit>
                      </div>

                      <div>
                        <MdDelete className="h-7 w-7" color="red"></MdDelete>
                      </div>
                      <div>
                        <IoEyeSharp
                          className="h-7 w-7"
                          color="green"
                        ></IoEyeSharp>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <button class="btn btn-primary">One</button>
          <button class="btn btn-secondary">Two</button>
          <button class="btn btn-accent btn-outline">Three</button>
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDeleteUpdateEdit;
