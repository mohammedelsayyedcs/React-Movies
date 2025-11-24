import React, { useEffect, useState } from 'react'
import './Popular.css'
import { getMoviesListApi } from '../../AxiosInstance';
import Movie from '../Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import EmptyMovies from '../EmptyMovies/EmptyMovies';
import Loading from '../Loading/Loading';
import Paggination from '../Paggination/Paggination';

export default function Popular() {
    // Redux
    const pageNumber = useSelector(state => state.movies.pageNumPopular)
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: "popular",
        pageNum: pageNumber
    });

    // Get all movies one time in first page load and Store movies globally
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) {
            dispatch(setMoviesObj(data))
        }
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
            <Paggination name="popular" />
        </div>
    )
}
