// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    return response.json();
})

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: {
        [fetchNews.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        }
    }
})

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://jsonplaceholder.typicode.com'
//     }),
//     endpoints(builder) {
//         return {
//             fetchNews: builder.query({
//                 query: (limit = 10) => `/posts`
//             }),
//             // fatchIndividualNews: builder.query({
//             //     query: (limit = 10) => `/posts/`
//             // })
//         }
//     }
// })

// export const { useFetchNewsQuery } = apiSlice;