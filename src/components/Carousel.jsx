import React from 'react'

const Carousel = () => {
  return (
    <main>
      <section aria-label="Movie photos">
        <div className="carousel">
          <button className="carousel__bttn carousel__bttn--left">
            <img src="images/carousel/back.png" alt="" />
          </button>
          <div className="carousel-container">
            <ul className="carousel-track">
              <li className="carousel-slide current-slide">
                <a>
                  <img className="carousel-image" src="images/movie-poster/Scary-movie1.png" alt="" />
                  <div className="carousel-details">
                    <h2>Scary Movie</h2>
                    <p>
                      <span className="carousel-badge">HD</span>- 1h 28m Dark Comedy, Parody, Raunchy Comedy...
                    </p>
                    <br />
                    <p>
                      A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked by a bumbling serial killer.. ...
                    </p>
                    <button className="button1">Watch Now</button>
                  </div>
                </a>
              </li>
              ``
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
    </main>
  )
}

export default Carousel