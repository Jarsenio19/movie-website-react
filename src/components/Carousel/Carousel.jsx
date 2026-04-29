import React from 'react'
import './CarouselStyle.css'
import { Link } from 'react-router'

const Carousel = ({ movieHighlight }) => {
  const { image, primaryTitle, genres, runtimeSeconds } = movieHighlight ?? {}
  return (
    <section aria-label='Movie photos'>
      <div className='carousel'>
        <button className='carousel__bttn carousel__bttn--left'>
          <img src='images/carousel/back.png' alt='' />
        </button>
        <div className='carousel-container'>
          <ul className='carousel-track'>
            <li className='carousel-slide current-slide'>
              <a>
                <img className='carousel-image' src={image} alt='' />
                <Link to='/film'>
                  <div className='carousel-details'>
                    <h2>{primaryTitle}</h2>
                    <p>
                      <span className='carousel-badge'>HD</span> -
                      {runtimeSeconds}
                      {genres?.map((item, index) => (
                        <span key={index}>{item}, </span>
                      ))}
                    </p>
                    <p>{movieHighlight?.plot}</p>
                    <button className='button1'>Watch Now</button>
                  </div>
                </Link>
              </a>
            </li>
          </ul>
          <div className='carousel-nav'>
            <button className='carousel-indicator current-slide'></button>
            <button className='carousel-indicator'></button>
            <button className='carousel-indicator'></button>
            <button className='carousel-indicator'></button>
            <button className='carousel-indicator'></button>
          </div>
        </div>
        <button className='carousel__bttn carousel__bttn--right'>
          <img src='images/carousel/next.png' alt='' />
        </button>
      </div>
    </section>
  )
}

export default Carousel