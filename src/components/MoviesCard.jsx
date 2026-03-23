import React from 'react'

const MoviesCard = () => {
  return (
    <section className="padding-block-100">
      <div className="container">
        <h3>WATCH MOVIES</h3>

        <div className="box-wrapper">

          <a href="/index.html">
            <div className="box-wrapper">
              <div className="box-container">
                <div className="box">
                  <img src="images/carousel/Pat.jfif" alt="" />
                  <h3>HELLO WORLD</h3>
                </div>
                <div className="badge">HD</div>
                <div className="overlay">
                  <div className="play-bttn">&#9658;</div>
                </div>
              </div>
            </div>
          </a>

          {/* Repeat block */}
          <a href="/index.html">
            <div className="box-wrapper">
              <div className="box-container">
                <div className="box">
                  <img src="images/carousel/Pat.jfif" alt="" />
                  <h3>HELLO WORLD</h3>
                </div>
                <div className="badge">HD</div>
                <div className="overlay">
                  <div className="play-bttn">&#9658;</div>
                </div>
              </div>
            </div>
          </a>

          {/* Continue same structure for the rest */}

        </div>
      </div>
    </section>

  )
}

export default MoviesCard