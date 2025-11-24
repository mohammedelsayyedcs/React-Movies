import './NowPlaying.css'
import Movie from '../Movie/Movie';
import { setMoviesObj } from '../../ReduxTK/moviesSlice';
import { useEffect } from 'react';

import { useGetAllMoviesQuery } from '../../ReduxTK/moviesApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyMovies from '../EmptyMovies/EmptyMovies';
import Loading from '../Loading/Loading';
import Paggination from '../Paggination/Paggination';

export default function NowPlaying() {
    // Redux
    const pageNumber = useSelector(state => state.movies.pageNumNowPlaying)
    // const [pageNumber, setPageNumber] = useState()
    const { data, error, isLoading } = useGetAllMoviesQuery({
        category: 'now_playing',
        pageNum: pageNumber,
    })

    // Store movies globally
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) dispatch(setMoviesObj(data))
    }, [data])


    // Define movies to show
    const selectedMovies = useSelector((state) => state.movies.selectedMovies);
    let genreSelected = useSelector(state => state.movies.genreSelected);

    let moviesToShow;
    if (!genreSelected && selectedMovies.length === 0) moviesToShow = data?.results
    else moviesToShow = selectedMovies

    if (error) return <Error />
    if (isLoading) return <Loading />
    if (moviesToShow.length == 0) return <EmptyMovies />

    return (
        <div className='row container-fluid'>
            {
                moviesToShow.map((item) => {
                    return <Movie key={item.id} movie={item} isModal={false} />
                })
            }
            <Paggination name={'now_playing'} />
        </div>
    )
}
