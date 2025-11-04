import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
                <div className="container">
                    <NavLink to={'/'} className="navbar-brand text-danger fw-bold fs-4" >Movies</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <NavLink to={'now-playing'} className="nav-link" aria-current="page">Now Playing</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to={'popular'} className="nav-link" aria-current="page">Popular</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to={'upcoming'} className="nav-link" aria-current="page">Upcoming</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink to={'top-rated'} className="nav-link" aria-current="page">Top Rated</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
