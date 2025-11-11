import React, { useEffect, useState } from 'react'
import './Popular.css'
import { getMoviesListApi } from '../../AxiosInstance';
import Movie from '../Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';

export default function Popular() {
    // Redux
    const moviesObj = useSelector(state => state.movies.moviesObj);
    const dispatch = useDispatch();

    // const [moviesObj, setMoviesObj] = useState({});
    const url = "/popular?language=en-US&page=1";

    const getMovies = async (url) => {
        try {
            const res = await getMoviesListApi.get(url);
            // setMoviesObj(res.data);
            dispatch(setMoviesObj(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    // Execute in first page load
    useEffect(() => {
        getMovies(url);
    }, [])

    return (
        <div className='row container-fluid'>
            {
                moviesObj.results?.map((item) => {
                    return <Movie key={item.id} movie={item} />
                })
            }
        </div>
    )
}
