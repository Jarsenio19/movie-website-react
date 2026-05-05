import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import LoadingScreen from '../Common/LoadingScreen.jsx'

const RelatedMovies = ({ genres = [], currentMovieId }) => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch('https://api.imdbapi.dev/titles')

        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const result = await response.json()
        const moviesData = result.titles.map((item) => ({
          ...item,
          id: item.id,
          title: item.primaryTitle,
          image: item.primaryImage?.url || '',
        }))
        setMovies(moviesData)
      } catch (error) {
        console.error(error)
        setError('Something went wrong while fetching movies.')
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  // ✅ FILTER LOGIC (THIS WAS MISSING)
  const relatedMovies = movies.filter((movie) => {
    if (movie.id === currentMovieId) return false

    const movieGenres = movie.genres.map(g => g.toLowerCase())
    const selectedGenres = genres.map(g => g.toLowerCase())

    return selectedGenres.some(g => movieGenres.includes(g))
  })
  console.log(relatedMovies);


  return (
    <section className="padding-block-100">
      <div className="container">
        <h3>RELATED MOVIES</h3>

        {loading && <LoadingScreen />}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="box-wrapper">
            {relatedMovies.length > 0 ? (
              relatedMovies.slice(0, 8).map((data) => (
                <MovieCard
                  key={data.id} // ✅ fixed key
                  id={data.id}
                  image={data.image}
                  title={data.title}
                />
              ))
            ) : (
              <p>No related movies found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default RelatedMovies