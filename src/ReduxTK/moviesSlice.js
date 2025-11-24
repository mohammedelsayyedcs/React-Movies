import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        moviesObj: {},
        cartArr: [],
        selectedMovies: [],
        genreSelected: false,
        pageNumNowPlaying: 1,
        pageNumPopular: 1,
        pageNumUpcoming: 1,
        pageNumTopRated: 1,
        componentName: '',
    },
    reducers: {
        setMoviesObj: (state, action) => {
            state.moviesObj = action.payload;
            state.genreSelected = false;
            state.selectedMovies = [];
        },
        setCartArr: (state, action) => {
            state.cartArr.find(item => item.id === action.payload.id)
                ? ''
                : state.cartArr.push(action.payload);

        },
        removeFromCart: (state, action) => {
            const movieIndex = state.cartArr.findIndex((item) => item.id === action.payload.id)
            state.cartArr.splice(movieIndex, 1)
        },
        setSelectedMoviesByGenreId: (state, action) => {
            const genreId = Number(action.payload)
            state.genreSelected = true;
            state.selectedMovies
                = state.moviesObj?.results?.filter((item) => item.genre_ids.includes(genreId))
        },
        increasePageNumber: (state) => {
            const maxPageNum = state.moviesObj.total_pages;

            if (state.componentName == 'now_playing') {
                if (state.pageNumNowPlaying >= maxPageNum)
                    state.pageNumNowPlaying = maxPageNum;
                if (state.pageNumNowPlaying < maxPageNum)
                    state.pageNumNowPlaying = state.pageNumNowPlaying + 1;
            } else if (state.componentName == 'popular') {
                if (state.pageNumPopular >= maxPageNum)
                    state.pageNumPopular = maxPageNum;
                if (state.pageNumPopular < maxPageNum)
                    state.pageNumPopular = state.pageNumPopular + 1;
            } else if (state.componentName == 'upcoming') {
                if (state.pageNumUpcoming >= maxPageNum)
                    state.pageNumUpcoming = maxPageNum;
                if (state.pageNumUpcoming < maxPageNum)
                    state.pageNumUpcoming = state.pageNumUpcoming + 1;
            } else if (state.componentName == 'top_rated') {
                if (state.pageNumTopRated >= maxPageNum)
                    state.pageNumTopRated = maxPageNum;
                if (state.pageNumTopRated < maxPageNum)
                    state.pageNumTopRated = state.pageNumTopRated + 1;
            }
        },
        decreasePageNumber: (state) => {
            if (state.componentName == 'now_playing') {
                if (state.pageNumNowPlaying > 1)
                    state.pageNumNowPlaying = state.pageNumNowPlaying - 1;
            } else if (state.componentName == 'popular') {
                if (state.pageNumPopular > 1)
                    state.pageNumPopular = state.pageNumPopular - 1;
            } else if (state.componentName == 'upcoming') {
                if (state.pageNumUpcoming > 1)
                    state.pageNumUpcoming = state.pageNumUpcoming - 1;
            } else if (state.componentName == 'top_rated') {
                if (state.pageNumTopRated > 1)
                    state.pageNumTopRated = state.pageNumTopRated - 1;
            }
        },
        setComponentName: (state, action) => {
            state.componentName = action.payload;
        }
    }
})

// This export for Component which uses useDespatch to update the state
export const {
    setMoviesObj,
    setCartArr,
    removeFromCart,
    setSelectedMoviesByGenreId,
    increasePageNumber,
    decreasePageNumber,
    setComponentName
} = moviesSlice.actions;

// This export for store.js (Global Store)
export default moviesSlice.reducer;