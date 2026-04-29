import MovieCard from './MovieCard.jsx'
import './Cards.css'
import LoadingScreen from '../Common/LoadingScreen.jsx'
import { useEffect, useState } from 'react'


const WatchTopIMDb = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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
        setError('Something went wrong while fetching movie.');
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const watchTopImdb = movies.filter((movie) => movie.type.toLowerCase() === 'movie')
  //  && movie.rating?.aggregateRating >= 6)

  return (
    <main>
      <section className="padding-block-100">
        <div className='container'>
          <h3>TOP IMDB</h3>
          <div className="box-wrapper">
            {loading && <LoadingScreen />}
            {error && <p>{error}</p>}

            {watchTopImdb.map((data, index) => (
              <MovieCard
                key={index}
                id={data.id}
                image={data.image}
                title={data.title}
                isHD={data.isHD}
                isCAM={data.isCAM}
              />

            ))}

          </div>
        </div>
      </section>
    </main>
  )
}

export default WatchTopIMDb