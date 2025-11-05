import React, { useEffect, useState } from 'react'
import './NowPlaying.css'
import { getApi } from '../../AxiosInstance';
import Movie from '../Movie/Movie';

export default function NowPlaying() {
    const [moviesObj, setMoviesObj] = useState({});
    const url = "/now_playing?language=en-US&page=1";

    const getMoviesObject = async (url) => {
        try {
            const res = await getApi.get(url);
            setMoviesObj(res.data);
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
