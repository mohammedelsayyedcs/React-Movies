import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesObj: {},
        cartArr: [],
    },
    reducers: {
        setMoviesObj: (state, action) => {
            state.moviesObj = action.payload;
        },
        setCartArr: (state, action) => {
            state.cartArr = action.payload;
        },
    }
})

// This export for Component which uses useDespatch to update the state
export const { setMoviesObj, setCartArr } = moviesSlice.actions;
// This export for store.js (Global Store)
export default moviesSlice.reducer;