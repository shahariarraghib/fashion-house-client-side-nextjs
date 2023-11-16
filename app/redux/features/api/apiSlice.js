import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "FashionHouseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fashion-house-server-side-node-js-mvc.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({ url: "product/get", method: "GET" }),
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

    addProduct: builder.mutation({
      query: (data) => {
        const formData = new FormData();
        // Append the data properties to the FormData object
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("productMaterials", data.productMaterials);
        formData.append(
          "productCategoryMaleFemaleandBaby",
          data.productCategoryMaleFemaleandBaby
        );
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
          url: "product/add",
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
  useAddUserInfoMutation,
  useUserLoginInfoMutation,
  useAddProductMutation,
  useGetProductQuery,
} = productApi;
