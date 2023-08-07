import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const databaseApi = createApi({
    reducerPath: 'database',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
        }),
        getPosts: builder.query({
            query: () => `posts`,
        }),
    }),
});

export const { useGetProductsQuery, useGetPostsQuery } = databaseApi;
