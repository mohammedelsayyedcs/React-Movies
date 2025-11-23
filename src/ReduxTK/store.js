import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from './moviesSlice.js'
import { moviesApiSlice } from './moviesApiSlice.js'

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        [moviesApiSlice.reducerPath]: moviesApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApiSlice.middleware)
})

export default store;