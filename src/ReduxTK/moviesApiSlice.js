import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApiSlice = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
        prepareHeaders: (headers) => {
            headers.set("accept", "application/json");
            headers.set(
                "Authorization",
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDQ1ZGQ3M2NlMDgxODcyMWUxNzk0NWFhNDU4Nzc3MyIsIm5iZiI6MTc1OTEzMjE5Mi4zODcsInN1YiI6IjY4ZGEzYTIwZmI5Mjc0OTMxMmUxY2FiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7RZK42gdIl5Y2rjw2icPS4IVuR7CiW-kDi2QTbB1DI"
            );
            return headers;
        }
    }),
    tagTypes: ["Movies", "Genres"],
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: ({ category, pageNum }) => `/movie/${category}?language=en-US&page=${pageNum}`,
            providesTags: ['Movies'],
        }),
        getAllGenres: builder.query({
            query: () => '/genre/movie/list?language=en',
            providesTags: ['Genres'],
        })
    })
})

export const { useGetAllMoviesQuery, useGetAllGenresQuery } = moviesApiSlice