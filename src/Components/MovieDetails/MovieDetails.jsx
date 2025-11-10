import React from 'react'
import './MovieDetails.css'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function MovieDetails() {
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const navTo = useNavigate();
    const { mId } = useParams();

    // Redux: Get movie details from moviesObj in moviesSlice
    const moviesObj = useSelector(state => state.movies.moviesObj);
    const movie = moviesObj.results?.find((item) => item.id == mId);

    // Methods
    const goBack = () => {
        navTo(-1);
    }

    return (
        <div className='row'>
            <div className='position-relative col-sm-12 col-md-6 pe-5'>
                <img src={imageUrl + movie.poster_path} className="detail-img card-img-top" alt={movie.title} />
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                    {movie.vote_average.toFixed(1)}/10
                </span>
            </div>
            <div className='col-sm-12 col-md-6 px-5 mt-5'>
                <h5 className="py-5">{movie.title}</h5>
                <p className="">{movie.overview}</p>
                <a className="btn btn-warning my-5" onClick={goBack}>Go Back</a>
            </div>
        </div>
    )
}
