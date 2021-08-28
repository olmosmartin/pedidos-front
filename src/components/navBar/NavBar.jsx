import React from 'react'
import { Link } from "react-router-dom";

import './NavBar.css'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top sombra">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="container m-2">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li>
                            <span className="badge rounded-pill bg-secondary p-2 mt-2">Registrá tu negocio</span>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="#">Drop Down</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
