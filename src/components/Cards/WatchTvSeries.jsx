import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import './Cards.css'
import LoadingScreen from '../Common/LoadingScreen.jsx'


const WatchTvSeries = () => {
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
        setError('Something went wrong while fetching movie.')
      }
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const watchMovies = movies.filter((movie) => movie.type.toLowerCase() === 'tvminiseries' || movie.type.toLowerCase() === 'tvseries')

  return (
    <main>
      <section className="padding-block-100">
        <div className='container'>
          <h3>WATCH TV-SERIES</h3>
          <div className="box-wrapper">
            {loading && <LoadingScreen />}
            {error && <p>{error}</p>}

            {watchMovies.map((data, index) => (
              <MovieCard
                key={index}
                image={data.image}
                title={data.title}
                isEp={true}
                epNum={data?.ep}
              />

            ))}

          </div>
        </div>
      </section>
    </main>
  )
}

export default WatchTvSeries