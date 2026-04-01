import React from 'react'
import { Link } from 'react-router'
import './HeaderStyle.css'

const Header = () => {
    return (
        <header className="primary-header">
            <div className="container">
                <div className="heading-searchbox-ul">
                    <div className="nav-wrapper">

                        <div className="primary-logo">
                            <Link to='/' >JAYSONMOVIES</Link>
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

                                <Link to='/home'><li>Home</li></Link>

                                <li className="mega-parent">
                                    <a id="genresBtn">Genres</a>
                                    <div className="mega-menu" id="mega-menu">
                                        <div className="mega-column">
                                            <a>Action</a>
                                            <a>Action & Adventure</a>
                                            <a>Adventure</a>
                                            <a>Animation</a>
                                            <a>Biography</a>
                                            <a>Comedy</a>
                                            <a>Crime</a>
                                            <a>Documentary</a>
                                            <a>Drama</a>
                                        </div>
                                        <div className="mega-column">
                                            <a>Family</a>
                                            <a>Fantasy</a>
                                            <a>Film-Noir</a>
                                            <a>Game-Show</a>
                                            <a>History</a>
                                            <a>Horror</a>
                                            <a>Kungfu</a>
                                            <a>Music</a>
                                            <a>Mystery</a>
                                        </div>
                                        <div className="mega-column">
                                            <a>Mythological</a>
                                            <a>News</a>
                                            <a>Psychological</a>
                                            <a>Reality</a>
                                            <a>Romance</a>
                                            <a>Sci-Fi</a>
                                            <a>Science Fiction</a>
                                            <a>Short</a>
                                            <a>Sitcom</a>
                                        </div>
                                        <div className="mega-column">
                                            <a>Sport</a>
                                            <a>Talk-Show</a>
                                            <a>Thriller</a>
                                            <a>TV Movie</a>
                                            <a>TV Show</a>
                                            <a>War</a>
                                            <a>Western</a>
                                        </div>
                                    </div>
                                </li>
                                <Link to='/movies'><li>Movies</li></Link>
                                <Link to='/tvseries'><li>TV-Series</li></Link>
                                <Link to='/topimdb'><li>Top IMDb</li></Link>
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
                            <img src="../../public/search.png" alt="" />
                        </button>
                    </div>

                </div> {/* heading-searchbox-ul */}
            </div> {/* container */}
        </header >
    )
}

export default Header