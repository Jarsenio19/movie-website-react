import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './HeaderStyle.css'
import SearchInput from '../Common/SearchInput'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsOpen(prev => !prev)
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setIsOpen(false)

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

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

                                <li><Link to='/home'>Home</Link></li>

                                <li
                                    className={`mega-parent ${isOpen ? 'active' : ''}`}
                                    onClick={toggleMenu}> <span>Genres</span>
                                    <div className="mega-menu" id="mega-menu">
                                        <div className="mega-column">
                                            <Link to="/genre/action">Action</Link>
                                            <Link to="/genre/adventure">Adventure</Link>
                                            <Link to="/genre/animation">Animation</Link>
                                            <Link to="/genre/biography">Biography</Link>
                                            <Link to="/genre/comedy">Comedy</Link>
                                            <Link to="/genre/crime">Crime</Link>
                                            <Link to="/genre/Documentary">Documentary</Link>
                                            <Link to="/genre/Drama">Drama</Link>
                                        </div>
                                        <div className="mega-column">
                                            <Link to="/genre/Family">Family</Link>
                                            <Link to="/genre/Fantasy">Fantasy</Link>
                                            <Link to="/genre/Film-Noir">Film-Noir</Link>
                                            <Link to="/genre/Game-Show">Game-Show</Link>
                                            <Link to="/genre/History">History</Link>
                                            <Link to="/genre/Horror">Horror</Link>
                                            <Link to="/genre/Kungfu">Kungfu</Link>
                                            <Link to="/genre/Music">Music</Link>
                                            <Link to="/genre/Mystery">Mystery</Link>
                                        </div>
                                        <div className="mega-column">
                                            <Link to="/genre/Mythological">Mythological</Link>
                                            <Link to="/genre/News">News</Link>
                                            <Link to="/genre/Psychological">Psychological</Link>
                                            <Link to="/genre/Reality">Reality</Link>
                                            <Link to="/genre/Romance">Romance</Link>
                                            <Link to="/genre/Sci-Fi">Sci-Fi</Link>
                                            <Link to="/genre/Science Fiction">Science Fiction</Link>
                                            <Link to="/genre/Short">Short</Link>
                                            <Link to="/genre/Sitcom">Sitcom</Link>
                                        </div>
                                        <div className="mega-column">
                                            <Link to="/genre/Sport">Sport</Link>
                                            <Link to="/genre/Talk-Show">Talk-Show</Link>
                                            <Link to="/genre/Thriller">Thriller</Link>
                                            <Link to="/genre/TV Movie">TV Movie</Link>
                                            <Link to="/genre/TV Show">TV Show</Link>
                                            <Link to="/genre/War">War</Link>
                                            <Link to="/genre/">Western</Link>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to='/movies'>Movies</Link></li>
                                <li><Link to='/tvseries'>TV-Series</Link></li>
                                <li><Link to='/topimdb'>Top IMDb</Link></li>
                            </ul>
                        </nav>

                    </div>
                    <SearchInput />


                </div> {/* heading-searchbox-ul */}
            </div> {/* container */}
        </header >
    )
}

export default Header