import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesObj: {},
        cartArr: [],
        selectedMovies: [],
        genreSelected: false,
    },
    reducers: {
        setMoviesObj: (state, action) => {
            state.moviesObj = action.payload;
            state.genreSelected = false;
            state.selectedMovies = [];
        },
        setCartArr: (state, action) => {
            state.cartArr = action.payload;
        },
        setSelectedMoviesByGenreId: (state, action) => {
            const genreId = Number(action.payload)
            state.genreSelected = true;
            state.selectedMovies
                = state.moviesObj?.results?.filter((item) => item.genre_ids.includes(genreId))
        }
    }
})

// This export for Component which uses useDespatch to update the state
export const {
    setMoviesObj,
    setCartArr,
    setSelectedMoviesByGenreId
} = moviesSlice.actions;

// This export for store.js (Global Store)
export default moviesSlice.reducer;