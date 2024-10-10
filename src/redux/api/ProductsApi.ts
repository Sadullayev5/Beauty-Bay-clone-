import { api } from "./index";

const ProductsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/api/v1/products.json"
      }),
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/api/v1/products/${id}.json`
      }),
    }),
    getCategories: build.query({
      query: (category : string) => ({
        url: `/api/v1/products.json?product_type=${category}`
      }),
    })
  }),
});

export const { useGetProductsQuery , useGetSingleProductQuery , useGetCategoriesQuery } = ProductsApi;