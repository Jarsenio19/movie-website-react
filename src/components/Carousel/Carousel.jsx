import React from 'react'
import '../Carousel/CarouselStyle.css'

const Carousel = () => {
  return (

    <section aria-label="Movie photos">

      <div className="carousel">
        <button className="carousel__bttn carousel__bttn--left">
          <img src="images/carousel/back.png" alt="" />
        </button>
        <div className="carousel-container">
          <ul className="carousel-track">
            <li className="carousel-slide current-slide">
              <a>
                <img className="carousel-image" src="../../../public/Movie-poster/Scream.jpg" alt="" />
                <div className="carousel-details">
                  <h2>Scream 7</h2>
                  <p>
                    <span className="carousel-badge">HD</span>  -  114 min Horror, Mystery, Crime
                  </p>
                  <p>
                    When a new Ghostface killer emerges in the quiet town where Sidney Prescott has built a new life, her darkest fears are realized as her daughter...
                  </p>
                  <button className="button1">Watch Now</button>
                </div>

              </a>
            </li>
          </ul>
          <div className="carousel-nav">
            <button className="carousel-indicator current-slide"></button>
            <button className="carousel-indicator"></button>
            <button className="carousel-indicator"></button>
            <button className="carousel-indicator"></button>
            <button className="carousel-indicator"></button>
          </div>
        </div>
        <button className="carousel__bttn carousel__bttn--right">
          <img src="images/carousel/next.png" alt="" />
        </button>
      </div>
    </section>

  )
}

export default Carousel