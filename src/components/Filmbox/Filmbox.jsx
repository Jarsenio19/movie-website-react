import './Filmbox.css'

const Filmbox = () => {
  return (
    <div className='container-movie-page'>
      <ul className='semi-nav-container'>
        <li><a>Home</a> /</li>
        <li><a>Movies</a>  /</li>
        <li>Scream 7</li>
      </ul>

      <div className='video-container'>
        <img src="../../public/Movie-poster/Scream.jpg" alt="" />
        <div className='overlay1'></div>
        <button className='P-bttn'></button>
      </div>

      <div className='boxer-container'>
        <div className='box1'>
          <img src="../../public/Movie-poster/scream-7.jpg" alt="" />
          <button className='trailer-bttn'>Trailer</button>
        </div>

        <div className='boxer-details'>
          <h2>Scream 7</h2>
          <p><i>When a new Ghostface killer emerges in the quiet town where Sidney Prescott has built a new life, her darkest fears are realized as her daughter becomes the next target. Determined to protect her family, Sidney must face the horrors of her past to put an end to the bloodshed once and for all..</i></p>

          <div className='details-container'>
            <div>
              <ul>
                <li> <strong>Genre:</strong>
                  <a> Horror, Mystery, Crime</a>
                </li>
                <li> <strong>Actor:</strong>
                  <a>Neve Campbell, Courteney Cox, Isabel May</a>
                </li>
                <li><strong>Director:</strong>
                  <a>Kevin Williamson</a>
                </li>
                <li><strong>Country:</strong>
                  <a>United States</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li><strong> Duration:</strong>
                  <a></a>114 min</li>
                <li><strong>Quality:</strong>
                  <a><span>HD</span></a>
                </li>
                <li><strong>Release:</strong>
                  <a>2026</a>
                </li>
                <li><strong>IMDb:</strong> -</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='film-button'>
          <button className='HD-bttn'>Stream HD</button>
          <button className='HD-bttn'>Dowload in HD</button>
        </div>
      </div>
      <div className='text1'>
        <p><strong>Keywords:</strong> mask, artificial intelligence (ai), sequel, murder, serial killer</p>
      </div>
    </div >


  )
}

export default Filmbox