import React from 'react'

const Filmbox = () => {
  return (
    <div className='container-movie-page'>
      <div className='semi-nav-container'>
        <li><a>Home</a> /</li>
        <li><a>Movies</a>  /</li>
        <li>Scream 7</li>
      </div>

      <div className='video-container'>
        <img src="../../public/Movie-poster/Scream.jpg" alt="" />
        <button></button>
      </div>
      <div className='Boxer-container'>
        <div className='box1'>
          <img src="" alt="" />
          <button>Trailer</button>
        </div>

        <div>
          <div>
            <h2>Scream 7</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo molestias itaque ab tempore, iusto optio? Ipsam corrupti nemo illo dolore vel, distinctio fuga ad neque quo eveniet magni optio.</p>

            <div>
              <li>Genre: Horror, Mystery, Crime</li>
              <li>Actor: Neve Campbell, Courteney Cox, Isabel May</li>
              <li>Director: Kevin Williamson</li>
              <li>Country: United States</li>
            </div>

            <div>
              <li>Duration: 114 min</li>
              <li>Quality: HD</li>
              <li>Release: 2026</li>
              <li>IMDb: -</li>
            </div>

          </div>
        </div>

        <div>
          <button>Stream HD</button>
          <button>Dowload in HD</button>
        </div>
      </div>
    </div>

  )
}

export default Filmbox