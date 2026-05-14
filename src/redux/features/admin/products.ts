import { baseApi } from "@/redux/api/baseApi";

export interface IReview {
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface IVariant {
  unit: string; // যেমন: 100ml, 500ml, 1kg
  price: number;
  discountPrice: number;
  stockQuantity: number;
  stockStatus: "available" | "out of stock";
}

export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  desc: string;

  // মেইন চেঞ্জ: পুরনো price/stock এর বদলে এখন variants
  variants: IVariant[];

  images: string[];
  category: {
    _id: string;
    title: string;
  };
  subCategory?: {
    _id: string;
    name: string;
  };

  bestSeller: boolean;
  purchaseCount: number;

  ratings: {
    average: number;
    count: number;
  };
  reviews: IReview[];
  createdAt: string;
  updatedAt: string;
}

// Pagination Response Type
export interface IProductResponse {
  success: boolean;
  data: IProduct[]; // কারণ কন্ট্রোলারে res.json({ data: result.products }) দিয়েছেন
  meta: {
    totalCount: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Query returns IProductResponse All products
    getProducts: builder.query<IProductResponse, any>({
      query: (params) => ({ url: "/products", params }),
      providesTags: ["Product"],
    }),

    // Query returns a single IProduct details
    getProductById: builder.query<IProduct, string>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),

    // Mutations use FormData Create Product
    createProduct: builder.mutation<IProduct, FormData>({
      query: (formData) => ({
        url: "/admin/products",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation<
      IProduct,
      { id: string; formData: FormData }
    >({
      query: ({ id, formData }) => ({
        url: `/admin/products/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/admin/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    getProductDetails: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/admin/products/${id}`, // Backend-er public route hole '/products/:id' hobe
        method: "GET",
      }),
      providesTags: ["Product"],
      // Response-er moddhe jodi 'data' object thake, seta transform kore nite paren
      transformResponse: (response: any) => response?.data || response,
    }),

    getProductBySlug: builder.query<IProduct, string>({
      query: (slug) => ({
        url: `/products/details/${slug}`, // Router-er sathe exact match
        method: "GET",
      }),
      providesTags: ["Product"],
      // Backend { success: true, data: {...} } pathachche, tai transform dorkar
      transformResponse: (response: any) => response?.data || response,
    }),
    // redux example
    createReview: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/product/review/${id}/reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductBySlugQuery,
  useCreateReviewMutation,
  useGetProductDetailsQuery,
} = productApi;
