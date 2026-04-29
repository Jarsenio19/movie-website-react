import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './HeaderStyle.css'
import SearchInput from '../Common/SearchBar/SearchInput'

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
                            <img className="icon-hamburger" src="../public/menus.png" alt="" aria-hidden="true" />
                            <img className="icon-close" src="images/close.png" alt="" aria-hidden="true" />
                            <span className="visually-hidden">Menu</span>
                        </button>

                        <nav className="primary-navigation" id="primary-navigation">

                            <ul aria-label="Primary" role="list" className="nav-list">

                                <Link to='/home'> <li>Home</li></Link>

                                <li
                                    className={`mega-parent ${isOpen ? 'active' : ''}`}
                                    onClick={toggleMenu}> <span>Genres</span>
                                    <div className="mega-menu" id="mega-menu">
                                        <div className="mega-column">
                                            <Link to="/genre/action">Action</Link>
                                            <Link to="/genre/adventure-action">Action & Adventure</Link>
                                            <Link to="/genre/animation">Animation</Link>
                                            <Link to="/genre/biography">Biography</Link>
                                            <Link to="/genre/comedy">Comedy</Link>
                                            <Link to="/genre/crime">Crime</Link>
                                            {/* <Link to="/Documentary">Documentary</Link> */}
                                            <Link to="/genre/drama">Drama</Link>
                                        </div>
                                        <div className="mega-column">
                                            <Link to="/genre/family">Family</Link>
                                            <Link to="/genre/fantasy">Fantasy</Link>
                                            {/* <Link to="/Film-Noir">Film-Noir</Link> */}
                                            {/* <Link to="/Game-Show">Game-Show</Link> */}
                                            <Link to="/genre/history">History</Link>
                                            <Link to="/genre/horror">Horror</Link>
                                            {/* <Link to="/kungfu">Kungfu</Link> */}
                                            <Link to="/genre/music">Music</Link>
                                            <Link to="/genre/mystery">Mystery</Link>
                                        </div>
                                        <div className="mega-column">
                                            {/* <Link to="/Mythological">Mythological</Link> */}
                                            {/* <Link to="/News">News</Link> */}
                                            {/* <Link to="/Psychological">Psychological</Link> */}
                                            {/* <Link to="/Reality">Reality</Link> */}
                                            <Link to="/genre/romance">Romance</Link>
                                            <Link to="/genre/sci-fi">Sci-Fi</Link>
                                            {/* <Link to="/science fiction">Science Fiction</Link> */}
                                            {/* <Link to="/Short">Short</Link> */}
                                            {/* <Link to="/Sitcom">Sitcom</Link> */}
                                        </div>
                                        <div className="mega-column">
                                            <Link to="/genre/sport">Sport</Link>
                                            {/* <Link to="/Talk-Show">Talk-Show</Link> */}
                                            <Link to="/genre/thriller">Thriller</Link>
                                            {/* <Link to="/TV Movie">TV Movie</Link> */}
                                            {/* <Link to="/TV Show">TV Show</Link> */}
                                            {/* <Link to="/War">War</Link> */}
                                            <Link to="/genre/western">Western</Link>
                                        </div>
                                    </div>
                                </li>
                                <Link to='/movies'><li>Movies</li></Link>
                                <Link to='/tvseries'> <li>TV-Series</li></Link>
                                <Link to='/topimdb'>  <li>Top IMDb</li></Link>
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
