import { useParams } from 'react-router'
import { Link } from 'react-router'
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

  const movieFromId = movies?.find((movie) => movie.id === id)
  console.log('movieFromId', movieFromId)

  const typePath = movieFromId?.type === 'tvSeries' ? '/tvseries' : '/movies'

  return (
    <div className='container-movie-page'>
      {loading && <LoadingScreen />}
      {error && <p>{error}</p>}

      {/* Breadcrumbs */}
      <ul className='semi-nav-container'>
        <li>
          <Link to='/home' >Home </Link> {'/'}
        </li>
        <li>
          <Link to={typePath} >{movieFromId?.type} </Link> {'/'}
        </li>
        <li>{movieFromId?.primaryTitle}</li>
      </ul>
      {/* Breadcrumbs */}

      <div className='video-container'>
        <img src={movieFromId?.image} alt='' />
        <div className='overlay1'></div>
        <button className='P-bttn'></button>
      </div>

      <div className='boxer-container'>
        <div className='box1'>
          <img src={movieFromId?.image} alt='' />
          <button className='trailer-bttn'>Trailer</button>
        </div>

        <div className='boxer-details'>
          <h2>{movieFromId?.primaryTitle}</h2>
          <p>
            <i>{movieFromId?.plot}</i>
          </p>

          <div className='details-container'>
            <div>
              <ul>
                <li>
                  {' '}
                  <strong>Genre:</strong>
                  {movieFromId?.genres.map((item, index) => (
                    <Link to={`/genre/${item.toLowerCase()}`} key={index}>
                      {item}
                      {', '}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <strong> Duration: </strong>
                  {movieFromId?.runtimeSeconds} sec
                </li>
                <li>
                  <strong>Rating: </strong>
                  <span>{movieFromId?.rating?.aggregateRating} </span>
                </li>
                <li>
                  <strong>Release:</strong>
                  <a> {movieFromId?.startYear}</a>
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
        <p>
          <strong>Keywords:</strong>
          {/* mask, artificial intelligence (ai), sequel, murder, serial killer */}
        </p>
      </div>
    </div>
  )
}

export default Filmbox
