import React, { useEffect, useState } from 'react'
import './NowPlaying.css'
import { getMoviesListApi } from '../../AxiosInstance';
import Movie from '../Movie/Movie';

import { useSelector, useDispatch } from 'react-redux';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';

export default function NowPlaying() {
    // Redux
    const dispatch = useDispatch();
    const moviesObj = useSelector(state => state.movies.moviesObj);

    // const [moviesObj, setMoviesObj] = useState({});
    const url = "/now_playing?language=en-US&page=1";

    const getMoviesObject = async (url) => {
        try {
            const res = await getMoviesListApi.get(url);
            // setMoviesObj(res.data);
            dispatch(setMoviesObj(res.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMoviesObject(url);
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
