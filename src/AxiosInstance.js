import axios from "axios";

export const getMoviesListApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDQ1ZGQ3M2NlMDgxODcyMWUxNzk0NWFhNDU4Nzc3MyIsIm5iZiI6MTc1OTEzMjE5Mi4zODcsInN1YiI6IjY4ZGEzYTIwZmI5Mjc0OTMxMmUxY2FiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7RZK42gdIl5Y2rjw2icPS4IVuR7CiW-kDi2QTbB1DI'
    }
});

export const getMoviesGenresApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDQ1ZGQ3M2NlMDgxODcyMWUxNzk0NWFhNDU4Nzc3MyIsIm5iZiI6MTc1OTEzMjE5Mi4zODcsInN1YiI6IjY4ZGEzYTIwZmI5Mjc0OTMxMmUxY2FiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J7RZK42gdIl5Y2rjw2icPS4IVuR7CiW-kDi2QTbB1DI'
    }
})