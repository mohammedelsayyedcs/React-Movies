import React from 'react'
import './Movie.css'

export default function Movie({ movie }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
            <div className="card border-0">
                <img src={imageUrl + movie.backdrop_path} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.slice(0,50)}</p>
                    <a className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    )
}
