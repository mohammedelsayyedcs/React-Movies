import './NowPlaying.css'
import Movie from '../Movie/Movie';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useEffect, useRef } from 'react';

import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function NowPlaying() {
    // Redux
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: 'now_playing',
        pageNum: 3,
    })

    // Store movies globally
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) dispatch(setMoviesObj(data))
    }, [data])


    // Define movies to show
    const selectedMovies = useSelector((state) => state.movies.selectedMovies);
    let genreSelected = useSelector(state => state.movies.genreSelected);

    let moviesToShow;
    if (!genreSelected) moviesToShow = data?.results
    else moviesToShow = selectedMovies

    if (error) return <h4 className='text-danger d-flex justify-content-center align-items-center min-vh-100'>Error: The required page is not found ...</h4>
    if (isLoading) return <h4 className='text-info d-flex justify-content-center align-items-center min-vh-100'>Loading ...</h4>
    if (moviesToShow.length == 0) return <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h4 className="text-muted text-center">{"No movies available for the selected genre."}</h4>
    </div>
    return (
        <div className='row container-fluid'>
            {
                moviesToShow.map((item) => {
                    return <Movie key={item.id} movie={item} />
                })
            }
        </div>
    )
}
