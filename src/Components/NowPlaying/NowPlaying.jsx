import './NowPlaying.css'
import Movie from '../Movie/Movie';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useEffect } from 'react';

import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import { useDispatch } from 'react-redux';

export default function NowPlaying() {
    // Redux
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: 'now_playing',
        pageNum: 2,
    })

    // Store movies globally
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMoviesObj(data))
    }, [data])

    if (error) return <h4 className='text-danger d-flex justify-content-center align-items-center min-vh-100'>Error: The required page is not found ...</h4>
    if (isLoading) return <h4 className='text-info d-flex justify-content-center align-items-center min-vh-100'>Loading ...</h4>

    return (
        <div className='row container-fluid'>
            {
                data.results?.map((item) => {
                    return <Movie key={item.id} movie={item} />
                })
            }
        </div>
    )
}
