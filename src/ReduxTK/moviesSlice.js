import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesObj: {},
        cartArr: [],
        selectedMovies: [],
    },
    reducers: {
        setMoviesObj: (state, action) => {
            state.moviesObj = action.payload;
        },
        setCartArr: (state, action) => {
            state.cartArr = action.payload;
        },
        setSelectedMovieById: (state, action) => {
            const id = Number(action.payload)
            state.selectedMovies = state.moviesObj?.results?.find((item) => item.id === id)
        },
    }
})

// This export for Component which uses useDespatch to update the state
export const { setMoviesObj, setCartArr, setSelectedMovieById } = moviesSlice.actions;
// This export for store.js (Global Store)
export default moviesSlice.reducer;