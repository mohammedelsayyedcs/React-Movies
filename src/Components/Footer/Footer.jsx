import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
                <p className="col-md-4 mb-0 text-body-secondary ms-5">
                    © 2025 Movies, Inc
                </p>
                <ul className="nav col-md-4 justify-content-end me-5">

                    <li className="nav-item">
                        <NavLink to={'now-playing'} className="nav-link text-decoration-none text-secondary">
                            Now Playing
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'popular'} className="nav-link text-decoration-none text-secondary">
                            Popluar
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'upcoming'} className="nav-link text-decoration-none text-secondary">
                            Upcoming
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'top-rated'} className="nav-link text-decoration-none text-secondary">
                            Top Rated
                        </NavLink>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
