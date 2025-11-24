import { useDispatch, useSelector } from 'react-redux'
import './Paggination.css'

import React from 'react'
import { decreasePageNumber, increasePageNumber, setComponentName } from '../../ReduxTK/moviesSlice'

export default function Paggination({ name }) {
    // Redux
    let pageNumber = 1;
    if (name == 'now_playing') {
        pageNumber = useSelector(state => state.movies.pageNumNowPlaying);
    } else if (name == 'popular') {
        pageNumber = useSelector(state => state.movies.pageNumPopular);
    } else if (name == 'upcoming') {
        pageNumber = useSelector(state => state.movies.pageNumUpcoming);
    } else if (name == 'top_rated') {
        pageNumber = useSelector(state => state.movies.pageNumTopRated);
    }

    const dispatch = useDispatch()
    dispatch(setComponentName(name))

    const previousPageHandler = () => {
        dispatch(decreasePageNumber())
    }
    const nextPageHandler = () => {
        dispatch(increasePageNumber())
    }

    return (
        <div className='text-center my-4'>
            <a className='btn btn-warning px-4 py-2 rounded-pill' onClick={previousPageHandler}>Prev</a>
            <span className='text-info fs-4 fw-bold mx-3' >{pageNumber}</span>
            <a className='btn btn-warning px-4 py-2 rounded-pill' onClick={nextPageHandler}>Next</a>
        </div>
    )
}
