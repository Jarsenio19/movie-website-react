import MovieCard from "./MovieCard.jsx"
import './Cards.css'
import { MovieData } from '../../Data/MovieData.js'
import { useEffect, useState } from "react"


const LatestTvSeries = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [laoding, setLoading] = useState(false)
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
        { error && <p>{error}</p> }
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])


  const latestTvSeries = movies.filter((movie) => (movie.type.toLowerCase() === 'tvseries', 'tvminisiries') && movie.rating?.aggregateRating >= 6)

  return (
    <section className="padding-block-100">
      <div className='container'>
        <h3>LATEST TV SERIES</h3>
        <div className="box-wrapper">
          {latestTvSeries?.map((data, index) => (
            <MovieCard
              key={index}
              id={data.id}
              image={data.image}
              title={data.title}
            />

          ))}

        </div>
      </div>
    </section>
  )
}

export default LatestTvSeries