import { useParams } from 'react-router'
import './Filmbox.css'
import { useEffect, useState } from 'react'

const Filmbox = () => {
  const [movies, setMovies] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const jsonResponse = await fetch('https://api.imdbapi.dev/titles')
        const result = await jsonResponse.json()
        const buildMovies = result.titles.map((item) => ({
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage.url,
          ...item,
        }))
        setMovies(buildMovies)
      } catch (error) {
        console.log('Handle later', error)
      }
    }
    fetchAPI()
  }, [])

  const findMovie = movies.find((movie) => movie.id === id)
  console.log('TINGNAN NATINN', findMovie)
  return (
    <div className='container-movie-page'>
      <ul className='semi-nav-container'>
        <li>
          <a>Home</a> /
        </li>
        <li>
          <a>Movies</a> /
        </li>
        <li>Scream 7</li>
      </ul>

      <div className='video-container'>
        <img src='../../public/Movie-poster/Scream.jpg' alt='' />
        <div className='overlay1'></div>
        <button className='P-bttn'></button>
      </div>

      <div className='boxer-container'>
        <div className='box1'>
          <img src={findMovie?.image} alt='' />
          <button className='trailer-bttn'>Trailer</button>
        </div>

        <div className='boxer-details'>
          <h2>{findMovie?.primaryTitle}</h2>
          <p>
            <i>{findMovie?.plot}</i>
          </p>

          <div className='details-container'>
            <div>
              <ul>
                <li>
                  {' '}
                  <strong>Genre:</strong>
                  <a> Horror, Mystery, Crime</a>
                </li>
                <li>
                  {' '}
                  <strong>Actor:</strong>
                  <a> Neve Campbell, Courteney Cox, Isabel May</a>
                </li>
                <li>
                  <strong>Director: </strong>
                  Kevin Williamson
                </li>
                <li>
                  <strong>Country:</strong>
                  <a> United States</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <strong> Duration: </strong>
                  114 min
                </li>
                <li>
                  <strong>Quality:</strong>
                  <span>HD</span>
                </li>
                <li>
                  <strong>Release:</strong>
                  <a> 2026</a>
                </li>
                <li>
                  <strong>IMDb:</strong> -
                </li>
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
        <p>
          <strong>Keywords:</strong> mask, artificial intelligence (ai), sequel,
          murder, serial killer
        </p>
      </div>
    </div>
  )
}

export default Filmbox
