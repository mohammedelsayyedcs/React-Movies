import React, { useContext } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { AppSettings } from '../../AppSettingsContext'

export default function Header() {
    // Get the variables I want from AppSettings
    const { theme, changeTheme, user } = useContext(AppSettings);

    // Change the theme of the whole website
    // This method will be executed once user clicks on the themeIcon
    const toggleTheme = () => {
        theme.themeStyle == 'light'
            ? changeTheme({ themeIcon: 'Light', themeStyle: 'dark' })
            : changeTheme({ themeIcon: 'Dark', themeStyle: 'light' })
    }

    // Apply theme.themeStyle for the whole website
    document.documentElement.setAttribute('data-bs-theme', theme.themeStyle);

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink to={'/'} className="navbar-brand text-danger fw-bold fs-4" >{user} Movies</NavLink>
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
                            <li className="nav-item px-2">
                                <a className="btn btn-outline-success" aria-current="page" onClick={toggleTheme}>{theme.themeIcon}</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
