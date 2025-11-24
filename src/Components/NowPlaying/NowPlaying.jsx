import './NowPlaying.css'
import Movie from '../Movie/Movie';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useEffect, useRef } from 'react';

import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyMovies from '../EmptyMovies/EmptyMovies';
import Loading from '../Loading/Loading';

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

    if (error) return <Error />
    if (isLoading) return <Loading />
    if (moviesToShow.length == 0) return <EmptyMovies />

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
