import { useParams } from 'react-router'
import './Filmbox.css'
import { useEffect, useState } from 'react'
import LoadingScreen from '../Common/LoadingScreen'

const Filmbox = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true)
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
        setError('Something went wrong while fetching movies.')
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const findMovie = movies.find((movie) => movie.id === id)

  return (
    <div className='container-movie-page'>
      {loading && <LoadingScreen />}
      {error && <p>{error}</p>}

      <ul className='semi-nav-container'>
        <li><a>Home</a> /</li>
        <li><a>{findMovie?.type}</a>  /</li>
        <li>{findMovie?.primaryTitle}</li>
      </ul>

      <div className='video-container'>
        <img src={findMovie?.image} alt='' />
        <div className='overlay1'></div>
        <button className='P-bttn'></button>
      </div>

      <div className='boxer-container'>
        <div className='box1'>
          <img src={findMovie?.image} alt="" />
          <button className='trailer-bttn'>Trailer</button>
        </div>

        <div className='boxer-details'>
          <h2>{findMovie?.primaryTitle}</h2>
          <p><i>{findMovie?.plot}</i></p>

          <div className='details-container'>
            <div>
              <ul>
                <li> <strong>Genre:</strong>
                  <a>{findMovie?.genres}</a>
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
                <li><strong> Duration: </strong>
                  {findMovie?.runtimeSeconds} sec</li>
                <li><strong>Rating:</strong>
                  <span>{findMovie?.rating?.aggregateRating} </span>
                </li>
                <li><strong>Release:</strong>
                  <a> {findMovie?.startYear}</a>
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
          <button className='HD-bttn'>Download in HD</button>
        </div>
      </div>
      <div className='text1'>
        <p><strong>Keywords:</strong>
          {/* mask, artificial intelligence (ai), sequel, murder, serial killer */}
        </p>
      </div>
    </div>
  )
}

export default Filmbox
