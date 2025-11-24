import React, { useEffect, useState } from 'react'
import './TopRated.css'
import { getMoviesListApi } from '../../AxiosInstance'
import Movie from '../Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import EmptyMovies from '../EmptyMovies/EmptyMovies';

export default function TopRated() {
    // Redux
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: "top_rated",
        pageNum: 1,
    })

    // Store movies globally
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) dispatch(setMoviesObj(data))
    }, [data])


    // Define movies to show
    const selectedMovies = useSelector((state) => state.movies.selectedMovies);
    let genreSelected = useSelector(state => state.movies.genreSelected);

    let moviesToShow;
    if (!genreSelected) moviesToShow = data?.results
    else moviesToShow = selectedMovies

    // Handle error and isLoading
    if (error) return <Error />
    if (isLoading) return <Loading />
    if (moviesToShow.length === 0) return <EmptyMovies />

    return (
        <div className='row container-fluid'>
            {
                moviesToShow.map((item) => {
                    return <Movie key={item.id} movie={item} isModal={false} />
                })
            }
        </div>
    )
}
