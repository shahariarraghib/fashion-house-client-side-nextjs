import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
// Define a service using a base URL and expected endpoints

export const productApi = createApi({
  reducerPath: "FashionHouseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/",
  }),
  endpoints: (builder) => ({
    getProductName: builder.query({
      query: () => "",
    }),

    addUserInfo: builder.mutation({
      query: (data) => ({
        url: "user/signup",
        method: "POST",
        body: data,
      }),
    }),

    UserLoginInfo: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: { data },
      }),
      transformResponse: (response, meta, arg) =>
        // console.log(response?.data?.token),
        localStorage.setItem("token", response?.data?.token),
    }),

    // addProduct: builder.mutation({
    //   query: (data) => ({
    //     url: "productadd",
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "multipart/form-data;",
    //     },

    //     body: data,
    //   }),
    // }),

    addProduct: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        // Append the data properties to the FormData object
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("productMaterials", data.productMaterials);
        // Append the image files under the same "images" field
        data.images.forEach((image) => {
          formData.append("images", image);
        });
        // Append the image files under the same "images" field
        data.productDetails.forEach((productDetail, index) => {
          formData.append(
            `productDetails[${index}][pickedProductDetailsSize]`,
            productDetail.pickedProductDetailsSize
          );
          formData.append(
            `productDetails[${index}][pickedProductDetailsColor]`,
            productDetail.pickedProductDetailsColor
          );
          formData.append(
            `productDetails[${index}][productDetailsQuantity]`,
            productDetail.productDetailsQuantity
          );
        });

        return {
          url: "productadd",
          method: "POST",
          headers: {
            Accept: "application/json",
            // "Content-Type": `multipart/form-data;`,
          },
          body: formData, // Use the FormData object as the body
        };
      },
    }),
  }),
});

export const {
  useGetProductNameQuery,
  useAddUserInfoMutation,
  useUserLoginInfoMutation,
  useAddProductMutation,
} = productApi;

// addProduct: builder.mutation({
//   query: (data) => {
//     // const formData = new FormData();

//     // // Append the data properties to the FormData object
//     // formData.append("name", data.name);
//     // formData.append("price", data.price);
//     // formData.append("description", data.description);
//     // formData.append("productMaterials", data.productMaterials);

//     // // // Append the image file from the 'images' property
//     // // formData.append("images", data.images[0]);
//     // // Append multiple image files from the 'images' array
//     // data.images.forEach((image, index) => {
//     //   console.log(`Appending image[${index}]`, image);
//     //   formData.append(`images[${index}]`, image);
//     // });

//     return {
//       url: "productadd",
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         // "Content-Type": `multipart/form-data;`,
//       },
//       body: formData, // Use the FormData object as the body
//     };
//   },
// }),
