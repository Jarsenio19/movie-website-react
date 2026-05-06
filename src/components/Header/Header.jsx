import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './HeaderStyle.css'
import SearchInput from '../Common/SearchBar/SearchInput'
import { GiHamburgerMenu } from "react-icons/gi";

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


    const columns = [
        ['Action', 'Action & Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama'],
        ['Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery'],
        ['Romance', 'Sport', 'Thriller', 'Western']
    ]
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
                            <GiHamburgerMenu className='hamburger-icon' />
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
                                        {columns[0].map((item, index) => (
                                            <Link key={index} to={`/genre/${item}`} >{item}</Link>
                                        ))}
                                    </div>
                                    <div className="mega-column">
                                        {columns[1].map((item, index) => (
                                            <Link key={index} to={`/genre/${item}`}> {item}</Link>
                                        ))}
                                    </div>
                                    <div className="mega-column">
                                        {columns[2].map((item, index) => (
                                            <Link key={index} to={`/genre/${item}`}>{item}</Link>
                                        ))}
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