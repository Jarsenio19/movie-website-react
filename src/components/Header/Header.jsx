import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './HeaderStyle.css'
import SearchInput from '../Common/SearchBar/SearchInput'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isGenresOpen, setIsGenresOpen] = useState(false)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setIsOpen(prev => !prev)
    }

    const toggleGenres = (e) => {
        e.stopPropagation()
        setIsGenresOpen(prev => !prev)
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false)
            setIsGenresOpen(false)
        }

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
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                        >
                            <img className="icon-hamburger" src="../public/menus.png" alt="" aria-hidden="true" />
                        </button>
                    </div>

                    <nav className={`primary-navigation 
                            ${isOpen ? 'active' : ''}`}
                        id="primary-navigation">

                        <ul aria-label="Primary" role="list" className="nav-list">

                            <Link to='/home'> <li>Home</li></Link>

                            <li
                                className={`mega-parent ${isGenresOpen ? 'active' : ''}`}
                                onClick={toggleGenres}> <span>Genres</span>
                                <div className="mega-menu" id="mega-menu">
                                    <div className="mega-column">
                                        <Link to="/genre/action">Action</Link>
                                        <Link to="/genre/adventure-action">Action & Adventure</Link>
                                        <Link to="/genre/animation">Animation</Link>
                                        <Link to="/genre/biography">Biography</Link>
                                        <Link to="/genre/comedy">Comedy</Link>
                                        <Link to="/genre/crime">Crime</Link>
                                        <Link to="/genre/drama">Drama</Link>
                                    </div>
                                    <div className="mega-column">
                                        <Link to="/genre/family">Family</Link>
                                        <Link to="/genre/fantasy">Fantasy</Link>
                                        <Link to="/genre/history">History</Link>
                                        <Link to="/genre/horror">Horror</Link>
                                        <Link to="/genre/music">Music</Link>
                                        <Link to="/genre/mystery">Mystery</Link>
                                    </div>
                                    <div className="mega-column">
                                        <Link to="/genre/romance">Romance</Link>
                                        <Link to="/genre/sci-fi">Sci-Fi</Link>
                                        <Link to="/genre/sport">Sport</Link>
                                        <Link to="/genre/thriller">Thriller</Link>
                                        <Link to="/genre/western">Western</Link>
                                    </div>
                                </div>
                            </li>
                            <Link to='/movies'><li>Movies</li></Link>
                            <Link to='/tvseries'> <li>TV-Series</li></Link>
                            <Link to='/topimdb'>  <li>Top IMDb</li></Link>
                        </ul>
                    </nav>

                    <SearchInput />


                </div> {/* heading-searchbox-ul */}
            </div> {/* container */}
        </header >
    )
}

export default Header
