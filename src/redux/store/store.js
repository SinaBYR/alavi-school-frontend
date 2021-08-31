import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../features/public/public-api-slice';
import { newsSlice } from '../features/public/public-api-slice';

// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer
//     },
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware().concat(apiSlice.middleware);
//     }
// })

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer
    }
})