// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    isLoading: false
}

export const fetchNews = createAsyncThunk('news/fetchNews', async (_, {rejectWithValue}) => {
    try {
        // const response = await fetch('https://jsonplaceholderr.typicode.com/posts');
        const response = await fetch('https://reqress.in/api/users/sia');
        const data = await response.json();
        if(response.status === 404) {
            return rejectWithValue('404 Not found');
        }
        return data
    } catch(err) {
        return rejectWithValue(err.message);
    }
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
        },
        [fetchNews.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            // console.log(action);
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