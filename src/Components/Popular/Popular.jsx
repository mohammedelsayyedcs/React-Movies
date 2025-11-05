import React, { useEffect, useState } from 'react'
import './Popular.css'
import { getApi } from '../../AxiosInstance';
import Movie from '../Movie/Movie';

export default function Popular() {
    const [moviesObj, setMoviesObj] = useState({});
    const url = "/popular?language=en-US&page=1";

    const getMovies = async (url) => {
        try {
            const res = await getApi.get(url);
            setMoviesObj(res.data);
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
