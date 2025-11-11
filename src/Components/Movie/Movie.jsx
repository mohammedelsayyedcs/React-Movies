import React from 'react'
import './Movie.css'
import { useNavigate } from 'react-router-dom';

export default function Movie({ movie }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    const navTo = useNavigate();
    const showMovieDetails = (id) => {
        navTo(`/${id}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
            <div className="card border-0 position-relative px-1">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {movie.vote_average.toFixed(1)}/10
                </span>
                <img src={imageUrl + movie.backdrop_path} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title text-danger">{movie.title}</h5>
                    <p className="card-text text-truncate">{movie.overview}</p>
                    <a className="btn btn-outline-info" onClick={() => { showMovieDetails(movie.id) }}>View Details</a>
                </div>
            </div>
        </div>
    )
}
