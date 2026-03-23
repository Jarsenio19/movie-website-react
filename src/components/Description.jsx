import React from 'react'

const Description = () => {
  return (
    <section className="padding-block-200 bg-accent-900">
      <div className="even-columns">

        <div>
          <div className="third-logo">JAYSONMOVIES</div>

          <p className="fs-500 text-neutral-200">
            <a
              className="text-primary-400 text-decoration-none"

            >
              JaysonMovies
            </a>
            - Free movies online, here you can watch movies online in high quality
            for free without annoying of advertising, just come and enjoy your
            movies online. fmovie, fmovies, bmovies
          </p>

          <p className="fs-500 text-neutral-200">
            Disclaimer: This site does not store any files on its server. All contents
            are provided by non-affiliated third parties.
          </p>
        </div>

        <div className="links">

          <div className="column">
            <h2 className="fs-500 fw-semi-bold text-neutral-100">MOVIES</h2>
            <ul className="fs-400 text-primary-400" role="list">
              <li><a>Reality-TV</a></li>
              <li><a>Comedy</a></li>
              <li><a>Drama</a></li>
              <li><a>Crime</a></li>
              <li><a>Horror</a></li>
            </ul>
          </div>

          <div className="column">
            <h2 className="fs-500 fw-semi-bold text-neutral-100">COUNTRY</h2>
            <ul className="fs-400 text-primary-400" role="list">
              <li><a>United States</a></li>
              <li><a>Australia</a></li>
              <li><a>Croatia</a></li>
              <li><a>Serbia</a></li>
              <li><a>Slovenia</a></li>
            </ul>
          </div>

          <div className="column">
            <h2 className="fs-500 fw-semi-bold text-neutral-100">FREE MOVIES</h2>
            <ul className="fs-400 text-primary-400" role="list">
              <li><a>Movies</a></li>
              <li><a>TV-Series</a></li>
              <li><a>Top IMDb</a></li>
            </ul>
          </div>

          <div className="column">
            <h2 className="fs-500 fw-semi-bold text-neutral-100">HELP</h2>
            <ul className="fs-400 text-primary-400" role="list">
              <li><a>FAQ's</a></li>
              <li><a>DMCA</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Description