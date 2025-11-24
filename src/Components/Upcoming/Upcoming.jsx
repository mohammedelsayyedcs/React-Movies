import React, { useEffect, useState } from 'react'
import './Upcoming.css'
import { getMoviesListApi } from '../../AxiosInstance'
import Movie from '../Movie/Movie'
import { useDispatch, useSelector } from 'react-redux'
import { setMoviesObj, setSelectedMoviesByGenreId } from '../../ReduxTK/moviesSlice'
import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice'

export default function Upcoming() {
    // Redux
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: "upcoming",
        pageNum: 1,
    })

    // Get all movies one time in first page load
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) dispatch(setMoviesObj(data));
    }, [data])

    // Define movies to show
    const selectedMovies = useSelector((state) => state.movies.selectedMovies);
    let genreSelected = useSelector(state => state.movies.genreSelected);

    let moviesToShow;
    if (!genreSelected) moviesToShow = data?.results
    else moviesToShow = selectedMovies

    // Handle error and isLoading
    if (error) return <h4 className='text-danger d-flex justify-content-center align-items-center min-vh-100'>Error: The required page is not found ...</h4>
    if (isLoading) return <h4 className='text-info d-flex justify-content-center align-items-center min-vh-100'>Loading ...</h4>

    return (
        <div className='row container-fluid`'>
            {
                moviesToShow.map((item) => {
                    return <Movie key={item.id} movie={item} />
                })
            }
        </div>
    )
}
