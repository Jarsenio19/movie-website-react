import React from 'react'

const Header = () => {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="heading-searchbox-ul">
                    <div className="nav-wrapper">

                        <div className="primary-logo">
                            JAYSONMOVIES
                        </div>

                        <button
                            className="mobile-nav-toggle"
                            aria-controls="primary-navigation"
                            aria-expanded="false"
                        >
                            <img className="icon-hamburger" src="images/menus.png" alt="" aria-hidden="true" />
                            <img className="icon-close" src="images/close.png" alt="" aria-hidden="true" />
                            <span className="visually-hidden">Menu</span>
                        </button>

                        <nav className="primary-navigation" id="primary-navigation">
                            <ul aria-label="Primary" role="list" className="nav-list">
                                <li><a href="home.html">Home</a></li>

                                <li className="mega-parent">
                                    <a href="#" id="genresBtn">Genres</a>
                                    <div className="mega-menu" id="mega-menu">
                                        <div className="mega-column">
                                            <a href="#">Action</a>
                                            <a href="#">Adventure</a>
                                            <a href="#">Comedy</a>
                                        </div>
                                    </div>
                                </li>

                                <li><a href="movie-pages/movies.html">Movies</a></li>
                                <li><a href="tv-series/tv-series.html">TV-Series</a></li>
                                <li><a href="top-IMDb/top-Imdb.html">Top IMDb</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div className="primary-bttn">
                        <input
                            className="display-sm-none display-md-inline-flex"
                            type="text"
                            placeholder="Search.."
                        />
                        <button className="button display-sm-none display-md-inline-flex">
                            <img src="search.png" alt="" />
                        </button>
                    </div>

                </div> {/* heading-searchbox-ul */}
            </div> {/* container */}
        </header>
    )
}

export default Header