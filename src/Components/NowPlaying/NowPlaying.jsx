import React, { useEffect, useState } from 'react'
import './NowPlaying.css'
import { getApi } from '../../AxiosInstance';

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
        <div>
            <ul>
                {moviesObj.results?.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}
