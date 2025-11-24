import './Movie.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart, setCartArr } from '../../ReduxTK/moviesSlice';

export default function Movie({ movie, isModal, closeModal }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    const navTo = useNavigate();
    const showMovieDetails = (id) => {
        navTo(`/${id}`);
    }

    // Redux
    const dispatch = useDispatch()
    const addToCartHandler = (movie) => {
        dispatch(setCartArr(movie))
    }
    const removeFromCartHandler = (movie) => {
        dispatch(removeFromCart(movie))
    }

    return (
        <div className={`col-sm-12 col-md-6 col-lg-4 py-3 ${isModal ? 'modal-movie' : ''}`}>
            <div className={`card border-0 position-relative px-1 ${isModal ? 'modal-card' : ''}`}>
                <span
                    className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${isModal ? 'modal-badge' : ''}`}>
                    {movie.vote_average.toFixed(1)}/10
                </span>
                <img src={imageUrl + movie.backdrop_path} className={`card-img-top ${isModal ? 'modal-img' : ''}`} alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title text-danger">{movie.title}</h5>
                    <p className="card-text text-truncate">{movie.overview}</p>
                    {
                        !isModal &&
                        <>
                            <a className="btn btn-outline-info mt-2" onClick={() => { showMovieDetails(movie.id) }}>View Details</a>
                            <a className="btn btn-danger mx-3 mt-2" onClick={() => { addToCartHandler(movie) }}>Add to Cart</a>
                        </>
                    }
                    {
                        isModal &&
                        <div>
                            <a className="btn btn-outline-info mt-2"
                                onClick={() => {
                                    closeModal();
                                    showMovieDetails(movie.id);
                                }}>
                                View Details
                            </a>
                            <a className="btn btn-outline-danger mx-3 mt-2"
                                onClick={() => { removeFromCartHandler(movie) }}>
                                Remove From Cart
                            </a>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}
